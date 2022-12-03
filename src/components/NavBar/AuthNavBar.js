import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const AuthNavBar = ({ children }) => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={{ base: "10px 30px", lg: "20px 40px" }} w="100%" py="20px">
      <Flex alignItems="center" w={{ base: "100%", lg: "25%" }} justifyContent="space-between">
        <a href="/">
          <Image src={BrandLogo} alt="brand-logo" width={{ base: "60%", lg: "100%" }} />
        </a>
        <a href="/wallet">
          <Text cursor="pointer" display={{ base: "none", lg: "flex" }} _hover={{ color: "#81B3FF" }} style={{ transition: "all 1.2s ease" }}>Wallet</Text>
        </a>
      </Flex>
      <CustomButton
        width={{ base: "80px", lg: "180px" }}
        bg="brand.white"
        border="1px solid black"
        color="black"
        hoverBg="black"
        fontSize="12px"
        hoverColor="brand.white"
        testid="on-close"
        href="/create-wallet"
        p={{ base: "8px 30px", lg: "8px 40px" }}
      >
        233946272899234
      </CustomButton>
    </Flex>
    {children}
  </Box>
);

export default AuthNavBar;
