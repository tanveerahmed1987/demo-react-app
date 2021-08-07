import "./App.css";

function App() {
  // Variables
  const name = "Sandeep";
  const age = 22;
  const isMarried = false;
  const price = 25.5;

  // Array
  const technologies = ["Javascript", "React JS", "Node JS"];
  const operatingSystems = ["Linux", "Windows"];

  // Object
  const person = {
    name: "Mark",
    company: "TCS",
    salary: 25000,
  };

  const getSalary = () => {
    return person.salary;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{isMarried ? "Married" : "Single"}</h2>
        <h2>{price}</h2>

        <div>{technologies}</div>
        <div>{operatingSystems}</div>

        <ul>
          {technologies.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>

        <ul>
          {operatingSystems.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>

        <div>{person.name}</div>
        <div>{person["company"]}</div>

        <div>{getSalary()}</div>
      </header>
    </div>
  );
}

export default App;
