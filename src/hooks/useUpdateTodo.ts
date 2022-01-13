import axios from 'axios';
import { useMutation } from 'react-query';
import { ITodo } from '../components/TodoLayout/types';

const useUpdateTodo = () => {
  return useMutation(({ _id, completed }: ITodo) => axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/todos/${_id}`,
    { completed },
  ).then(({ data }) => data));
}

export default useUpdateTodo;
