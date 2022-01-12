import { useQuery } from 'react-query';
import axios from 'axios';

export default function useGetTodos() {
  return useQuery('todos', () => axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/todos`,
  ).then(({ data }) => data));
}
