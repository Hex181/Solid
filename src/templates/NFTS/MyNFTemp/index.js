import AuthNavBar from "../../../components/NavBar/AuthNavBar";
import { Box, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Avatar } from "evergreen-ui";
import { priceTagIcon } from "../../../assets/svgs/svg";
import CustomButton from "../../../components/CustomButton/customButton";
import BrandLogo from "../../../assets/icons/logo192.png";
import { nftData } from "../../../utils.js/constants";

const MyNFTsTemp = () => {
  return (
    <AuthNavBar>
      <Box p={{ base: "10px 30px", lg: "20px 40px" }}>
        <Text fontWeight="bold" fontSize={{ base: "20px", lg: "45px" }}>
          My NFTs
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>
            NFT collectibles, marketplaces, game projects, utilities building on
            NEAR and Aurora.
          </Text>
          <CustomButton
            w="70%"
            bg="none"
            border="1px solid #3A3A3ABF"
            color="brand.gray"
            hoverBg="none"
            hoverColor="black"
            testid="on-close"
            href="/market-place"
          >
            Market place
          </CustomButton>
        </Flex>
        <Divider my="30px" />

        <Box my="20px" p={{ base: "10px 30px", lg: "20px 40px" }}>
          <SimpleGrid columns={{ base: 1, lg: 4 }} gap="65px">
            {nftData?.splice(0, 2).map((nft) => (
              <Box
                p="20px"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                borderRadius="16px"
              >
                <Flex alignItems="center">
                  <Avatar
                    name="Ryan Gig"
                    size="40px"
                    src=""
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
                  />
                  <Box ml="20px">
                    <Text fontWeight="bold" fontSize="20px">
                      {nft.title}
                    </Text>
                    <Text color="brand.gray" fontSize="12px">
                      {nft.subTitle}
                    </Text>
                  </Box>
                </Flex>
                <Text my="10px" fontSize="14px">
                  {nft.desc}
                </Text>
                <Divider my="10px" />
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex mt="10px">
                    <Box mr="5px">{priceTagIcon}</Box>
                    <Text fontSize="13px" color="black" fontWeight="bold">
                      {nft.price}
                    </Text>
                  </Flex>
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
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </AuthNavBar>
  );
};

export default MyNFTsTemp;
