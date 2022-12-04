import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { signout } from "../../apiHelper/auth";
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} spacing={7} zIndex={"overlay"}>
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
            src={"./images/undraw_male_avatar_re_y880.svg"}
          />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar
              size={"2xl"}
              src={""}
            />
          </Center>
          <br />
          <Center>
            <p>Anish</p>
          </Center>
          <br />
          <MenuItem onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsFillSunFill />}
            <Text ml={4}>
              {colorMode === "light" ? "Dark" : "Light"}
            </Text>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => {
              signout(() => {
                navigate("/signin");
              });
            }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default Profile;
