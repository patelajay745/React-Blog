import React from "react";

function Logo({ width = "100px", src }) {
  return <img style={{ width }} src={src}></img>;
}

export default Logo;
