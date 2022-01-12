import { useMutation } from 'react-query';
import axios from 'axios';
import { ITodo } from '../components/TodoLayout/types';

export default function useUpdateTodo() {
  return useMutation(({ id, completed }: ITodo) => axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/todos/${id}`,
    { completed },
  ).then(({ data }) => data));
}
