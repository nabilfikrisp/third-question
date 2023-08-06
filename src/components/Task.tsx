import {
  IconSquareRounded,
  IconSquareRoundedCheckFilled,
  IconTrash,
} from '@tabler/icons-react';
import { TaskData, removeTask, toggleComplete } from '@/redux/taskListSlice';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

interface TaskProps {
  task: TaskData;
}

const Task: FC<TaskProps> = ({ task }) => {
  const { id, name, completed } = task;
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(toggleComplete({ id, completed }));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };

  return (
    <div
      className={
        'flex w-full items-center justify-between gap-2 rounded border-2  border-slate-600 px-4 py-1' +
        ' ' +
        (completed ? 'opacity-50' : '')
      }
    >
      <span className={completed ? 'line-through' : ''}>{name}</span>
      <div className="flex items-center justify-center gap-2">
        <div className="flex" onClick={handleOnclick}>
          {!completed ? (
            <span>
              <IconSquareRounded />
            </span>
          ) : (
            <span className="text-teal-500">
              <IconSquareRoundedCheckFilled color="currentColor" />
            </span>
          )}
        </div>
        <button
          className="transition-all hover:text-pink-600"
          onClick={handleRemoveTask}
        >
          <IconTrash color="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default Task;
