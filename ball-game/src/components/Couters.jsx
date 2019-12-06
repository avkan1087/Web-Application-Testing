import React from "react";

const Couters = (props)=> {
  return (
    <div>
      <h2 data-testid="count" className="strikeboard">
        Strikes: {props.strike}
      </h2>
      <h2 className="ballboard">Balls: {props.ball} </h2>
    </div>
  );
}

export default Couters