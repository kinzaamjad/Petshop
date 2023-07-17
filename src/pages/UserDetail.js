import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const UserDetail = () => {

  const[userData,setUserData] = useState([]);

  const navigate = useNavigate();

// Getting user Data from Server Side
  const getUserData = async() =>{
    let result = await fetch("http://localhost:5000/users")
    result = await result.json();
    setUserData(result)
  }
  console.log(userData)



  useEffect(()=>{
    getUserData()
  },[])


  // Deleting a specific user on the basis of I.D

  const deleteUser = async(id) => {    
    let res = await fetch(`http://localhost:5000/users/${id}`,{
      method: "delete"
    })
    res = await res.json();
    console.log(res)
    if(res){
      getUserData()
    }

  }



  return (
    <>
      <div className="container my-5 w-75">

      <table className="table table-striped table-hover">
        <thead>
          <tr className="bg-primary text-light">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((su,ind)=>{
              return(
                <>
                  <tr>
                        <th scope="row">{ind+1}</th>
                        <td>{su.name}</td>
                        <td>{su.address}</td>
                        <td>{su.email}</td>
                        <td>{su.password}</td>
                        <td>
                          <a onClick={()=>navigate(`/register/${su._id}`)} className="btn btn-success btn-sm">
                              Edit <i class="fas fa-edit"></i>
                          </a>
                          <a onClick={()=>deleteUser(su._id)} className="btn btn-danger btn-sm">
                              Delete <i class="fa-solid fa-trash-can"></i>
                          </a>
                      </td>              
                  </tr>                
                </>
              )
            })
          }
          
        </tbody>
      </table>
      </div>
    </>
  );
};

export default UserDetail;
