import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div>
      {selectedItem ? (
        <RecipePage item={selectedItem} clickRc={setSelectedItem} />
      ) : (
        <RecipeSearch clickRc={setSelectedItem} />
      )}
    </div>
  );
};
