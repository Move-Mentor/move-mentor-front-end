import Footer from "../../components/MainLayout/Footer"
import HeaderTop from "../../components/MainLayout/HeaderTop"
import { SingleMoveFetch } from "../../components/SingleMoveNav/SingleMoveFetch"
import "./SingleMovePage.css";
import "../../App.css";

function SingleMovePageAlt() {
return (
  <div>
      <HeaderTop />
      <div className="single-move-div">
        <div style={{ textAlign: "center" }}>
          <SingleMoveFetch/>
        </div>
      <Footer />
      </div>
  </div>
);
}

export default SingleMovePageAlt;