import React from 'react'

function NavbarAdmin() {
    return (
        <div >
            <nav className="navbarAdmin navbar-expand-lg navbar-dark bg-dark"   >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ul className="navbar-nav" >
                        <li className="nav-item active mx-4">
                            <a className="nav-link-ad" href="/userslist" >Users List </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link-ad" href="/pizzaslist">Pizzas Management</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link-ad" href="/addpizza">Add Pizza</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link-ad" href="/orderslist">Orders List</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavbarAdmin