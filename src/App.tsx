import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./componetns/Home";
import { store } from "./store";
import { todosService } from "./store/servers/todosService";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
