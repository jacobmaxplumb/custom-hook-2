import { useFormAndList } from "../useFormAndList";

const initialFormValues = {
  text: "",
  completed: false,
};

export const TodoList = () => {
  const [
    todos,
    todoFormValues,
    addTodo,
    handleTodoFormChange,
    deletedTodo,
    setTodoFormValues,
  ] = useFormAndList(initialFormValues, "todo");

  return (
    <div>
      <div>
        <input
          name="text"
          value={todoFormValues.text}
          onChange={handleTodoFormChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={todoFormValues.completed}
          onChange={() =>
            setTodoFormValues({
              ...todoFormValues,
              completed: !todoFormValues.completed,
            })
          }
        />{" "}
        completed
      </div>
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <div
          onClick={() => deletedTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
          key={todo.id}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};
