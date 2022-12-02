import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { copyIcon } from "../../assets/svgs/svg";
import CustomButton from "../CustomButton/customButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {toaster} from "evergreen-ui";

const ReceiveMoneyForm = () => {
  const wallet_addr =
    "c5e06085e92dcac470cc7b8126bcb926dd7d8c5562fbc84022578a2b03e5ff23";
  return (
    <>
      <Box>
        <Box border="1px solid #F0F2F5" w="50%" mx="auto" mb="30px">
          <Image
            src="https://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Photo.png"
            alt="qr-code"
          />
        </Box>

        <Box bg="#FAFAFA" borderRadius="6px" p="20px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            color="brand.gray"
            fontSize="14px"
          >
            <Text>Account ID</Text>
            <CopyToClipboard text={wallet_addr} onCopy={() => toaster.success("Copied to clipborad", { id: "mess" })}>
              <Flex alignItems="center" cursor="pointer">
                <Box>{copyIcon}</Box>
                <Text ml="5px">Copy</Text>
              </Flex>
            </CopyToClipboard>
          </Flex>
          <Box bg="brand.grey" p="10px 20px" mt="10px" borderRadius="6px">
            <Text fontWeight="bold">{wallet_addr}</Text>
          </Box>
        </Box>

        <Flex
            alignItems="center"
            bg="#FAFAFA"
            borderRadius="4px"
            mt="20px"
            justifyContent="space-between"
            p="20px"
          >
            <Text color="brand.gray">Available balance</Text>
            <Text fontWeight="bold">0 SOLID</Text>
          </Flex>
      </Box>
      <CustomButton
        w="100%"
        bg="none"
        border="1px solid black"
        color="black"
        hoverBg="none"
        hoverColor="black"
        testid="on-close"
        mt="20px"
        href="/wallet"
      >
        Go back
      </CustomButton>
    </>
  );
};

export default ReceiveMoneyForm;
