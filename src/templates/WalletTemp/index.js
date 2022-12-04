/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AuthNavBar from "../../components/NavBar/AuthNavBar";
import { getTransactions } from "../../utils.js/helpers";
import Balances from "./Balances/balances";
import Collectibles from "./Collectibles/Collectibles";

const WalletTemp = ({ account, handleSendMoney, handleReceiveMoney }) => {
    const [showBalance, setShowBalance] = useState(true);
    const [transactions, setTransactions] = useState();


    const trim = (str) => {
        return str.slice(0, 30) + "...";
    }

    const getAllTransactions = async (addr) => {
        try {
            const res = await getTransactions(addr);
            setTransactions(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllTransactions(account.address);
    }, [])

    return (
        <AuthNavBar>
            <Box mx={{ base: "30px", lg: "120px" }} mt="100px">
                <Flex w="100%" justifyContent="space-between" display={{ base: "block", lg: "flex" }}>
                    <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w={{ base: "100%", lg: "65%" }} borderRadius="4px" border="1px solid #9C9C9C">
                        <Flex fontWeight="bold" fontSize="25px" alignItems="center" justifyContent="space-between">
                            <Text color={!showBalance && "brand.gray"} onClick={() => setShowBalance(true)} cursor="pointer" bg={!showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Balances</Text>
                            <Text color={showBalance && "brand.gray"} onClick={() => setShowBalance(false)} cursor="pointer" bg={showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Collectibles</Text>
                        </Flex>
                        <Box mt="60px" mb="20px">
                            {showBalance ?
                                <Balances address={account.address} handleSendMoney={handleSendMoney} handleReceiveMoney={handleReceiveMoney} /> :
                                <Collectibles address={account.address} />}
                        </Box>
                    </Box>
                    <Box w={{ base: "100%", lg: "30%" }} mt={{ base: "20px", lg: 0 }}>
                        <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w="100%" borderRadius="4px" border="1px solid #9C9C9C" p="20px">
                            <Text fontSize="25px" fontWeight="bold">Recent Activities</Text>

                            {transactions?.map((transaction) => (
                                <>
                                    <a href={`https://evm.evmos.dev/tx/${transaction.hash}`} target="_blank">
                                        <Flex justifyContent="space-between" mt="20px">
                                            <Flex alignItems="center">
                                                <Box ml="20px" fontSize="14px" color="brand.gray">
                                                    <Text fontWeight="bold">tx: {trim(transaction.hash)}</Text>
                                                    <Text>to: {trim(transaction.to)}</Text>
                                                </Box>
                                            </Flex>
                                            <Text fontWeight="bold">{transaction.value}</Text>
                                        </Flex>
                                        <Divider my="10px" />
                                    </a>
                                </>
                            ))}
                            <Box mt="30px">
                                <a href={`https://evm.evmos.dev/address/${account.address}`} target="_blank">
                                    <Text as="u" fontSize="14px" >View all transactions</Text>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </AuthNavBar>
    )
};

export default WalletTemp;