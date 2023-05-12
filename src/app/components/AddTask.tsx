'use client'

import { FormEventHandler, useState } from 'react';
import Modal from './Modal';
import { v4 } from 'uuid';
import { addTask } from '@/api';
import { useRouter } from 'next/navigation';

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();    
        await addTask({
            id: v4(),
            text: newTaskValue
        })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Add new task</button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTask}>
                    <h3>Add new task</h3>
                    <div className="modal-action">
                        <input 
                            value={newTaskValue}
                            onChange={e => setNewTaskValue(e.target.value)}
                            type="text" 
                            placeholder="task" 
                            className="input input-bordered w-full" 
                        />
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask;