//Old legacy file used for testing the page responce.

import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ item, clickRc }) => {
  return (
    <Center flexDirection="column">
      <Card bgColor="green.500" borderRadius="3xl" w="3xl">
        <CardBody>
          <Image w="100%" src={item.image} borderRadius="3xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.label}</Heading>
            <Text>{item.ingredientLines}</Text>
            <Button
              bgColor="green.100"
              w="fit-content"
              onClick={() => clickRc()}
            >
              Back to Kookbook
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
