// Import from chakra ui components
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

// React Icons
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { isAuthenticate } from "../../pages/apiHelper/auth";
import Todo from "../../pages/todo";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      px={4}
      position={"sticky"}
      top={0}
      zIndex={"overlay"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box as={NavLink} to="/">
          Big Co.
        </Box>

        <Flex alignItems={"center"}>
          {isAuthenticate() ? (
            <>
              <Todo />
              <Stack direction={"row"} spacing={7}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXJZh2D55rD76iDyRR3rxIEwCA9ZmFJGCcQ&usqp=CAU"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXJZh2D55rD76iDyRR3rxIEwCA9ZmFJGCcQ&usqp=CAU"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Anish</p>
                    </Center>
                    <br />
                    <MenuItem onClick={toggleColorMode}>
                      {colorMode === "light" ? (
                        <BsMoonFill />
                      ) : (
                        <BsFillSunFill />
                      )}
                      <Text ml={4}>
                        {colorMode === "light" ? "Dark" : "Light"}
                      </Text>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </>
          ) : (
            <>
              <Button
                // colorScheme="orange"
                as={NavLink}
                to={"/signup"}
                variant="solid"
                mr={2}
              >
                Sign up
              </Button>
              <Button
                colorScheme="orange"
                as={NavLink}
                to={"/signin"}
                variant="solid"
              >
                Sign in
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
