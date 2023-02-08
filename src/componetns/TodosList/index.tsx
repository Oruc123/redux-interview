import { useGetTodosQuery } from "../../store/servers/todosService";
import TodoItem from "../TodoItem/indexx";

const TodosoList = () => {
  const { data, isError, isLoading, isFetching } = useGetTodosQuery();

  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <div>oops!</div>;
  }
  return (
    <ul>
      {data?.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default TodosoList;
