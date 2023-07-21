import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='bg-white p-3 rounded w-25border loginForm'>
            </div>
            <h2>Login</h2>
            <form >
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' 
                     className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    className='form-control rounded-0' />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
                <p>You are agree to our terms and policies</p>

            </form>
        </div>
       
       )
    }
export default Login