import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../SingleMove/SingleMovePage.css";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";

const CategoryMoveCard = ({ move }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      {/* <Link to={single move}> */}
        <img
          src={move.moveImage}
          className="card-img-top"
          alt={move.moveName}
          style={{ maxHeight: "25rem" }}
        />
        <div style={{ textAlign: "center" }}>{move.moveName}</div>
      {/* </Link> */}
    </div>
  );
};

const api = process.env.REACT_APP_BACKEND_URL

// Function to fetch categories and display their associated moves
export const CategoriesDetail = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get(`${api}/moves/categories/${encodeURIComponent(category)}`)
      .then((response) => {
        setCategoryData(response.data);
        console.log(response.data);  // log received data in the console for testing
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
        setCategoryData([]);
      });
  }, [category]);

  return (
    <div>
      <HeaderTop />
        {categoryData && (
        <div className="d-flex flex-wrap justify-content-center">
          {categoryData.map((move) => (
            <div className="col-md-3">
              <CategoryMoveCard key={move._id} move={move} />
            </div>
          ))}
        </div>
        )}
        <Footer />
    </div>
  );
}

export default CategoriesDetail;
