import React from "react";
function Counter() {
  var [ini, setIni] = React.useState(0);
  function dec(a) {
    setIni(ini + a);
  }

  return (
    <div className="mybox">
      <h1>count:{ini}</h1>
      <button
        onClick={() => {
          dec(-1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dec(1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
