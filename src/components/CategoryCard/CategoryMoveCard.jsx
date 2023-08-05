import "./CategoryCard.css";
import Accord from "../../components/AddToClass/AddToClass";
import { useToken } from "../../contexts/TokenContext";

const CategoryMoveCard = ({ move, lessons }) => {
  const { role } = useToken();

  // Check if the user is a teacher before rendering the Accord component
  if (role !== "teacher") {
    return (
      <div className="card" style={{ margin: "15px" }}>
        <img
          src={move.moveImage}
          className="card-img-top"
          alt={move.moveName}
          style={{ maxHeight: "25rem" }}
        />
        <div style={{ textAlign: "center" }}>{move.moveName}</div>
      </div>
    );
  }

  return (
    <div className="card" style={{ margin: "15px" }}>
      <img
        src={move.moveImage}
        className="card-img-top"
        alt={move.moveName}
        style={{ maxHeight: "25rem" }}
      />
      <div style={{ textAlign: "center" }}>{move.moveName}</div>
      <div>
        <Accord lessons={lessons}/>
      </div>
    </div>
  );
};

export default CategoryMoveCard