import "./App.css";
import Button from "./Button";
import Skillbar from "./Skillbar";

function App() {
  const onSkillbarTouch1 = (clickedText) => {
    alert(clickedText);
  };

  const handler = (clickedText) => {
    console.log(clickedText);
  };

  return (
    <>
      <Button varient="primary" text="Button 1" />
      <Button varient="info" text="Button 2" />
      <Button varient="secondary" text="Button 3" />
      <Button varient="primary" text="Success" />
      <Button varient="secondary" text="Failure" />

      <Skillbar percentage="60" color="blue" text="HTML" />
      <Skillbar
        percentage="70"
        color="green"
        text="Javascript"
        onTouch={onSkillbarTouch1}
      />
      <Skillbar />
      <Skillbar percentage="80" text="Reat JS" onTouch={handler} />
    </>
  );
}

export default App;
