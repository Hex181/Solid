import { Box, Text, Divider } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import PasswordInput from "../../components/TextInputs/PasswordInput";
import { PasswordValidate } from "../../utils.js/helpers";

const LoginTemp = ({ handleLogin, isLoading }) => {
    const [password, setPassword] = useState('');
    const [isValidating, setIsValidating] = useState(false);

    const handleOnChange = (e) => {
        setPassword(e.target.value);
        PasswordValidate(e.target.value, setIsValidating);
    };
    return (
        <NavBar noButton>
            <Box w="100%" pt="100px">
                <Box
                    w={{ base: "80%", lg: "40%" }}
                    mx="auto"
                    my="30px"
                    p="20px"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
                    borderRadius="8px"
                >
                    <Text fontSize={{ base: "25px", lg: "40px" }} fontWeight="bold">
                        Login with Password
                    </Text>
                    <Divider />
                    <Box my="10px" color="brand.gray">
                        <Text my="20px">
                            Kindly input your password here!
                        </Text>
                        <PasswordInput placeholder="***********" value={password} onChange={handleOnChange} errors={password.length > 3 && !isValidating} />

                        <CustomButton
                            w="100%"
                            bg="black"
                            border="1px solid black"
                            color="white"
                            hoverBg="white"
                            hoverColor="black"
                            testid="on-close"
                            mt="20px"
                            disabled={!isValidating}
                            isLoading={isLoading}
                            // href="/wallet"
                            onClick={() => handleLogin(password)}
                        >
                            Log In
                        </CustomButton>
                        <Text textAlign="center" mt='20px' fontSize={{ base: "12px", lg: "16px" }}>Forgot your password ? <a href="/recover-seed-phrase"><Text as="u">Import existing wallet</Text></a></Text>
                    </Box>
                </Box>
                <Box color="brand.gray" textAlign="center" my="20px">
                    <Text>Don't have a wallet ?</Text>
                    <a href="/create-wallet">
                        <Text as="u" mt="10px" cursor="pointer">
                            Create a new Wallet
                        </Text>
                    </a>
                </Box>
            </Box>
        </NavBar>
    )
};

export default LoginTemp;