import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Loginscreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)
    const { error, loading } = loginstate
  

    const dispatch = useDispatch()

    useEffect(() => {
        //get the obj of local storage of current user
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])
    function login() {
        if (!email || !password) {
            alert("All fields are required")
        }
        const user = {
            email,
            password
        }
        console.log(user)
        dispatch(loginUser(user))

    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading />)}
                    {error && (<Error error='Invalid credentials' />)}
                    <h2 className='text-center m-2 ' style={{ fontSize: '35px' }}>
                        Login
                    </h2>
                    <div >
                        <input type="email"
                            placeholder='email'
                            required
                            className='form-control'
                            maxLength={50}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password"
                            placeholder='password'
                            required
                            className='form-control'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} 
                         />
                        
                        <button className='btn mt-3 mb-3' onClick={login} >LOGIN</button>
                        <br />
                        <a style={{ color: 'black' }} href="/register">Click here to register</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
