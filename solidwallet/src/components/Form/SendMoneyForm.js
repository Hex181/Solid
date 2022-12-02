import { Box, Text } from "@chakra-ui/react";
import TextInput from "../TextInputs/TextInput";

const SendMoneyForm = () => {
    return (
        <form>
            <Box mx="auto" textAlign="center">
                <TextInput placeholder="0" fontWeight="bold" focusBorderColor="white" focusColor="white" w="50%" h="80px" border="none" fontSize="60px" textAlign="center" type="number" />
                <Text color="brand.gray">- USD</Text>
            </Box>
        </form>
    )
};

export default SendMoneyForm;