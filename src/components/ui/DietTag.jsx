import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

export const DietTag = ({ tagName }) => {
  return (
    <Tag size="md" colorScheme="yellow" borderRadius="full">
      <Avatar
        src="https://img.icons8.com/dusk/64/overview-pages-1.png"
        size="xs"
        name="Diet List Label"
        ml={-1}
        mr={2}
      />
      <TagLabel color="yellow.600" as="b">
        {tagName}
      </TagLabel>
    </Tag>
  );
};
