import { Link } from "react-router-dom";
import "../../App.css";

const LessonCard = ({ lesson }) => {
  // Create an array of objects with lesson ID and corresponding image URL
  const lessonImageUrls = [
    {
      lessonId: "64c94f75e0ff09358d25aeb5",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Inverts/invertsAllegraStag.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb3",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Aerials/aerialsAerialInvert.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb4",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Floor/floorBridgeHalf.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb2",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Spins/spinsAnnaBentLeg.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb7",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Splits/splitsAthena.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb9",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Climbs/climbsFigureheadDrop.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb6",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Floor/floorHeadstandBentLeg.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeb8",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Aerials/aerialsTaurus.png",
    },
    {
      lessonId: "64c94f75e0ff09358d25aeba",
      imageUrl:
        "https://movementor.s3.ap-southeast-2.amazonaws.com/Inverts/invertsBrassStar.png",
    },
  ];

  const imageUrlObject = lessonImageUrls.find(
    (item) => item.lessonId === lesson._id
  );
  const imageUrl = imageUrlObject ? imageUrlObject.imageUrl : null;
  return (
    <div className="card" style={{ margin: "15px" }}>
      <Link className="nav-link btn" to={`/lessons/${lesson._id}`}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={lesson.lessonName}
            style={{ maxHeight: "25rem" }}
          />
        )}
        <div style={{ backgroundColor: "#bcd5cf", textAlign: "center" }}>
          {`${lesson.lessonName} - ${lesson.lessonDay}`}
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;
