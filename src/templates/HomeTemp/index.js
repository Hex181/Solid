import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PhoneIcon from "../../assets/icons/phone-icon.svg";
import CustomButton from "../../components/CustomButton/customButton";

const HomeTemp = () => {
  return (
    <NavBar>
      <Box className="background">
        <Box p="20px 60px" w="100%" mt="20px">
          <Flex textAlign="center" justifyContent="center">
            <Text fontWeight="700" mr="10px" fontSize="35px">
              SOLID
            </Text>
            <Text fontWeight="light" fontSize="35px">
              is here
            </Text>
          </Flex>
          <Box textAlign="center" fontSize="20px" fontWeight="light">
            <Text>Securely store and controll your wallet.</Text>
            <Text>Spend money smarter with SOLID Wallet</Text>

            <Box w="100%" mt="40px">
              <Image src={PhoneIcon} alt="phone-icon" mx="auto" />
            </Box>
          </Box>
        </Box>
        <Flex justifyContent="space-evenly" w="50%" mx="auto" mt="20px">
          <CustomButton
            w="250px"
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
            width="180px"
            bg="brand.white"
            border="1px solid black"
            color="black"
            hoverBg="black"
            hoverColor="brand.white"
            testid="on-close"
          >
            Import Existing Wallet
          </CustomButton>
        </Flex>
      </Box>
    </NavBar>
  );
};

export default HomeTemp;
