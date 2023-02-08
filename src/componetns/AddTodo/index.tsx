import React, { useState } from "react";
import { useAddTodoMutation } from "../../store/servers/todosService";

const AddTodo = () => {
  const [addTodo] = useAddTodoMutation();

  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    addTodo({
      title: value,
      isCompleted: false,
      createAt: Date.now(),
    });

    setValue("");
  };
  return (
    <div>
      <input onChange={handleChange} value={value} type="text" />
      <button onClick={handleSubmit}>Add todo</button>
    </div>
  );
};

export default AddTodo;
