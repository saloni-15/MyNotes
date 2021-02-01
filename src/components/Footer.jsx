import React from "react";

const currentTime = new Date();
const year = currentTime.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {year}.</p>
    </footer>
  );
}

export default Footer;
