import { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";

export const RecipeSearch = ({ clickRc }) => {
  const [searchField, setSearchField] = useState("");

  //search on healthlabels or titles, when typed vegan also labels with vegan will appear.
  const matchedRecipies = data.hits.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.recipe.healthLabels
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  //The previous one was written in JavaScript and looked like an app from the DOS era.
  //This is why the upgrade to 2.0 was needed modern era recipes :)
  const Title = "Recipe Book 2.0";
  return (
    <Center flexDir="column">
      <Heading textColor={"green.500"} as="i">
        {Title}
      </Heading>
      <label>Search for recipe:</label>
      <TextInput
        onChange={handleChange}
        w={{ sm: 200, md: 300, lg: 350, xl: 400 }}
        mb={8}
      />
      <RecipeListPage clickRc={clickRc} matchedRecipies={matchedRecipies} />
    </Center>
  );
};
