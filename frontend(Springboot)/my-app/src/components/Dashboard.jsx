import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"


function Dashboard(){

   const token=localStorage.getItem("Token");
   useEffect(()=> {
      if(!token) {
         logout();
         return;

      }

      const interval=setInterval(()=> {
      axios.get(`http:localhost:8080/verify`, {
         headers :{
            Authorization:`Bearer ${token}`,
         },
      }).catch((err)=> {
         alert("Session logged Out Please relogin");
         logout();
      })
   },5000);

   return ()=>clearInterval(interval);

},[token])

const [users,setUsers]=useState([]);
const [page,setPage]=useState(0);
const[pagebtn,setpagebtn]=useState(false);
  async  function getAllUsers(){
     const response=  await axios.get(`http://localhost:8081/student/users?page=${page}&size=1  `);
     setUsers(response.data.content)
     setpagebtn(true);
   
    }

    function prepage() {
         if(page>=0) {
            const newPage=page-1;
            setPage(newPage);
            getAllUsers();
         }
    }
    function logout() {
      window.location.href="/";
    }

    function nextpage() {
      const newPage=page+1;
      setPage(newPage);
      getAllUsers();
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


   async function deleteUsera(user){
       window.confirm("Are you Sure You Want To Delete?")
     const response=  await axios.delete(`http://localhost:8081/student/delete/${user.id}`);
       alert("User DeleTed Successfully")
       getAllUsers();
   }
    return (
      <>
         <h1>WELCOME TO DASHBOARD </h1>
          <h2>
         Time remaining: {time} seconds
         </h2> 

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
                         <td><button className="deleteB" onClick={()=>deleteUsera(user)}>Delete</button></td>
                    </tr>
                 ))}
              </tbody>
         </table>
         {pagebtn &&
         <div className="table">
         <button onClick={prepage} className="updateB" id="pre">prev</button>
         <button onClick={nextpage} className="updateB" id="next">Next</button>
         </div>
}
      </>
    )
}
export default Dashboard