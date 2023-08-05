import React from "react";
import HeaderTop from "../../components/MainLayout/HeaderTop";
import Footer from "../../components/MainLayout/Footer";
import SingleMoveNav from "../../components/SingleMoveNav/SingleMoveNav";
import AddToClass from "../../components/AddToClass/AddToClass";
import "../../App.css";

function SingleMovePage({ userRole }) {
  // function SingleMovePage(props) {
  // const { userRole } = props;
  // // fetch from API ..
  // let classes = [];
  // const classesResponse = fetch('https://api.movementor.com/classes').then(async (response) => {
  //   classes = await response.json();
  // })
  // const classes = [
  //   {
  //     id: '',
  //     name: 'Monday: intro',
  //     img: 'https://...thing.jpg',
  //     moves: [
  //       {
  //         id: 'flangelina',
  //         name: 'flangelina'
  //       }
  //     ],
  //   }
  // ];
  return (
    <div>
      <HeaderTop />
      <div className="single-move-div">
        <div style={{ textAlign: "center" }}>
          <SingleMoveNav />
        </div>
        <div className="container mt-4 d-flex justify-content-center"></div>
        <div style={{ textAlign: "center" }}>
          {userRole === "teacher" && <AddToClass />}
        </div>
        {/* {classes.map(class => (
          <ClassCard class={class} />
        ))} */}
        <Footer />
      </div>
    </div>
  );
}

export default SingleMovePage;
