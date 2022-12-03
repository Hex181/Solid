import { Box, Image, Text } from "@chakra-ui/react";
import BrandIcon from "../../../assets/icons/logo192.png";
import CustomButton from "../../../components/CustomButton/customButton";

const Collectibles = () => {
    return (
        <Box bg="brand.grey" py="20px" cursor="pointer" borderRadius="6px" mx="20px" textAlign="center">
            <Image src={BrandIcon} alt="brandLogo" w="30px" mx="auto" />
            <Box mt="20px" w="100%">
                <Text color="brand.gray" mx="auto" w={{ base: '60%', lg: '100%' }} textAlign="center">You currently don't have any Collectibles yet.</Text>
            </Box>

            <CustomButton
                w="50%"
                bg="black"
                border="1px solid #3A3A3ABF"
                color="white"
                hoverBg="none"
                hoverColor="black"
                testid="on-close"
                mt="40px"
              >
                Explore Apps
              </CustomButton>
    </Box>
    )
};

export default Collectibles;