import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {  
  console.log("Category prop:", category);
  // Define category image url and alt tag mappings
  const categoryImageUrls = {
    "Inverts": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Inverts/invertsInvertStraddle.png",
      alt: "Inverts"
    },
    "Sits": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Sits/sitsMartini.png",
      alt: "Sits"
    },
    "Spins": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Spins/spinsBackwardsSunwheel.png",
      alt: "Spins"
    },
    "Floor": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Floor/floorBodyRolls.png",
      alt: "Floor"
    },
    "Aerials": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Aerials/aerialsAerialInvert.png",
      alt: "Aerials"
    },
    "Climbs": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Climbs/climbsAngelBasic.png",
      alt: "Climbs"
    },
    "Splits": {
      url: "https://movementor.s3.ap-southeast-2.amazonaws.com/Splits/splitsBrassSplit.png",
      alt: "Splits"
    },
  }
  
  const categoryData = categoryImageUrls[category];
  console.log("Category data:", categoryData);
  const { url, alt } = categoryData

  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link to={`/moves/categories/${encodeURIComponent(category)}`}>
        <img
          src={url}
          className="card-img-top"
          alt={alt}
          style={{ maxHeight: "25rem" }}
        />
        <div style={{ backgroundColor: '#bcd5cf', textAlign: "center" }}>
          {category}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
