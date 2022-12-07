import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PhoneIcon from "../../assets/icons/phone-icon.svg";
import CustomButton from "../../components/CustomButton/customButton";

const HomeTemp = () => {
  return (
    <NavBar>
      <Box className="background" pt="105px">
        <Box p="20px 60px" w="100%">
          <Flex textAlign="center" justifyContent="center">
            <Text fontWeight="700" mr="10px" fontSize={{ base: "25px", lg: "35px" }}>
              SOLID
            </Text>
            <Text fontWeight="light" fontSize={{ base: "25px", lg: "35px" }}>
              is here
            </Text>
          </Flex>
          <Box textAlign="center" fontSize={{ base: "16px", lg: "20px" }} fontWeight="light">
            <Text>Securely store and controll your wallet.</Text>
            <Text>Spend money smarter with SOLID Wallet</Text>

            <Box w="100%" mt="40px">
              <Image src={PhoneIcon} alt="phone-icon" mx="auto" />
            </Box>
          </Box>
        </Box>
        <Flex justifyContent="space-evenly" w={{ base: "70%", lg: "50%"}} mx="auto" my="40px" display={{ base: "block", lg: "flex" }} mb="30px">
          <CustomButton
            w={{ base: "100%", lg: "250px" }}
            bg="black"
            border="1px solid black"
            color="white"
            hoverBg="white"
            hoverColor="black"
            testid="on-close"
            href="/create-wallet"
          >
            Create Wallet
          </CustomButton>

          <CustomButton
            w={{ base: "100%", lg: "180px" }}
            bg="brand.white"
            border="1px solid black"
            color="black"
            hoverBg="black"
            hoverColor="brand.white"
            testid="on-close"
            href="/import-wallet"
            mt={{ base: "20px", lg: "0" }}
          >
            Import Existing Wallet
          </CustomButton>
        </Flex>
      </Box>
    </NavBar>
  );
};

export default HomeTemp;
