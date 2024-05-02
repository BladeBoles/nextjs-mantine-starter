"use client";
import { Textarea, List, Button } from "@mantine/core";
import { useState } from "react";

interface ResetTodosButtonProps {
  resetTodos: () => void;
}
interface AddTodoInputProps {
  value: string;
  setValue: (value: string) => void;
}
interface AddTodoButtonProps {
  addTodo: () => void;
}
function AddTodoInput({ value, setValue }: AddTodoInputProps) {
  return (
    <Textarea
      onChange={(event) => setValue(event.target.value)}
      value={value}
    ></Textarea>
  );
}
function AddTodoButton({ addTodo }: AddTodoButtonProps) {
  return <Button onClick={addTodo}>Add Todo!</Button>;
}
function ResetTodosButton({ resetTodos }: ResetTodosButtonProps) {
  return (
    <Button color="gray" onClick={resetTodos}>
      Reset Todos :(
    </Button>
  );
}
function TodoList({
  todos = [],
  removeTodo,
}: {
  todos: string[];
  removeTodo: (index: number) => void;
}) {
  return (
    <List>
      {todos.map((todo, index) => (
        <List.Item key={index}>
          {todo}

          <Button color="red" onClick={() => removeTodo(index)}>
            Delete!
          </Button>
        </List.Item>
      ))}
    </List>
  );
}
export default function HomePage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  const removeTodo = (todoIndex: number) =>
    setTodos(todos.filter((_, index) => index !== todoIndex));

  const resetTodos = () => setTodos([]);
  return (
    <>
      <AddTodoInput value={value} setValue={setValue}></AddTodoInput>
      <AddTodoButton addTodo={addTodo}></AddTodoButton>
      <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
      <ResetTodosButton resetTodos={resetTodos}></ResetTodosButton>
    </>
  );
}
