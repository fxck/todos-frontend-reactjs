import React, { useEffect, useState } from 'react';
import Instructions from './Instructions/Instructions';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import useGetTodos from '../../hooks/useGetTodos';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useAddTodo from '../../hooks/useAddTodo';
import useUpdateTodo from '../../hooks/useUpdateTodo';

type FormElem = React.FormEvent<HTMLFormElement>

const initState = [
  { index: 1, text: 'Fork repository', completed: false },
  { index: 2, text: 'Open build and deploy settings and connect', completed: false },
  { index: 3, text: 'Push a new commit', completed: false },
];

const TodoLayout = () => {
  const { data: todos, refetch: getTodos } = useGetTodos();
  const addTodo = useAddTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo  = useDeleteTodo();

  const [value, setValue] = useState<string>('');
  const [userActions, setUserActions] = useState(false);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo.mutate({ index: todos.length, text: value, completed: false }, {
      onSuccess: () => getTodos()
    });
    setValue('');
    if (!userActions) {
      setUserActions(true);
    }
  };

  const handleCompleteTodo = (index: number): void => {
    const todo = todos[index];
    updateTodo.mutate(
      { ...todo, completed: !todo.completed },
      { onSuccess: () => getTodos()},
    );
  };

  const handleDeleteTodo = (index: number) => {
    deleteTodo.mutate(todos[index]._id, { onSuccess: () => getTodos()});
  };

  // todo this is a temp solution in case the db is empty
  useEffect(() => {
    if (todos?.length < 1 && !userActions) {
      initState.map((todo) => addTodo.mutate(todo))
    }
  }, [addTodo, todos, userActions]);

  return (
    <section>
      <TodoInput handleSubmit={handleSubmit} value={value} setValue={setValue} />
      <Instructions />
      <TodoList todos={todos} handleComplete={handleCompleteTodo} handleDelete={handleDeleteTodo} />
    </section>
  );
}

export default TodoLayout;
