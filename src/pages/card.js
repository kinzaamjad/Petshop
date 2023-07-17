import React from 'react'
import { Link } from 'react-router-dom';

const Card=({x})=>
{
    return(
        <div className='col-lg-3 col-md-6 col-sm-12 mt-4'>
        <div className="card" style={{width: '18rem',border:"0"}}>
            <Link to={`/product/${x.id}`}> <img src={x.image} className="card-img-top" height={350} width={200} alt="..." /></Link>
            <div className="card-body">
                <h5 className="card-title">{x.title}...</h5>
                <p className="card-text">{x.price}</p>
            <Link to="/Serive" className="btn btn-dark">Buy our room in hotel
                </Link>
                
            </div>
        </div>
    </div>
    );
}

export default Card;