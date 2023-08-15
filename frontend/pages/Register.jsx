import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/AuthSlice';
import Spinner from '../components/Spinner';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData;
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name, email, password,
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading flex justify-center items-center p-8 flex-col'>
                <h2 className='flex items-center gap-3 mb-6 font-bold'><FaUser /> Register </h2>
                <p>Please create an account</p>
            </section>
            <section className='flex justify-center items-center'>
                <form className='flex flex-col gap-5 w-[300px]' onSubmit={onSubmit}>
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