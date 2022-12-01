import { Box, Flex, Image } from "@chakra-ui/react";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const NavBar = ({ children }) => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p="20px 40px">
      <a href="/">
        <Image src={BrandLogo} alt="brand-logo" />
      </a>
      <CustomButton
        width="180px"
        bg="brand.white"
        border="1px solid black"
        color="black"
        hoverBg="black"
        hoverColor="brand.white"
        testid="on-close"
        href="/create-wallet"
      >
        Get Started
      </CustomButton>
    </Flex>
    {children}
  </Box>
);

export default NavBar;
