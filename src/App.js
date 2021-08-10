import "./App.css";
import Button from "./Button";
import Skillbar from "./Skillbar";

function App() {
  return (
    <>
      <Button varient="primary" text="Button 1" />
      <Button varient="info" text="Button 2" />
      <Button varient="secondary" text="Button 3" />
      <Button varient="primary" text="Success" />
      <Button varient="secondary" text="Failure" />

      <Skillbar percentage="60" color="blue" text="HTML" />
      <Skillbar percentage="70" color="green" text="Javascript" />
      <Skillbar />
      <Skillbar percentage="80" text="Reat JS" />
    </>
  );
}

export default App;
