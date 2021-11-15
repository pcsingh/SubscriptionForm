import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />

        </Routes>
      </BrowserRouter >
    );
  }
}

export default App;
