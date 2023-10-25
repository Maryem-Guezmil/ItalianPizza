import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { useSelector } from 'react-redux';
import { loginUserReducer } from '../reducers/userReducer';
import ModifyPizza from '../components/ModifyPizza';
import welc from '../images/bienv.png'

export default function AdminPanelScreen() {

  const currentUser = useSelector(state => state.loginUserReducer.currentUser);
  console.log(currentUser);
  const isAdmin = currentUser ? currentUser.isAdmin : false;
  console.log("isAdmin")
    return (
      
         <div>
         {isAdmin ? (
           <div>
            <h2 >Admin Panel</h2>
            <NavbarAdmin />
            <img src={welc} style={{width:'1200px' ,marginTop:'20px'}} />
           
           </div>
         ) : (
           <p>You are not authorized to access the admin panel.</p>
         )}
       </div>
    )
}
