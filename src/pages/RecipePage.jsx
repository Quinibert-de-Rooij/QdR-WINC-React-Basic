//Beautiful new version with responsive layout

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import { TimeTag } from "../components/ui/TimeTag";
import { RecipeList } from "../components/RecipeList";

export const RecipePage = ({ item, clickRc }) => {
  const calories = Math.round(item.calories);
  const weight = Math.round(item.totalWeight);
  const Nutrients = item.totalNutrients;

  //Reset on going back:
  const scrollToTopOnRender = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  scrollToTopOnRender();

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        backgroundColor={"green.100"}
      >
        <Flex>
          <Image
            rounded={"3xl"}
            alt={"Recipe Preview"}
            src={item.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              textTransform={"uppercase"}
            >
              {item.label}
            </Heading>
            <Text
              color={"gray.500"}
              fontWeight={300}
              fontSize={"4xl"}
              textTransform={"uppercase"}
            >
              {item.cuisineType}
            </Text>
            <TimeTag tagName={item.totalTime} />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"gray.600"} />}
          >
            <Stack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {item.mealType}/{item.dishType}
              </Text>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Ingedients:
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                {item.ingredientLines.map((ingredient) => (
                  <RecipeList
                    listText={ingredient}
                    ListColor={"gray.400"}
                    key={ingredient}
                  />
                ))}
              </SimpleGrid>
            </Stack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Healthlabels:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                {item.healthLabels.map((healthlabel) => (
                  <RecipeList
                    listText={healthlabel}
                    ListColor={"green.500"}
                    key={healthlabel}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Dietlabels:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                {item.dietLabels.map((dietlabel) => (
                  <RecipeList
                    listText={dietlabel}
                    ListColor={"yellow.500"}
                    key={dietlabel}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Cautions:
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                {item.cautions.map((cautionlabel) => (
                  <RecipeList
                    listText={cautionlabel}
                    ListColor={"red.500"}
                    key={cautionlabel}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Recipe Details:
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Servings:
                  </Text>{" "}
                  {item.yield}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total Calories:
                  </Text>{" "}
                  {calories} Kcal
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total weight:
                  </Text>{" "}
                  {weight} grams
                </ListItem>
                <ListItem>
                  <Text color="green.100" as={"span"} fontWeight={"bold"}>
                    -
                    {
                      //this is just to have some a more natural space between the table.
                    }
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total Nutrients:
                  </Text>
                </ListItem>
              </List>
              <TableContainer>
                <Table variant="striped" colorScheme="blackAlpha">
                  <Thead>
                    <Tr>
                      <Th>Type</Th>
                      <Th isNumeric>Quantity</Th>
                      <Th>Unit of measure</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{Nutrients.ENERC_KCAL.label}</Td>
                      <Td isNumeric>
                        {Math.round(Nutrients.ENERC_KCAL.quantity)}
                      </Td>
                      <Td>{Nutrients.ENERC_KCAL.unit}</Td>
                    </Tr>{" "}
                    <Tr>
                      <Td>{Nutrients.FAT.label}</Td>
                      <Td isNumeric>{Math.round(Nutrients.FAT.quantity)}</Td>
                      <Td>{Nutrients.FAT.unit}</Td>
                    </Tr>
                    <Tr>
                      <Td>{Nutrients.PROCNT.label}</Td>
                      <Td isNumeric>{Math.round(Nutrients.PROCNT.quantity)}</Td>
                      <Td>{Nutrients.PROCNT.unit}</Td>
                    </Tr>
                    <Tr>
                      <Td>{Nutrients.CHOCDF.label}</Td>
                      <Td isNumeric>{Math.round(Nutrients.CHOCDF.quantity)}</Td>
                      <Td>{Nutrients.CHOCDF.unit}</Td>
                    </Tr>
                    <Tr>
                      <Td>{Nutrients.CHOLE.label}</Td>
                      <Td isNumeric>{Math.round(Nutrients.CHOLE.quantity)}</Td>
                      <Td>{Nutrients.CHOLE.unit}</Td>
                    </Tr>
                    <Tr>
                      <Td>{Nutrients.NA.label}</Td>
                      <Td isNumeric>{Math.round(Nutrients.NA.quantity)}</Td>
                      <Td>{Nutrients.NA.unit}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
          <Center>
            <Button
              rounded={"md"}
              size={"lg"}
              onClick={() => clickRc()}
              bg={useColorModeValue("green.500", "green.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              back to Recipe Book
            </Button>
          </Center>
        </Stack>
      </SimpleGrid>

      <Stack direction="row" alignItems="center" justifyContent={"center"}>
        <Text fontSize={"sm"} color={"grey"}>
          Recipe Book by: Quinibert de Rooij.
        </Text>
      </Stack>
    </Container>
  );
};
