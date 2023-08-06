import { FC, useState } from 'react';
import TaskForm from './TaskForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Task from './Task';
import SearchBar from './SearchBar';

const TasksWrapper: FC = () => {
  const taskList = useSelector((state: RootState) => state.taskList);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTasks = taskList.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TaskForm />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksWrapper;
