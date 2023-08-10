import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    function onSubmit(e) {
        e.preventDefault();
        dispatch(createGoal({ text }))
        setText('')
    }
    return (
        <section className='mt-8'>
            <form className='flex gap-5 w-[500px]' onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Enter your goal'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className='w-1/2'
                />
                <button className='btn w-1/3' type='submit'>Add goal</button>
            </form>
        </section>
    )
}

export default GoalForm