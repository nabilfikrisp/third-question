import { IconPlus } from '@tabler/icons-react';
import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '@/redux/taskListSlice';

const TaskForm: FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    // dispatch(addNewTask(taskName));
    handleMultiple();
    setTaskName('');
  };

  const handleMultiple = () => {
    const seperated = taskName.split(',');
    seperated.forEach((taskName) => {
      dispatch(addNewTask(taskName));
    });
  };

  return (
    <form id="task-form" className="w-full" onSubmit={handleSubmit}>
      <div className="wrapper group flex flex-col gap-2">
        <label
          htmlFor="task-input"
          className="w-full font-semibold transition-colors group-focus-within:text-teal-600"
        >
          Add Task
        </label>
        <div className="flex w-full items-center justify-center gap-2">
          <input
            onChange={(ev) => setTaskName(ev.target.value)}
            value={taskName}
            required
            placeholder="I have to do..."
            type="text"
            name="task-input"
            id="task-input"
            className="w-full rounded border-2 border-slate-600 bg-transparent px-4 py-1 outline-none transition-colors focus:border-teal-600"
          />
          <button
            className="rounded border-2 border-slate-600 transition-all hover:translate-x-1 hover:border-teal-600 hover:text-teal-600"
            title="Add Task"
          >
            <IconPlus size={36} color="currentColor" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
