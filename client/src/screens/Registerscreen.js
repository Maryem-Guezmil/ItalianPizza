import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

export default function Registerscreen() {
    const dispatch = useDispatch()
    const registerstate = useSelector(state => state.registerUserReducer)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const { error, loading, success } = registerstate
  
    function register() {
        if (!name || !email || !password || !cpassword) {
            alert("All fields are required")
            return
        }

        if (password !== cpassword) {
            alert("password not matched")
        } else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
            window.location.href = '/register'
        }

    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success='User Registred Successfully' />)}
                    {error && (<Error error='Email already registred' />)}

                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
                        Register
                    </h2>
                    <div >
                        <input
                            type="text"
                            placeholder='name'
                            required
                            className='form-control'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            errorMessage='name should contains letters only '
                            maxlength="40"
                        />
                        <input type="email"
                            placeholder='email'
                            required
                            maxlength="40"
                            className='form-control'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                         />

                        <input type="password"
                            placeholder='password'
                            required
                            maxlength="30"
                            className='form-control'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            />
                  
                        <input
                            type="password"
                            placeholder='confirm your password'
                            required
                            className='form-control'
                            value={cpassword}
                            onChange={(e) => { setCpassword(e.target.value) }} />
                        <button className='btn mt-3 mb-3' onClick={register}>REGISTER</button>
                        <br />
                        <a className="m-2" style={{ color: 'black' }} href="/login">Click here to login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
