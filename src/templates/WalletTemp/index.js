/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Spinner, toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import AuthNavBar from "../../components/NavBar/AuthNavBar";
import { getTransactions, getTokensBalances, getExternalMetadata } from "../../utils.js/helpers";
import Balances from "./Balances/balances";
import Collectibles from "./Collectibles/Collectibles";

const WalletTemp = ({ account, handleSendMoney, handleReceiveMoney, showMarketPlace }) => {
    const [showBalance, setShowBalance] = useState(true);
    const [balances, setBalances] = useState();
    const [collectibles, setCollectibles] = useState();
    const [totalValue, setTotalValue] = useState();
    const [transactions, setTransactions] = useState();
    const [mainnet, setMainnet] = useState(true);
    const [isLoadingTrx, setIsLoadingTrx] = useState(false);


    const trim = (str) => {
        return str.slice(0, 30) + "...";
    }

    const getBalances = async () => {
        try {
            const erc20Balances = [];
            let nftBalances = [];
            const res = await getTokensBalances(account.address);
            console.log({ res });
            let value = 0;
            res.forEach(token => {
                if (token.type == "nft") {
                    nftBalances.push(token);
                } else {
                    erc20Balances.push(token)
                    value += Number(token.value);
                }
            });
            setBalances(erc20Balances);
            //get external nft datas
            const nfts = []
            nftBalances.forEach(async n => {
                const id = n.nft_data[0].token_id;
                console.log({ id })
                const res = await getExternalMetadata(n.address, id);
                console.log({ res });
                nfts.push(res);
            })
            setCollectibles(nfts);
            console.log({ erc20Balances, nftBalances });
            setTotalValue(value);

        } catch (err) {
            console.log(err);
            toaster.danger("An error occured!");
        }
    }

    const getAllTransactions = async () => {
        setIsLoadingTrx(true);
        try {
            const res = await getTransactions(account.address);
            setTransactions(res);
            setIsLoadingTrx(false)
        } catch (err) {
            console.log(err);
            setIsLoadingTrx(transactions && false)
        }
    }

    useEffect(() => {
        getBalances();
        getAllTransactions();
    }, [])

    return (
        <AuthNavBar setMainnet={setMainnet}>
            <Box mx={{ base: "30px", lg: "120px" }} mt="100px">
                <Flex w="100%" justifyContent="space-between" display={{ base: "block", lg: "flex" }}>
                    <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w={{ base: "100%", lg: "65%" }} borderRadius="4px" border="1px solid #9C9C9C">
                        <Flex fontWeight="bold" fontSize="25px" alignItems="center" justifyContent="space-between">
                            <Text color={!showBalance && "brand.gray"} onClick={() => setShowBalance(true)} cursor="pointer" bg={!showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Balances</Text>
                            <Text color={showBalance && "brand.gray"} onClick={() => setShowBalance(false)} cursor="pointer" bg={showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Collectibles</Text>
                        </Flex>
                        <Box mt="60px" mb="20px">
                            {showBalance ?
                                <Balances
                                    balances={balances}
                                    totalValue={totalValue}
                                    handleSendMoney={handleSendMoney}
                                    handleReceiveMoney={handleReceiveMoney}
                                /> :
                                <Collectibles address={account.address} collectibles={collectibles} showMarketPlace={showMarketPlace} />}
                        </Box>
                    </Box>
                    <Box w={{ base: "100%", lg: "30%" }} mt={{ base: "20px", lg: 0 }}>
                        <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w="100%" borderRadius="4px" border="1px solid #9C9C9C" p="20px">
                            <Text fontSize="25px" fontWeight="bold">Recent Activities</Text>

                            {isLoadingTrx ? <Flex justifyContent="center" my="30px"><Spinner /></Flex> :
                                <>
                                    {transactions?.map((transaction) => (
                                        <>
                                            <a href={`https://evm.evmos.${mainnet ? "org" : "dev"}/tx/${transaction.hash}`} target="_blank" rel="noreferrer">
                                                <Flex justifyContent="space-between" mt="20px">
                                                    <Flex alignItems="center">
                                                        <Box ml="20px" fontSize="14px" color="brand.gray">
                                                            <Text fontWeight="bold">Tx: {trim(transaction.hash)}</Text>
                                                            {transaction.from && <Text>from: {trim(transaction.from)}</Text>}
                                                            {transaction.to && <Text>to: {trim(transaction.to)}</Text>}
                                                        </Box>
                                                    </Flex>
                                                    <Text fontWeight="bold">{transaction.value}</Text>
                                                </Flex>
                                                <Divider my="10px" />
                                            </a>
                                        </>
                                    ))}
                                </>
                            }

                            <Box mt="30px">
                                <a href={`https://evm.evmos.${mainnet ? "org" : "dev"}/address/${account.address}`} target="_blank" rel="noreferrer">
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