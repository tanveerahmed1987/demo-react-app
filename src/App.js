import "./App.css";

function App() {
  return (
    <>
      <button className="btn primary">Success</button>
      <button className="btn danger">Failure</button>

      <p>HTML</p>
      <div className="skillbar">
        <div className="skill percent90">90%</div>
      </div>

      <p>CSS</p>
      <div className="skillbar">
        <div className="skill percent60">60%</div>
      </div>
    </>
  );
}

export default App;
