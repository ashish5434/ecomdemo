import React,{useState} from 'react'
import Header from '../Partials/Header'
import Banner from '../Partials/Banner'
import Productlist from '../Partials/Productlist'
import Footer from '../Partials/Footer'

const Home = () => {

  const [state,setState]=useState([]);
  const [productCount,setProductCount]=useState(0);

  const AddToCart=(title)=>{
  
    setState([...state,title]);

  }

  const dataCount=(length)=>{
    setProductCount(length);
  }

  return (
    <div>
        <Header state={state} productCount={productCount}/>
      <Banner/>
      <Productlist AddToCart={AddToCart} dataCount={dataCount}/>

      <Footer/>
    
    </div>
  )
}

export default Home