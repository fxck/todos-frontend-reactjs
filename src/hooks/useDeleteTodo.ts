import axios from 'axios';
import { useMutation } from 'react-query';

const useDeleteTodo = () => (
  useMutation(( id: { id: string}) => axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/todos/${id}`
  ).then(({ data }) => data)));

export default useDeleteTodo;
