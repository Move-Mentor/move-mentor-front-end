import Footer from "../../components/MainLayout/Footer"
import HeaderTop from "../../components/MainLayout/HeaderTop"
import { SingleMoveFetch } from "../../components/SingleMoveNav/SingleMoveFetch"

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