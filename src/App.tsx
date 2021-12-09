import React from 'react';
import Container from "./layout/Container";
import { BrowserRouter as Router } from "react-router-dom";
import ContainerContext from './context/ContainerContext';
import { UserService } from "./services/UserService";

function App() {
  return (
      <ContainerContext.Provider value={{
          userService: new UserService(),
      }}>
          <Router>
              <Container/>
          </Router>
      </ContainerContext.Provider>
  );
}

export default App;
