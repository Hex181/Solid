import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import AuthNavBar from "../../components/NavBar/AuthNavBar";
import Balances from "./Balances/balances";
import Collectibles from "./Collectibles/Collectibles";

const WalletTemp = () => {
    const [showBalance, setShowBalance] = useState(true);
    return (
        <AuthNavBar>
            <Box mx="120px" mt="100px">
                <Flex w="100%" justifyContent="space-between">
                    <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w="65%" borderRadius="4px" border="1px solid #9C9C9C">
                        <Flex fontWeight="bold" fontSize="25px" alignItems="center" justifyContent="space-between">
                            <Text color={!showBalance && "brand.gray"} onClick={() => setShowBalance(true)} cursor="pointer" bg={!showBalance && "#FAFAFA"} p w="50%" textAlign="center">Balances</Text>
                            <Text color={showBalance && "brand.gray"} onClick={() => setShowBalance(false)} cursor="pointer" bg={showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Collectibles</Text>
                        </Flex>
                        <Box mt="60px" mb="20px">
                            {showBalance ? <Balances /> : <Collectibles />}
                        </Box>
                    </Box>
                    <Box w="30%">
                        <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w="100%" borderRadius="4px" border="1px solid #9C9C9C" p="20px">
                            <Text fontSize="25px" fontWeight="bold">Recent Activities</Text>
                            
                            <Flex justifyContent="space-between" mt="20px">
                                <Flex alignItems="center">
                                    <Avatar name='Bitcoin' size="sm" src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' />
                                    <Box ml="20px" fontSize="14px" color="brand.gray">
                                        <Text fontWeight="bold">Bitcoin</Text>
                                        <Text>BTC</Text>
                                    </Box>
                                </Flex>
                                <Text fontWeight="bold">0.02223</Text>
                            </Flex>
                            <Divider my="10px" />
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </AuthNavBar>
    )
};

export default WalletTemp;