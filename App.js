import React from "react";
import ReactDOM from "react-dom";

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title> </Title>
    <h1 className="heading">Namaste React Functional Components. </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
