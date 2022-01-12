import React, { useState } from 'react';
import Instructions from './Instructions/Instructions';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { ITodo } from './types';


type FormElem = React.FormEvent<HTMLFormElement>


const initState = [
  { index: 1, text: 'Fork repository', completed: false },
  { index: 2, text: 'Open build and deploy settings and connect', completed: false },
  { index: 3, text: 'Push a new commit', completed: false },
];

const TodoLayout = () => {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] =  useState<ITodo[]>(initState);

    const addTodo = (text:string): void => {
      const newTodos: ITodo[] = [...todos, {text, completed: false, index: todos.length + 1}];
      setTodos(newTodos);
      console.log(newTodos);
    };

    const handleSubmit = (e: FormElem): void => {
      e.preventDefault();
      addTodo(value);
      setValue('')
    };

    const completeTodo = (index: number): void => {
      const newTodos: ITodo[] = [ ...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos)
    };

    const deleteTodo = (index: number) => {
      const newTodos: ITodo[] = [ ...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
      <section>
        <TodoInput handleSubmit={handleSubmit} value={value} setValue={setValue} />
          <Instructions />
          <TodoList todos={todos} handleComplete={completeTodo} handleDelete={deleteTodo} />
      </section>
    );
}

export default TodoLayout;
