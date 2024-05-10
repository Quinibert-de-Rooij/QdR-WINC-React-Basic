import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

export const CautionTag = ({ tagName }) => {
  return (
    <Tag size="md" colorScheme="red" borderRadius="full">
      <Avatar
        src="https://img.icons8.com/bubbles/100/error.png"
        size="xs"
        name="Caution Icon"
        ml={-1}
        mr={2}
      />
      <TagLabel color="red.600" as="b">
        {tagName}
      </TagLabel>
    </Tag>
  );
};
