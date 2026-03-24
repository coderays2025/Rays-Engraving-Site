import React from "react";
import { CONTACT_INFO } from "../data/constants";

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {CONTACT_INFO.shortName} | {CONTACT_INFO.address}
    </footer>
  );
}
export default Footer;
