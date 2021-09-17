import React from "react";
import Chat from "./components/Chat";
import Conversation from "./components/Conversation";
import Detail from "./components/Detail";
import Header from "./components/Herder";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <Conversation />
          <Chat />
          <Detail />
        </div>
      </div>
    );
  }
}

export default App;
