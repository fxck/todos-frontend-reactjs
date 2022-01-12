import { useMutation } from 'react-query';
import axios from 'axios';

export default function useDeleteTodo() {
  return useMutation(({ id }: { id: string}) => axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/todos/${id}`,
  ).then(({ data }) => data));
}
