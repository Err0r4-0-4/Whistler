import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import Carousel from "../Carousel/Carousel";
import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <div className={styles.imageprofile}>
            {/* <img src={Img1} alt="logo pimage" className={styles.logo} /> */}
            <div className={styles.box}>
              <span className={styles.do}>Whistler!</span>
            </div>
          </div>
        </div>

        <div className={styles.fifty}>
          <div className={styles.select}>
            <Link to="#">Help</Link>
          </div>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.cor}>
          <Carousel />
        </div>
        <div className={styles.pages}>
          <div className={styles.cont}>Continue As</div>
          <div className={styles.pagess}>
            <Link to="/admin" className={styles.top}>
              <div>
                <RiAdminLine className={styles.icon} />
              </div>
              <h3>
                <span>Admin</span>
              </h3>
            </Link>
            <Link to="/ngo">
              <div>
                <VscOrganization className={styles.icon} />
              </div>
              <h3>
                <span>NGO</span>
              </h3>
            </Link>
            <Link to="/public" className={styles.bottom}>
              <div>
                <MdOutlinePublic className={styles.icon} />
              </div>
              <h3>
                <span>Public</span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;