import './App.css';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
