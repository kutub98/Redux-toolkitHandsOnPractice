// import { useAppSelector } from '@/Redux/Hooks/Hooks';
import TodoCard from './TodoCard';
import { AddTodo } from './TodoDrawer';
import Filters from './TodoFilter';
import { useState } from 'react';
import { useGetTaskQuery } from '@/Redux/api/api';

const TodoContainer = () => {
  // from localHost
  // const { todo } = useAppSelector(todo => todo.todo);

  // from server
  const { data: tasks = [], isLoading, isError } = useGetTaskQuery(undefined);
  const [selectedPriority, setSelectedPriority] = useState<
    'All' | 'High' | 'Medium' | 'Low'
  >('All');

  console.log(tasks, 'from data todo');
  const sortedTodos = [...tasks].sort((a, b) => {
    if (a.isCompleted === b.isCompleted) return 0;
    return a.isCompleted ? 1 : -1;
  });

  const filtere = sortedTodos.filter(item => {
    if (selectedPriority === 'All') {
      return true;
    } else {
      return item.priority === selectedPriority;
    }
  });

  const handleFilters = (selectedFilter: 'All' | 'High' | 'Medium' | 'Low') => {
    setSelectedPriority(selectedFilter);
  };

  if (isError) {
    return <p>Something went wrong!</p>;
  }
  if (isLoading) {
    return <p>Data is Loading</p>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between bg-white font-semibold mb-6">
        <AddTodo />
        <Filters onChange={handleFilters} />
      </div>
      <div className="flex justify-between  space-x-2 bg-gradient-bg p-4 rounded items-center">
        <input className="mr-2" type="checkbox" />
        <h1 className="flex-1">Title </h1>
        {/* <h1>Time</h1> */}
        <h1 className="flex-1">Description</h1>
        <h1 className="flex-1 text-center">Status</h1>
        <h1 className="flex-1">Priorty</h1>
        <h1 className="flex-2">Action</h1>
      </div>
      <div className="  bg-gradient-bg p-2  space-y-2 ">
        {filtere.length > 0 ? (
          filtere.map((item, key) => <TodoCard key={key} {...item} />)
        ) : (
          <div
            className="bg-red-600 text-white
           text-center items-center justify-center p-4 rounded"
          >
            <h1 className="text-3xl font-semibold">There is no todo pending</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
