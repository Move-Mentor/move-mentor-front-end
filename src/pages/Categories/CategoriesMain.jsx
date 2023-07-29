import React from 'react';
// import CatNavCards from '../../components/Categories/CatNavCards';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';
import Header from '../../components/MainLayout/header';
import '../../App.css';


function CategoriesLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* <CatNavCards /> */}
      < Footer />
    </div>
  );
}

export default CategoriesLayout;