import { useState, useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/AuthSlice';
import Spinner from '../components/Spinner';


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData;
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
        const userData = {
            email, password
        };
        dispatch(login(userData))
    }
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div >
            <section className='heading flex justify-center p-8 items-center flex-col'>
                <h2 className='flex items-center gap-3 mb-6 font-bold'><FaSignInAlt /> Login </h2>
                <p>Please log in into your account</p>
            </section>
            <section className='flex justify-center items-center'>
                <form className='flex flex-col gap-5 w-[300px]' onSubmit={onSubmit}>
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
                    <button className='btn' type='submit'>Log in</button>
                </form>
            </section>
        </div>
    )
}

export default Login