import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const AuthNavBar = ({ children }) => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p="20px 40px">
      <Flex alignItems="center" w="25%" justifyContent="space-between">
        <a href="/">
          <Image src={BrandLogo} alt="brand-logo" />
        </a>
        <a href="/wallet">
          <Text cursor="pointer" _hover={{ color: "#81B3FF" }} style={{ transition: "all 1.2s ease" }}>Wallet</Text>
        </a>
      </Flex>
      <CustomButton
        width="180px"
        bg="brand.white"
        border="1px solid black"
        color="black"
        hoverBg="black"
        hoverColor="brand.white"
        testid="on-close"
      >
        233946272899234
      </CustomButton>
    </Flex>
    {children}
  </Box>
);

export default AuthNavBar;
