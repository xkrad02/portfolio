import React from "react";
import "../styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <section id="footer">
      <p className="copyright">© 2022 ST</p>
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/sheryl-tan12/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/xkrad02" target="_blank" rel="noreferrer">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:sheryl-tan02@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-envelope-fill"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
