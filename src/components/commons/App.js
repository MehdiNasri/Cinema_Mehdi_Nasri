
import React from "react";
import Routing from "./Routing";
import pages from "./MesConstantes";
import "./App.css"
/**
 * Composant App
 * @returns 
 */
export const App = () => {
  return (
    <>
      <div className="body">
        <Routing pages={pages} />
      </div>
    </>
  );
}

export default App;
