import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData;
    const onChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <>
            <section className='heading flex justify-center items-center p-8 flex-col'>
                <h2 className='flex items-center gap-3 mb-6 font-bold'><FaUser /> Register </h2>
                <p>Please create an account</p>
            </section>
            <section>
                <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                    <input
                        className='rounded-lg'
                        type="text"
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Enter your name'
                        onChange={onChange}
                        autoComplete='on'
                    />
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
                    <input
                        className='rounded-lg'
                        type="password"
                        id='password2'
                        name='password2'
                        value={password2}
                        placeholder='Confirm your password'
                        onChange={onChange}
                        autoComplete='on'
                    />
                    <button className='btn' type='submit'>Register</button>
                </form>
            </section>
        </>
    )
}

export default Register;