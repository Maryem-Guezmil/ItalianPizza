import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, fetchUsers } from '../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function UsersList() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.UsersReducer.users.users);


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
        window.location.href = '/userslist'
    }
    return (

        <div>
            <h2 >Admin Panel</h2>
            <NavbarAdmin />
            <div className='table3'>
            <h2 className='title m-4'>Users List</h2>
            <div className='row justify-content-center mx-5 ml-5'>
                <table className='table'>
                    <thead  >
                        <tr className='table-head'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => (
                            <tr key={user._id} className="table-body">
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <FontAwesomeIcon style={{ color: 'red' }} icon={faTrash} onClick={() => handleDelete(user._id)} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            </div>
        </div>
    )
}
