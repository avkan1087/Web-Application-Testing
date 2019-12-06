import React from "react";

const Buttons =(props)=> {
  return (
    <div>
      <button onClick={props.strikeCounter} data-testid="strikes"> Strike </button>
      <button onClick={props.ballCounter} data-testid="balls"> Ball </button>
      <button onClick={props.foulCounter} data-testid="fouls"> Foul </button>
      <button onClick={props.hitCounter} data-testid="hits"> Hit </button>
    </div>
  );
}

export default Buttons