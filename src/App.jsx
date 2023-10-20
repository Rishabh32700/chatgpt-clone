import React, {useState} from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import MainScreen from "./components/mainscreen/MainScreen";

function App() {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className="App">
      <SideBar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <MainScreen hideSidebar={hideSidebar} setHideSidebar={setHideSidebar}/>
    </div>
  );
}

export default App;
