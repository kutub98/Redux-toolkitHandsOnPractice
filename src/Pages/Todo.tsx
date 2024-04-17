import TodoContainer from '@/components/Todo/TodoContainer';
import Container from '@/components/ui/Container';

const Todo = () => {
  return (
    <Container>
      <div className="p-4 w-full h-auto bg-white">
        <h1 className="text-center font-semibold text-5xl text-black  my-10">
          My Todo
        </h1>
        <TodoContainer />
      </div>
    </Container>
  );
};

export default Todo;
