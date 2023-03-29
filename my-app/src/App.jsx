import React from "react";
import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";

// array map mathod------
// const ncard = (val) => {};

const App = () => (
  <>
    <h1 className="heading_style">List of my top 6 Netflix series</h1>
    {Sdata.map((val, index) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;
