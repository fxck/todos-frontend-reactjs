import axios from 'axios';
import { useMutation } from 'react-query';
import { ITodo } from '../components/TodoLayout/types';

const useAddTodo = () => {
  return useMutation(({ text, index, completed }: ITodo) => axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/todos`,
    { text, index, completed },
  ).then(({ data }) => data));
}

export default useAddTodo;
