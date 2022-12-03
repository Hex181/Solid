import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import { plusIcon, receiveIcon, sendIcon, swapIcon } from "../../../assets/svgs/svg";
import { toaster } from "evergreen-ui";

const Balances = () => {
    return (
        <Box w="100%" textAlign="center">
            <Text fontSize="40px" fontWeight="bold">0 USD</Text>
            <Text color="brand.gray">Available balance</Text>

            <SimpleGrid columns={4} gap="20px" mt="60px" justifyContent="center" placeItems="center" mx={{ base: "30px", lg: "150px"}} fontSize="14px">
                <a href="/send-money">
                    <Box cursor="pointer">
                        <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center">
                            {sendIcon}
                        </Box>
                        <Text mt="5px">Send</Text>
                    </Box>
                </a>
                <a href="/receive-money">
                    <Box cursor="pointer">
                        <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center">
                            {receiveIcon}
                        </Box>
                        <Text mt="5px">Receive</Text>
                    </Box>
                </a>
                <Box cursor="pointer" onClick={() => toaster.success("Coming soon !", { id: "mess" })}>
                    <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center">
                        {plusIcon}
                    </Box>
                    <Text mt="5px">Top Up</Text>
                </Box>
                <Box cursor="pointer" onClick={() => toaster.success("Coming soon !", { id: "mess" })}>
                    <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center">
                        {swapIcon}
                    </Box>
                    <Text mt="5px">Swap</Text>
                </Box>
            </SimpleGrid>

            <Divider my="20px" />

            <Box bg="brand.grey" py="20px" cursor="pointer">
                <Text fontWeight="bold">Deposit SOLID</Text>
                <Text>You will need SOLID tokens to perform transactions with your wallet</Text>
            </Box>
        </Box>
    )
};

export default Balances;