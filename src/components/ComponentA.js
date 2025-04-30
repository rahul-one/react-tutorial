import React from "react";

import "../css/ComponentA.css";

function ComponentA() {
  const msg = "Hello from Component A!";

  return (
    //   <div style= {{ border:"10px black dashed", padding:"15px"}} >

    <div className="border-10" style={{ padding: "15px" }}>
      <h1>{msg}</h1>
      <p>This is Component A</p>
    </div>
  );
}

export default ComponentA;
