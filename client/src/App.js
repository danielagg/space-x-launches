import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Space X Launches</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
