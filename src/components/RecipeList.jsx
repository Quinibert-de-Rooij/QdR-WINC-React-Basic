//This list page will just loop the list with one list item.
//This way it can fit in the grid.
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const RecipeList = ({ listText, ListColor }) => {
  return (
    <List>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color={ListColor} />
        {listText}
      </ListItem>
    </List>
  );
};
