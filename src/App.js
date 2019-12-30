import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import RoverView from "./views/rover/RoverView";

import './App.css';

function App() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Rover App
                </Typography>
            </Toolbar>
        </AppBar>
      <RoverView/>
    </div>
  );
}

export default App;
