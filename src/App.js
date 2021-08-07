import "./App.css";

function App() {
  const bikes = [
    "Hero Splendar",
    "Bajaj Avenger",
    "Kwasaki Ninja",
    "Ducati Monster",
    "Honda Activa 6G",
  ];

  return (
    <div className="container">
      <ul>
        {bikes.map((bike) => {
          return <li>{bike}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
