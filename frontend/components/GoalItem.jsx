import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal } from './../features/goals/goalSlice';
import { toast } from 'react-toastify';

function GoalItem({ elem }) {
    const dispatch = useDispatch();
    const { text, createdAt, updatedAt} = elem;
    useEffect(() => {

    }, [dispatch]);

    function onDelete(){
        toast.warn(`You are deleting your goal ${text}`);
        dispatch(deleteGoal(elem._id))
    }
    return (
        <div className='border-2 border-cyan-400 p-5 rounded-lg'>
            <h3 className='mb-5'>{text}</h3>
            <p>Created: {new Date(createdAt).toLocaleString('uz-UZ')}</p>
            <p>Updated: {new Date(updatedAt).toLocaleString('uz-UZ')}</p>
            <div className="flex justify-between items-center mt-4">
                <button className='cursor-pointer text-red-700 font-bold' onClick={onDelete}>delete</button>
                <button className='cursor-pointer text-green-700 font-bold' onClick={() => console.log('ff')}>update</button>
            </div>
        </div>
    )
}

export default GoalItem