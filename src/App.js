import './App.css';
import HomePage from './pages/homepage';
import AddRecipe from './pages/add-recipe';
import DisplayRecipe from './pages/display-recipes';
import AddIngredients from './pages/add-ingredients';
import IndividualRecipe from './pages/displayIndividualRecipe';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  //create a useState that keeps the recfipe id here. This id will be passed as the param to the appropriate Route

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path='/add_recipe' element={<AddRecipe />}></Route>
        <Route path='/add_ingredients' element= {<AddIngredients />}> </Route>
        <Route path='/display_recipe' element= {<DisplayRecipe />}> </Route>
        <Route path="/display_recipe/:id" element={<IndividualRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
