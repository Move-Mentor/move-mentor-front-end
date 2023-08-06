import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import InnerPageNav from "../../components/InnerPageNav/InnerPageNav";
import { useLessonContext } from "../../contexts/LessonContext";
import CategoryMoveCard from "../../components/CategoryCard/CategoryMoveCard";
import "../../App.css";

function LessonsDetail() {
  const [moves, setMoves] = useState([]);
  let params = useParams();
  const { lessons, fetchLessonMoves } = useLessonContext();
  const lesson = lessons.find(function (l) {
    return l._id === params.id;
  });

  useEffect(() => {
    if (!lesson) {
      return;
    }
    fetchLessonMoves(lesson).then((fetchedMoves) => {
      setMoves(fetchedMoves);
    });
  }, [lesson, fetchLessonMoves]);

  return (
    <div>
      <HeaderTop />
      <InnerPageNav />
      <div className="main-div">
        <div className="d-flex flex-wrap justify-content-center">
          {moves.length ? (
            moves.map((move) => (
              <div key={move._id} className="col-md-3">
                <CategoryMoveCard move={move} />
              </div>
            ))
          ) : (
            <p>Loading Lesson Moves..</p>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LessonsDetail;
