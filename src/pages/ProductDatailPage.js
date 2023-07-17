import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
//import ListDB from '../data/Productdata11';
import ListDB from './data/ProductsData';
import { useDispatch } from 'react-redux';
import { cartData } from '../Redux/action';
const ProductDatailPage = () => {
  let {id} = useParams();
  let navigate = useNavigate()
  
  let fData = ListDB.find(x => x.id == id)
  

  const add=()=>{
    dispatch(cartData(fData))
    navigate("/card")
  }
  
  const dispatch = useDispatch()
  return (
    <>

        <a className='btn btn-warning my-4'
        onClick={()=>navigate('/pets')}>Back to Home</a>
     
{    /*        
      <h1>Product Detail Page</h1>
      <h1>Id : {id}</h1>
      <h1>Name : {fData.pName}</h1>
      <h1>price : {fData.price}</h1>
      <img width={300} height={300} src= {fData.pic}  alt="pic"/>  */}


<div className="super_container">
  <header className="header" style={{display: 'none'}}>
    <div className="header_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
            <div className="header_search">
              <div className="header_search_content">
                <div className="header_search_form_container">
                  <form action="#" className="header_search_form clearfix">
                    <div className="custom_dropdown">
                      <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                        <ul className="custom_list clc">
                          <li><a className="clc" href="#">All Categories</a></li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="single_product">
    <div className="container-fluid" style={{backgroundColor: '#fff', padding: 11}}>
      <div className="row">
        <div className="col-lg-2 order-lg-1 order-2">
          {/* <ul className="image_list">
            <li>
              <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg" alt />
            </li>
            <li>
              <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg" alt />
            </li>
            <li>
              <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg" alt />
            </li>
          </ul> */}
        </div>
        <div className="col-lg-4 order-lg-2 order-1">
          <div className="image_selected"><img src={fData.pic} alt />
          </div>
        </div>
        <div className="col-lg-6 order-3">
          <div className="product_description">
            <div className="product_name">{fData.pName}</div>
            <div className="product_name">Price: ${fData.price}</div>
            <hr className="singleline" />
            <div className='product_info'></div> 
           
            <hr className="singleline" />
            <div className="order_info d-flex flex-row">
              <form action="#">
              </form></div>
            <div className="row">
              <div className="col-xs-6" style={{marginLeft: 13}}>
                <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                  <div className="quantity_buttons">
                    <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                    <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6"> <button onClick={add} type="button" className="btn btn-primary shop-button">Add to
                  Cart</button> <button type="button" className="btn btn-success shop-button">Buy
                  Now</button>
                <div className="product_fav"><i className="fas fa-heart" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






    </>
  )
}

export default ProductDatailPage;
