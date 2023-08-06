import TasksWrapper from './components/TasksWrapper';
import Center from './layouts/Center';

const App = () => {
  return (
    <Center>
      <header>
        <h1 className="text-3xl font-bold">To-Do List</h1>
      </header>
      <section>
        <TasksWrapper />
      </section>
    </Center>
  );
};

export default App;
