import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.flex}>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link to="/creators">HOME</Link>
          </li>

          <li>
            <Link href="history">HELP</Link>
          </li>
        </ul>
      </div>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link href="/home">LIST</Link>
          </li>
          <li>
            <Link href="/orders">ABOUT</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.last}> ErrOr 4:O4</div>
    <div className={styles.fitemsm}>
      <ul className={styles.fitemli}>
        <li>
          <a href="https://github.com/whistler">
            <AiFillGitlab />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/whistler">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="mailto:support@whistler.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/whistler">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={styles.last2}>...Whistler...</div>
  </div>
);

export default Footer;
