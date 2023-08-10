import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { goals, isError, isLoading, message } = useSelector(state => state.goal);
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (!user) {
            navigate('/login')
        }
        dispatch(getGoals())
        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading){
        return <Spinner />
    }
    return (
        <>
            <section>
                <h2 className='mt-6'>Welcome {user && user.name}.</h2>
            </section>
            <GoalForm />
            <section className='flex mt-5 gap-4 flex-wrap'>
                {goals.length > 0 ? goals.map(elem => {
                    return <GoalItem key={elem._id} elem={elem} />
                }) : <h3>You have not set any goals </h3>}
            </section>
        </>
    )
}

export default Dashboard;