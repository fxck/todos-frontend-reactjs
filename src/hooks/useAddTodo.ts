import { useMutation } from 'react-query';
import axios from 'axios';
import { ITodo } from '../components/TodoLayout/types';

export default function useAddTodo() {
  return useMutation(({ text, index, completed }: ITodo) => axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/todos`,
    { text, index, completed },
  ).then(({ data }) => data));
}
