import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Recipe } from '@zerops/zestrat-models';
import { RecipeInfo } from '@zerops/zestrat-react';
import Todos from './components/Todos/Todos';
import useGetTodos from './hooks/useGetTodos';

const queryClient = new QueryClient()

const App: React.FC = () => {

  const recipe: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG || '{}');

  const { data: todos, refetch: getTodos } = useGetTodos();

  const handleAdd = (): void => {
    console.log('add');
  };

  const handleRemove = (): void => {
    console.log('remove');
  };

  const handleUpdate = (): void => {
    console.log('update');
  };

  return (<div className="zs-recipe">

    <div className="zs-recipe-context">

      <RecipeInfo intro={recipe.intro} desc={recipe.description} />

      <QueryClientProvider client={queryClient}>
        <Todos data={todos} handleAdd={handleAdd} handleRemove={handleRemove} handleUpdate={handleUpdate} />
      </QueryClientProvider>

    </div>

    <div className="zs-recipe-diagram">
      <z-project-diagram services={JSON.stringify(recipe?.services)}></z-project-diagram>
    </div>

  </div>)
};

export default App;
