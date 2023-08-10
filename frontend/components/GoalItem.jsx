import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal } from './../features/goals/goalSlice';

function GoalItem({ elem }) {
    const dispatch = useDispatch();
    const { text, createdAt, updatedAt} = elem;
    useEffect(() => {

    }, [dispatch])
    return (
        <div className='border-2 border-cyan-400 p-5 rounded-lg'>
            <h3 className='mb-5'>{text}</h3>
            <p>Created: {new Date(createdAt).toLocaleString('uz-UZ')}</p>
            <p>Updated: {new Date(updatedAt).toLocaleString('uz-UZ')}</p>
            <div className="flex justify-between items-center mt-4">
                <button className='cursor-pointer text-red-700 font-bold' onClick={() => dispatch(deleteGoal(elem._id))}>delete</button>
                <button className='cursor-pointer text-green-700 font-bold' onClick={() => console.log('ff')}>update</button>
            </div>
        </div>
    )
}

export default GoalItem