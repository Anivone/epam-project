import React from 'react';
import Container from "./layout/Container";
import { BrowserRouter as Router } from "react-router-dom";
import ContainerContext from './context/ContainerContext';
import { UserService } from "./services/UserService";
import { GroupsService } from "./services/GroupsService";

function App() {
  return (
      <ContainerContext.Provider value={{
          userService: new UserService(),
          groupsService: new GroupsService(),
      }}>
          <Router>
              <Container/>
          </Router>
      </ContainerContext.Provider>
  );
}

export default App;
