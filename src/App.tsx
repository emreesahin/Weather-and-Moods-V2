import "./App.css";
import DateSelector from "./DateSelector";

function App() {
  return (
    <>
      <title>Weather and Moods</title>
      <p className="pageTitle">Weather And Moods</p>
      <img src={require("./assets/Sun.png")} alt=" " className="mainImage" />
      <DateSelector />
    </>
  );
}

export default App;
