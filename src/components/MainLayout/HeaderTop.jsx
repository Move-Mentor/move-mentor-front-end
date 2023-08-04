import Navbar from "react-bootstrap/Navbar";
import HomeIcon from "../../images/home_icon.png";
import { Image } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const HeaderTop = ({ userRole }) => {
  const headerClass =
    userRole === "teacher" ? "header-teacher" : "header-student";
  return (
    <Navbar data-testid="nav" className={headerClass} expand="lg">
      <Link to={"/options"}>
        <Image
          src={HomeIcon}
          className="home-icon"
          alt="Home icon to return home"
          fluid
        />
      </Link>
    </Navbar>
  );
};

export default HeaderTop;
