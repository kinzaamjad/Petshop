import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartData, removeData,removeOne} from "../Redux/action"

export const Cartdata = () => {

    const select=useSelector(st=>st.cartAbc);
    const dispatch=useDispatch()
    
    

    const remove = (item)=>{
      dispatch(removeOne(item))
    }
  return (
    <div>


<div className='container'>
  <div className='row'>
    {
      select.map( x=> 
        {
          console.log("value of x : +++++++++++++++++++++++++++",x);
            return(
                <>
                <div className='col'>
            <div className="card mt-5 ms-2 me-2 " style={{width: '18rem'}}>
  <img src={x.pic}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{x.pname}</h5>
    
    <div className='d-flex justify-content-between align-items-center ms-5' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                    <span style={{ fontSize: 24 }} onClick={x.quantity <= 1 ? () => removeData(x) : () => remove(x)}>-</span>
                                                    <span style={{ fontSize: 22 }}>{x.quantity}</span>
                                                    <span style={{ fontSize: 24 }} onClick={()=>dispatch(cartData(x))}>+</span>
                                                  </div>
  </div>
</div>

</div>

             </>
            )                          
        }
    )
    
    }
  </div>
</div>

  </div>
  )
}
