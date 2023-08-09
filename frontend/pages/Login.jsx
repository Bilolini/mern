import { useState, useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData;
    const onChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div >
            <section className='heading flex justify-center p-8 items-center flex-col'>
                <h2 className='flex items-center gap-3 mb-6 font-bold'><FaSignInAlt /> Login </h2>
                <p>Please login into your account</p>
            </section>
            <section>
                <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                    <input
                        className='rounded-lg'
                        type="email"
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={onChange}
                        autoComplete='on'
                    />
                    <input
                        className='rounded-lg'
                        type="password"
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={onChange}
                        autoComplete='on'
                    />
                    <button className='btn' type='submit'>Register</button>
                </form>
            </section>
        </div>
    )
}

export default Login