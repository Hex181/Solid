import { Box, Flex, Image } from "@chakra-ui/react";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const NavBar = ({ children, noButton }) => (
  <Box>
    <Flex alignItems="center" justifyContent="space-between" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" p={{ base: "10px 30px", lg: "20px 40px" }} w="100%" py={{ base: "20px", lg: 0 }}>
      <a href="/">
        <Image src={BrandLogo} alt="brand-logo" width={{ base: "60%", lg: "100%" }} />
      </a>
      {!noButton &&
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
          Get Started
        </CustomButton>
      }
    </Flex>
    {children}
  </Box>
);

export default NavBar;
