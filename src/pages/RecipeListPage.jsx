import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

//import "../components/ui/Styles.css";
//This is a first attempt, however combining styles with Chakra UI, is buggy.
//To make the responsive design note that 'extended theme' is auto loaded. Use of Base, sm, md, lg, xl is responsive.

//import { data } from "../utils/data";
// You can play around with the console log, but ultimately remove it once you are done
// moved to RecipeHelper.js so nodemon can be used to code in JS.
// console.log(data.hits[0].recipe.label);

// The breakpoints as key-value pairs
//base: '0px',
//sm: '320px',
//md: '768px',
//lg: '960px',
//xl: '1200px',
//'2xl': '1536px',

//This should be the main page buidup.

export const RecipeListPage = ({ clickRc, matchedRecipies }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
      {matchedRecipies.map((recipeItem) => (
        <RecipeCard
          clickRc={clickRc}
          recipeItem={recipeItem.recipe}
          key={recipeItem.recipe.label}
        />
      ))}
    </SimpleGrid>
  );
};
