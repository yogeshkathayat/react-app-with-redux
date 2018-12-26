import React, { Component } from "react";
import ButtonGroup from "./components/buttonGroup.component";
import HelloWorld from "./components/helloWorld.component";
import {store} from "./store";

class App extends Component {
 
  render() {
    console.log(store.getState());
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}


export default App;
