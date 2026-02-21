import React, { useState } from 'react';
import { Input, Form, Button, Label } from 'reactstrap';
import './inputField.css';

const dateRender = (date) => {
  // make the date output 'yyyy-mm-dd'
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}-${month}-${day}`;
};

// Calculate the next occurrence of a yearly repeating holiday
const getNextYearlyOccurrence = (inputDate) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const inputDateObj = new Date(inputDate);

  // Create date for this year
  let nextOccurrence = new Date(currentYear, inputDateObj.getMonth(), inputDateObj.getDate());

  // If the date has already passed this year, use next year
  if (nextOccurrence <= today) {
    nextOccurrence = new Date(currentYear + 1, inputDateObj.getMonth(), inputDateObj.getDate());
  }

  return dateRender(nextOccurrence);
};

const InputField = (props) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setMessage('Please select a valid image file.');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage('Image file size must be less than 5MB.');
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Convert image file to base64 for storage
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Validate form fields
    if (!name || !date) {
      setMessage('Please fill in at least the name and date fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert image to base64 if provided
      let imageData = null;
      if (imageFile) {
        imageData = await convertImageToBase64(imageFile);
      }

      // Create a new holiday object with yearly repeating date
      const newHoliday = {
        id: Date.now(), // Use timestamp for unique ID
        date: getNextYearlyOccurrence(date), // Calculate next yearly occurrence
        originalDate: date, // Store the original date for reference
        name: name,
        description: description || '',
        image: imageData, // Use uploaded image or null
        isYearlyRepeating: true // Flag to indicate this is a yearly repeating holiday
      };

      // Add the new holiday using the parent's method
      if (props.addHoliday) {
        await props.addHoliday(newHoliday);
      }

      // Clear the form fields and show success message
      setName('');
      setDate('');
      setDescription('');
      setImageFile(null);
      setImagePreview('');
      setMessage('Holiday added successfully! It will repeat yearly.');

      // Clear success message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to add holiday. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className='fieldBox' id='inputfield'>
      <h3 className='mb-4'>Add Custom Holiday</h3>
      {message && (
        <div
          className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}
          role="alert"
        >
          {message}
        </div>
      )}
      <Form onSubmit={handleSubmit} className='text-start'>
        <div className='mb-3'>
          <Label for='name' className='form-label'>New Holiday Name</Label>
          <Input
            className='form-control'
            type='text'
            name='name'
            id='name'
            placeholder='e.g., Summer Vacation'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className='mb-3'>
          <Label for='date' className='form-label'>Date</Label>
          <Input
            className='form-control'
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className='mb-3'>
          <Label for='description' className='form-label'>Description</Label>
          <Input
            className='form-control'
            type='textarea'
            name='description'
            id='description'
            placeholder='Tell us more about this holiday...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            rows={3}
          />
        </div>
        <div className='mb-3'>
          <Label for='image' className='form-label'>Holiday Image (Optional)</Label>
          <Input
            className='form-control'
            type='file'
            name='image'
            id='image'
            accept='image/*'
            onChange={handleImageChange}
            disabled={isSubmitting}
          />
        </div>
        {imagePreview && (
          <div className='mb-3 text-center'>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}
            />
            <div className='mt-1'>
              <small className='text-muted'>Image Preview</small>
            </div>
          </div>
        )}
        <div className='mb-4'>
          <small className='text-muted d-block'>
            <i className="bi bi-info-circle me-1"></i>
            Note: This holiday will repeat yearly on the same date.
          </small>
        </div>
        <Button color='primary' type='submit' className='btn-submit' disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Holiday'}
        </Button>
      </Form>
    </div>
  );
};

export default InputField;
