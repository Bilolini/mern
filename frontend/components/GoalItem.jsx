import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal, updateGoal } from './../features/goals/goalSlice';
import { Button, Modal } from 'flowbite-react';
import Spinner from './Spinner';
import { toast } from 'react-toastify';
function GoalItem({ elem }) {
    const { isError, isLoading, message } = useSelector(state => state.goal);
    const dispatch = useDispatch();
    const { text, createdAt, updatedAt } = elem;
    const [updated, setUpdated] = useState(text)
    const [openModal, setOpenModal] = useState('');
    const props = { openModal, setOpenModal };
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
    }, [dispatch, isError, message]);
    if (isLoading) {
        return <Spinner />
    }
    function onDelete() {
        dispatch(deleteGoal(elem._id))
    }
    function onUpdate() {
        if (updated) {
            props.setOpenModal(undefined);
            const updObj = {
                text: updated,
                id: elem._id
            }
            dispatch(updateGoal(updObj))
        }
    }
    return (
        <div className='border-2 border-cyan-400 p-5 rounded-lg'>
            <h3 className='mb-5'>{text}</h3>
            <p>Created: {new Date(createdAt).toLocaleString('uz-UZ')}</p>
            <p>Updated: {new Date(updatedAt).toLocaleString('uz-UZ')}</p>
            <div className="flex justify-between items-center mt-4">
                <Button gradientDuoTone="pinkToOrange" onClick={onDelete}>Delete</Button>
                <Button gradientDuoTone="greenToBlue" onClick={() => props.setOpenModal('dismissible')}>Update</Button>
            </div>

            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Change is welcome</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <input className='w-full' type="text" name="text" id="" defaultValue={updated} onChange={(e) => setUpdated(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onUpdate}>Update</Button>
                    <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                        Undo
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default GoalItem;