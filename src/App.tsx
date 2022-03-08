import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Recipe } from '@zerops/zestrat-models';
import { RecipeInfo } from '@zerops/zestrat-react';

const queryClient = new QueryClient()

const App: React.FC = () => {

  const recipe: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG || '{}');

  return (<div className="zs-recipe">

    <div className="zs-recipe-context">
      <QueryClientProvider client={queryClient}>
        <RecipeInfo intro={recipe.intro} desc={recipe.description}></RecipeInfo>
      </QueryClientProvider>
    </div>

    <div className="zs-recipe-diagram">
      <z-project-diagram services={JSON.stringify(recipe?.services)}></z-project-diagram>
    </div>

  </div>)
};

export default App;
