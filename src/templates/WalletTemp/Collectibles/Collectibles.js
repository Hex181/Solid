import { Box, Flex, Image, Text, Divider, SimpleGrid } from "@chakra-ui/react";
import BrandIcon from "../../../assets/icons/logo192.png";
import CustomButton from "../../../components/CustomButton/customButton";
import { priceTagIcon } from "../../../assets/svgs/svg";
import BrandLogo from "../../../assets/icons/logo192.png";
import image from "../../../assets/images/SOLID_WALLET.png";

const nfts = [{
    name: "Solid NFT",
    description: "This NFT is given to early adopters of Solid wallet",
    image: image,
    price: 200
}
]

const Collectibles = ({ address, collectibles, showMarketPlace }) => {
    console.log({ collectibles })
    return (
        <Box bg="brand.grey" py="20px" cursor="pointer" borderRadius="6px" mx="20px" textAlign="center">
            <Image src={BrandIcon} alt="brandLogo" w="30px" mx="auto" />
            <CustomButton
                w="50%"
                bg="black"
                border="1px solid #3A3A3ABF"
                color="white"
                hoverBg="none"
                hoverColor="black"
                testid="on-close"
                m="40px"
                onClick={() => { showMarketPlace() }}
            >
                View market place
            </CustomButton>
            {/*<Box mt="20px" w="100%">
            <Text color="brand.gray" mx="auto" w={{ base: '60%', lg: '100%' }} textAlign="center">Looks like you don't have any collectibles yet.</Text>
            </Box> */}

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="30px" mx="30px">
                {nfts.map((nft) => {
                    return (
                        <Box
                            p="20px"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                            borderRadius="16px"
                        >
                            <Image src={nft.image} borderTopRightRadius="16px" borderTopLeftRadius="16px" objectFit="cover" w="100%" alt="img" />
                            <Flex alignItems="center" mt="20px">
                                <Box ml="20px">
                                    <Text fontWeight="bold" fontSize="20px">
                                        {nft.name}
                                    </Text>
                                </Box>
                            </Flex>
                            <Text my="10px" fontSize="14px" textAlign="left">
                                {nft.description}
                            </Text>
                            <Divider my="10px" />
                            <Flex alignItems="center" justifyContent="space-between">
                                {/* <Flex mt="10px">
                                    <Box mr="5px">{priceTagIcon}</Box>
                                    <Text fontSize="13px" color="black" fontWeight="bold">
                                        {nft.price} EVMOS
                                    </Text>
                                </Flex> */}
                                <Box
                                    bg="brand.grey"
                                    borderRadius="50%"
                                    h="25px"
                                    w="25px"
                                    p="4px"
                                >
                                    <Image src={BrandLogo} alt="logo" w="22px" />
                                </Box>
                            </Flex>
                        </Box>
                    )
                })}
            </SimpleGrid>

        </Box>
    )
};

export default Collectibles;