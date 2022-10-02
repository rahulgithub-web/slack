import React from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
