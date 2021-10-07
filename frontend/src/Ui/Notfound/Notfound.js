import React from "react";
import img from "../../Components/Images/error404.png";
import styles from "./Notfound.module.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
const Notfound = () => {
  return (
    <div>
      <div className={styles.center}>
        <h1>Page Not found</h1> <img src={img} alt="Not found" />
        <Link to="/home" className="link">
          Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
