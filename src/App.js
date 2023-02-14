import React, {useState} from "react";
import Header from "./components/Header";
import Home from "./pages/Home";




function App() {
  const [info, setInfo] = useState (false)
  return (
    <div className="App">
      <Header  setInfo ={setInfo}/>
      <Home info = {info} setInfo = {setInfo}/>
    </div>
  );
}

export default App;
