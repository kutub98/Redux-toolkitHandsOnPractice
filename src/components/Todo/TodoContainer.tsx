
import TodoCard from './TodoCard';
import { AddTodo } from './TodoDrawer';
import { Filters } from './TodoFilter';

const TodoContainer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between  font-semibold mb-6">
        <AddTodo/>
        <Filters></Filters>
      </div>
      <div className=" p-5 bg-gradient-bg rounded-xl space-y-2">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
      {/* <div className="bg-white text-center items-center justify-center p-4 rounded">
        <h1 className="text-3xl font-semibold">There is no todo pending</h1>
      </div> */}
    </div>
  );
};

export default TodoContainer;
