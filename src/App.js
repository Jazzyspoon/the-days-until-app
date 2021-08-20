import "./App.css";
import React from "react";
import Button from "./components/CustomButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Days Until...</h1>
        <div>
          <Button
            backgroundColor="blue"
            fontSize="24px"
            borderColor="white"
            borderWidth="10px"
            color="white"
            height="100px"
            onClick={() => console.log("You clicked on New Years Day!")}
            radius="5%"
            width="300px"
            children="New Year's Day"
            margin="10px"
          />
          <Button
            backgroundColor="red"
            fontSize="24px"
            borderColor="green"
            borderWidth="10px"
            color="white"
            height="100px"
            onClick={() => console.log("You clicked on Christmas!")}
            radius="5%"
            width="300px"
            children="Christmas"
            margin="10px"
          />
        </div>

        <div>
          <Button
            backgroundColor="pink"
            fontSize="24px"
            borderColor="yellow"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on Easter!")}
            radius="5%"
            width="300px"
            children="Easter"
            margin="10px"
          />
          <Button
            backgroundColor="darkorange"
            fontSize="24px"
            borderColor="grey"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on Halloween!")}
            radius="5%"
            width="300px"
            children="Halloween"
            margin="10px"
          />
        </div>

        <div>
          <Button
            backgroundColor="darkorange"
            fontSize="24px"
            borderColor="white"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on Thanksgiving!")}
            radius="5%"
            width="300px"
            children="Thanksgiving"
            margin="10px"
          />

          <Button
            backgroundColor="lightblue"
            fontSize="24px"
            borderColor="teal"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on New Years Eve!")}
            radius="5%"
            width="300px"
            children="New Years Eve"
            margin="10px"
          />
        </div>

        <div>
          <Button
            backgroundColor="white"
            fontSize="24px"
            borderColor="red"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on Your Birthday!")}
            radius="5%"
            width="300px"
            children="Your Birthday!"
            margin="10px"
          />

          <Button
            backgroundColor="yellow"
            fontSize="24px"
            borderColor="black"
            borderWidth="10px"
            color="black"
            height="100px"
            onClick={() => console.log("You clicked on School's Out!")}
            radius="5%"
            width="300px"
            children="School's Out!"
            margin="10px"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
