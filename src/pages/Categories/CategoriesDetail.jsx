import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import { useToken } from "../../contexts/TokenContext";

const CategoryMoveCard = ({ move, role }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <img
        src={move.moveImage}
        className="card-img-top"
        alt={move.moveName}
        style={{ maxHeight: "25rem" }}
      />
      <div style={{ textAlign: "center" }}>{move.moveName}</div>
      {/* Teacher Actions */}
      {role === "teacher" && <div>Add Move button goes here</div>}
    </div>
  );
};

const api = process.env.REACT_APP_DATABASE_URL;

// Function to fetch categories and display their associated moves
export const CategoriesDetail = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  const { role } = useToken();
  console.info("role", role);

  useEffect(() => {
    axios
      .get(`${api}/moves/categories/${encodeURIComponent(category)}`)
      .then((response) => {
        setCategoryData(response.data);
        console.log("category moves", response.data); // log received data in the console for testing
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
        setCategoryData([]);
      });
  }, [category]);

  return (
    <div>
      <HeaderTop />
      {categoryData && (
        <div className="d-flex flex-wrap justify-content-center">
          {categoryData.map((move) => (
            <div className="col-md-3" key={move._id}>
              <CategoryMoveCard move={move} role={role} />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CategoriesDetail;
