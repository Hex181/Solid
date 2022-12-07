import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Button, CaretDownIcon, Menu, Popover, Position } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import { walletIcon } from "../../assets/svgs/svg";
import { getAddress } from "../../utils.js/helpers";

const AuthNavBar = ({ children, setMainnet }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          p={{ base: "10px 30px", lg: "20px 40px" }}
          w="100%"
          py="20px"
          pos="fixed"
          zIndex="999"
          bg="white"
        >
          <Flex
            alignItems="center"
            w={{ base: "100%", lg: "25%" }}
            justifyContent="space-between"
          >
            <a href="/">
              <Image
                src={BrandLogo}
                alt="brand-logo"
                width={{ base: "60%", lg: "100%" }}
              />
            </a>
            <Flex cursor="pointer" onClick={() => navigate("/")}>
              <Box mr="5px">{walletIcon}</Box>
              <Text
                display={{ base: "none", lg: "flex" }}
                _hover={{ color: "#81B3FF" }}
                style={{ transition: "all 1.2s ease" }}
              >
                Wallet
              </Text>
            </Flex>
          </Flex>
          {/* <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item onSelect={() => setMainnet(true)}>
                    Mainnet
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item onSelect={() => setMainnet(false)}>
                    Testnet
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Button marginRight={16} iconAfter={CaretDownIcon} padding="20px" fontSize="12px">{getAddress()?.substring(0, 10)}</Button>
          </Popover> */}
        </Flex>
        {children}
      </Box>
    </>
  );
};

export default AuthNavBar;
