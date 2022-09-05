import React from "react";

function Spinner({ message }) {
  return (
  <div class="ui active dimmer">
    <div class="ui text loader">{message}</div>
  </div>
  )
}

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
