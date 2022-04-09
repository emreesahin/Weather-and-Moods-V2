import FetchingData from "./getData";
import './App.css';
 

function App() {
  return (
    <>
      <title>Weather and Moods</title>
      <p className="pageTitle">Weather And Moods</p>
      <img src={require('./assets/Sun.png')} alt=" "  className="mainImage"/> 
      <FetchingData />
    </>
  );
}

export default App;
