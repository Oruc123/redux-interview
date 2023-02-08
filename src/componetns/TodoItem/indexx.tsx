import React, { useState } from "react";
import daysj from "dayjs";
import {
  PostResponse,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../store/servers/todosService";

const TodoItem: React.FC<PostResponse> = ({
  id,
  title,
  isCompleted,
  createAt,
}) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [isChecked, setChecked] = useState(isCompleted);
  const handleChange = () => {
    setChecked((prev) => !prev);
    updateTodo({
      createAt,
      title,
      isCompleted: !isCompleted,
      id,
    });
  };
  const handleDelete = () => {
    deleteTodo(id);
  };

  let date = daysj(createAt).format("DD/MM/YYYY");

  return (
    <li>
      {title}
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div>
        <strong>{date}</strong>
      </div>
      <div>
        <button onClick={handleDelete}>Delete todo</button>
      </div>
    </li>
  );
};

export default TodoItem;
