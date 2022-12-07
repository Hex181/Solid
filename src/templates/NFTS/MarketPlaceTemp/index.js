import { Box, Divider, Flex, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { Avatar, toaster } from "evergreen-ui";
import { priceTagIcon } from "../../../assets/svgs/svg";
import CustomButton from "../../../components/CustomButton/customButton";
import AuthNavBar from "../../../components/NavBar/AuthNavBar";
import BrandLogo from "../../../assets/icons/logo192.png";
// import { nftData } from "../../../utils.js/constants";
import ConfirmModal from "../../../components/Modal/confirmModal";
import { useState } from "react";
import image from "../../../assets/images/SOLID_WALLET.png";

const nftData = [
  {
    name: "Tic Tac",
    image_url: "https://gametable.org/res/images/og/tabletop-tic-tac-toe-og-1200x1200.png",
    desc: "Play-to-Earn mobile strategy game on SOLID protocol",
    price: "10EVMOS"
  }, {
    name: "Solid NFT",
    desc: "This NFT is given to early adopters of Solid wallet",
    image_url: image,
    price: 200
  }

]

const MarketPlaceTemp = ({ account, handleCloseMarketPlace }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nftClicked, setNFTClicked] = useState('');
  const [priceClicked, setPriceClicked] = useState('');

  return (
    <AuthNavBar>
      <Box p={{ base: "10px 30px", lg: "20px 40px" }}>
        <Text fontWeight="bold" fontSize={{ base: "20px", lg: "45px" }}>
          NFTs
        </Text>
        <Flex alignItems="center" justifyContent="space-between" display={{ base: 'block', lg: 'flex' }}>
          <Text fontSize={{ base: '14px', lg: '16px' }}>
            NFT collectibles, marketplaces, game projects, utilities building on
            EVMOS.
          </Text>
          <CustomButton
            w="70%"
            bg="none"
            border="1px solid #3A3A3ABF"
            color="brand.gray"
            hoverBg="none"
            hoverColor="black"
            testid="on-close"
            onClick={handleCloseMarketPlace}
            mt={{ base: "10px", lg: '0' }}
          >
            Go to Wallet
          </CustomButton>
        </Flex>
        <Divider my="30px" />

        <Box my="20px" p={{ base: "10px 10px", lg: "20px 40px" }}>
          <SimpleGrid columns={{ base: 1, lg: 4 }} gap="65px">
            {nftData.map((nft) => (
              <Box p="20px" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" borderRadius="16px">
                <Image src={nft.image_url} borderTopRightRadius="16px" borderTopLeftRadius="16px" objectFit="cover" w="100%" alt="img" />
                <Flex alignItems="center" mt="20px">
                  <Box ml="20px">
                    <Text fontWeight="bold" fontSize="20px">
                      {nft.name}
                    </Text>
                  </Box>
                </Flex>
                <Text my="10px" fontSize="14px">{nft.desc}</Text>
                <Divider my="10px" />
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex mt="10px">
                    <Box mr="5px">{priceTagIcon}</Box>
                    <Text fontSize="13px" color="black" fontWeight="bold">{nft.price}</Text>
                  </Flex>
                  <Box bg="brand.grey" borderRadius="50%" h="25px" w="25px" p="4px">
                    <Image src={BrandLogo} alt="logo" w="22px" />
                  </Box>
                </Flex>
                <CustomButton
                  w="100%"
                  bg="black"
                  border="1px solid black"
                  color="white"
                  hoverBg="white"
                  hoverColor="black"
                  testid="on-close"
                  mt="20px"
                  onClick={() => { onOpen(); setNFTClicked(nft.title); setPriceClicked(nft.price) }}
                >
                  Buy Now
                </CustomButton>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

      </Box>
      <ConfirmModal
        header="Confirm NFT Purchase"
        isOpen={isOpen}
        onClose={onClose}
        handleProceed={() => { toaster.notify("Buy here", { id: "mess" }); onClose(); }}
        content={`Are you sure you want to purchase ${nftClicked} for ${priceClicked} ?`}
      />
    </AuthNavBar>
  );
};

export default MarketPlaceTemp;
