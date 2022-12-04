import { Box, Divider, Flex, SimpleGrid, Text, Avatar } from "@chakra-ui/react";
import { plusIcon, receiveIcon, sendIcon, swapIcon } from "../../../assets/svgs/svg";
import { toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import { getTokensBalances } from "../../../utils.js/helpers";

const Balances = ({ address, handleSendMoney, handleReceiveMoney }) => {
    const [totalValue, setTotalValue] = useState(0);
    const [outcome, setOutcome] = useState({});
    const [balances, setBalances] = useState();

    console.log(balances);

    const getBalances = async () => {
        try {
            const res = await getTokensBalances(address);
            setBalances(res);
            let value = 0;
            res.map((token) => {
                console.log(token);
                value += Number(token.value);
            })
            setTotalValue(value);

        } catch (err) {
            console.log(err);
            toaster.danger("An error occured!");
        }
    }

    useEffect(() => {
        getBalances();
    }, [])

    return (
        <Box w="100%" textAlign="center">
            <Text fontSize="40px" fontWeight="bold">{totalValue} USD</Text>
            <Text color="brand.gray">Portfolio Value</Text>

            <SimpleGrid columns={4} gap="20px" mt="60px" justifyContent="center" placeItems="center" mx={{ base: "30px", lg: "150px" }} fontSize="14px">
                <Box cursor="pointer">
                    <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center" onClick={handleSendMoney}>
                        {sendIcon}
                    </Box>
                    <Text mt="5px">Send</Text>
                </Box>
                <Box cursor="pointer">
                    <Box bg="black" borderRadius="15px" p="15px" w="55px" textAlign="center" onClick={handleReceiveMoney}>
                        {receiveIcon}
                    </Box>
                    <Text mt="5px">Receive</Text>
                </Box>
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

            {balances?.map((token) => (
                <>
                    <Flex justifyContent="space-between" m="20px">
                        <Flex>
                            <Avatar name={token.name} size="sm" src={token.logo} />
                            <Box ml="20px" fontSize="14px" color="brand.gray" textAlign="left">
                                <Text fontWeight="bold">{token.symbol}</Text>
                                <Text>{token.name}</Text>
                            </Box>
                        </Flex>
                        <Box ml="20px" fontSize="14px" color="brand.gray" textAlign="right">
                            <Text fontWeight="bold">{token.balance}</Text>
                            <Text >{token.value} USD</Text>
                        </Box>
                    </Flex>
                    <Divider my="10px" />
                </>
            ))}

            <Box bg="brand.grey" py="20px" cursor="pointer">
                <Text fontWeight="bold">Powered by Covalent API</Text>
                <Text>Token balances and quotes are gotten from convalent api</Text>
            </Box>
        </Box>
    )
};

export default Balances;