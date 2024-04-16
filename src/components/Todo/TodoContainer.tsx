import { useAppSelector } from '@/Redux/Hooks/Hooks';
import TodoCard from './TodoCard';
import { AddTodo } from './TodoDrawer';
import { Filters } from './TodoFilter';

const TodoContainer = () => {
  const { todo } = useAppSelector(todo => todo.todo);

  const sortedTodos = [...todo].sort((a, b) => {
    if (a.isCompleted === b.isCompleted) return 0;
    return a.isCompleted ? 1 : -1;
  });
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between  font-semibold mb-6">
        <AddTodo />
        <Filters></Filters>
      </div>
      <div className="flex justify-between  space-x-2 bg-gradient-bg p-4 rounded items-center">
        <input type="checkbox" />
        <h1>Title </h1>
        {/* <h1>Time</h1> */}
        <h1>Description</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      <div className="  bg-gradient-bg rounded-xl space-y-2">
        {sortedTodos.map((item, key) => (
          <TodoCard key={key} {...item} />
        ))}
      </div>
      {/* <div className="bg-white text-center items-center justify-center p-4 rounded">
        <h1 className="text-3xl font-semibold">There is no todo pending</h1>
      </div> */}
    </div>
  );
};

export default TodoContainer;
