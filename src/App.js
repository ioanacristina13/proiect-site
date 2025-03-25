import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pagini/Home";
import { RecipeProvider } from "./contextApi/reteteContext";
import NavigationBar from "./componente/Meniu";
import RetetaDetail from "./pagini/DetaliiRetete";
import Retete from "./pagini/Retete";
import DespreNoi from "./pagini/DespreNoi";

function App() {
  return (
    <RecipeProvider>
      {" "}
      {/* Wrapping aplicația în RecipeProvider */}
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DespreNoi />} />
          <Route path="/retete" element={<Retete />} />
          <Route path="/retete/:id" element={<RetetaDetail />} />
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;
