import React from 'react';
import CatAerials from '../../components/Categories/Aerials/CatAerials';
import '../SingleMove/SingleMovePage.css';
import Footer from '../../components/MainLayout/Footer';

import '../../App.css';
import {useParams} from 'react-router-dom';


function OptionsLayout() {
  let params = useParams();
  console.log(params.name)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <CatAerials />
      <Footer />
    </div>
  );
}

export default OptionsLayout;