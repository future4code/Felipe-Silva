import React, { useEffect, useState } from "react";
import "./styles.css";
import { InitScreen } from "./components/InitialScreen";
import { MatchScreen } from "./components/MatchScreen";

const App = () => {
  const [screen, setScreen] = useState(true);

  const displayPage = () => {
    if (screen === true) {
      return <InitScreen />;
    } else {
      return <MatchScreen />;
    }
  };

  const changePage = () => {
    if (screen === true) {
      setScreen(false);
    } else {
      setScreen(true);
    }
  };
  return (
    <div>
      {displayPage()}
      <button onClick={changePage}>Next Page</button>
    </div>
  );
};
export default App;
