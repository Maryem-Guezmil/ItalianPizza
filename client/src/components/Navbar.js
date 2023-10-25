import React from 'react'
import icon from '../images/icon.png'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faTasksAlt} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const current = useSelector(state => state.loginUserReducer.currentUser);
    const isAdmin = current ? current.isAdmin : false;
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded " style={{ height: '60px', padding: '30px' }}>
                <img src={icon} alt="logo" style={{ width: '70px' }} />
                <a className="navbar-brand" style={{ width: '90px' }} href="/">Veloce Pizza </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        {currentUser ? (
                            <div className="dropdown mt-0" style={{ display: 'flex' }} >

                                <FontAwesomeIcon icon={faUser} style={{ height: '20px', weight: '20px', color: 'green', marginTop: '12px', marginLeft: '22px' }} />
                                <a style={{ fontSize: '20px' }} className="dropdown-toggle  nav-link" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.name}
                                </a>

                                <div className="dropdown-menu" >
                                    {!isAdmin && (<a style={{ fontSize: '20px' }} className="dropdown-item" href="/orders">Orders</a>)}
                                    <a style={{ fontSize: '20px' }} className="dropdown-item" href="/login" onClick={() => (dispatch(logoutUser()))}> <li>Logout</li> </a>
                                </div>
                            </div>
                        ) : (

                            <li className="nav-item ">
                                <a className="nav-link" href="/login" style={{ fontSize: '20px' }}>Login <span className="sr-only"></span></a>
                            </li>)}

                        {!isAdmin && (
                            <li className="nav-item disp">
                                <FontAwesomeIcon style={{ height: '20px', weight: '20px', color: 'green', marginTop: '12px', marginLeft: '22px' }} icon={faCartShopping} />

                                <a style={{ fontSize: '20px' }} className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
                            </li>)}
                        {isAdmin && (
                            <li className="nav-item disp">
                                <FontAwesomeIcon icon="fas fa-tasks-alt" style={{ height: '20px', weight: '20px', color: 'green', marginTop: '12px', marginLeft: '22px' }} icon={faTasksAlt}  />
                                <a className="nav-link" href="/admin" style={{ fontSize: '20px' }}>dashbord <span className="sr-only"></span></a>

                            </li>
                        )}
                    </ul>
                </div>
            </nav>


        </div>
    )
}

export default Navbar