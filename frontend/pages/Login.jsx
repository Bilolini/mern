import { useState, useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/AuthSlice';
import { ThreeDots } from 'react-loader-spinner'


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
        return (<>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </>)
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