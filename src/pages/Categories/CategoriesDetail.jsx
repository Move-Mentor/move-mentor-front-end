import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import { useToken } from "../../contexts/TokenContext";
import CategoryMoveCard from "../../components/CategoryCard/CategoryMoveCard";
import InnerPageNav from "../../components/InnerPageNav/InnerPageNav";

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
      <InnerPageNav />
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
