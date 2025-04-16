import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";

// JSX (transpiled before it reaches the JS) - parcel - Bable
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const AppLayout = () => {
  return <div className="app">
      <Header />
      <Body />
      <Footer />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);