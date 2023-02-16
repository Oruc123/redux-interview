import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./componetns/Home";
import { store } from "./store";
const secret = "sdsa";
const App: FC = () => {
  useEffect(() => {
    console.log("sda");
  });
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
