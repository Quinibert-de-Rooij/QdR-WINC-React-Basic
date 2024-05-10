import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

export const HealthTag = ({ tagName }) => {
  return (
    <Tag size="md" colorScheme="green" borderRadius="full">
      <Avatar
        src="https://img.icons8.com/cute-clipart/64/healthy-food.png"
        size="xs"
        name="Healthy Food Icon"
        ml={-1}
        mr={2}
      />
      <TagLabel color="green.600" as="b">
        {tagName}
      </TagLabel>
    </Tag>
  );
};
