import { ITask } from "@/types";
import Task from "./Task";

interface TaskListProps {
    tasks: ITask[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <Task 
                            key={task.id} 
                            task={task} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;