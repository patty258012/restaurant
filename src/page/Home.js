import React, { useEffect, useContext } from 'react';
import NavbarComponet from '../components/NavbarComponent';
import CarruselComponent from '../components/CarruselComponet';
import Img from '../components/Img';



function Home (){
    return(
<>

<NavbarComponet/>
<CarruselComponent/>
<Img/>

</>

    );
}
export default Home ;
