import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { sendIcon } from "../../../assets/svgs/svg";

const Balances = () => {
    return (
        <Box>
            <Text fontSize="40px" fontWeight="bold">0 USD</Text>
            <Text color="brand.gray">Available balance</Text>

            <SimpleGrid colums={4} gap="20px">
                <Box bg="black" borderRadius="20px" p="25px">
                    {sendIcon}
                </Box>
            </SimpleGrid>
        </Box>
    )
};

export default Balances;