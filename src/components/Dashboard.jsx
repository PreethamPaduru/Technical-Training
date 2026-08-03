import { useState } from "react";
import axios from "axios";
import "../App.css"


function Dashboard(){


const [users,setUsers]=useState([]);
  async  function getAllUsers(){
     const response=  await axios.get(`http://localhost:8081/student/users`)
     setUsers(response.data)
   
    }


 async  function updateUser(user){
         const name=prompt("Enter Your Updated UserName",user.name);
         const updatedemail=prompt("Enter Your Updated Email",user.email);


         const udpatedNewUserDetails={
            name:name,
            email:updatedemail
         }

      const response=   await axios.put(`http://localhost:8081/student/update/${user.id}`,udpatedNewUserDetails)
    alert("User Updated Success")
    getAllUsers();
   }


   async function deleteUsera(id){
       window.confirm("Are you Sure You Want To Delete?")
     const response=  await axios.delete(`http://localhost:8081/student/delete/${id}`);
       alert("User DeleTed Successfully")
       getAllUsers();
   }
    return (
      <>
         <h1>WELCOME TO DASHBOARD </h1>

         <button onClick={getAllUsers} className="updateB">GetUser</button>

         <table>
              <thead>

                   <tr>
                      <th>ID</th>
                      <th>UserName</th>
                      <th>Email</th>
                   </tr>
              </thead>
              <tbody>
                 {users.map((user)=>(
                    <tr>
                         <td>{user.id}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td><button className="updateB" onClick={()=>updateUser(user)} >Update</button></td>
                         <td><button className="deleteB" onClick={()=>deleteUsera(user.id)}>Delete</button></td>
                    </tr>
                 ))}
              </tbody>
         </table>
      
      </>
    )
}
export default Dashboard