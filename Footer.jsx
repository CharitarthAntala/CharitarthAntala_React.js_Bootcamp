import React from "react";

function Footer() {
  var currrentYear = new Date().getFullYear();

  return (
    <footer>
      <p>CopyRight @ {currrentYear}</p>
    </footer>
  );
}

export default Footer;
