import { Box, Divider, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/customButton";
import NavBar from "../../components/NavBar";
import PasswordInput from "../../components/TextInputs/PasswordInput";
import { getAccountDetails, PasswordValidate } from "../../utils.js/helpers";
import { toaster } from "evergreen-ui";
import AccountContext from "../../context/Account";

const CreatePasswordTemp = ({ createWallet }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValidating, setIsPasswordValidating] = useState(false);
  const [isConfirmValidating, setIsConfirmValidating] = useState(false);
  const account = useContext(AccountContext);

  const handleOnChange = (e) => {
    setPassword(e.target.value);
    PasswordValidate(e.target.value, setIsPasswordValidating);
  };
  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    PasswordValidate(e.target.value, setIsConfirmValidating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createWallet(password);
    const details = await getAccountDetails(password);
    Object.assign(account, details);
    toaster.success("Wallet Created Successfully !", { id: "mess", duration: 2 });
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <NavBar>
      <Box w="100%">
        <Box
          w={{ base: "80%", lg: "40%" }}
          mx="auto"
          my="30px"
          p="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
          borderRadius="8px"
        >
          <Text fontSize={{ base: "24px", lg: "40px" }} fontWeight="bold">
            Create your password
          </Text>
          <Divider />
          <Box my="10px" color="brand.gray">
            <Text my="20px">Kindly create your password to proceed.</Text>

            <form onSubmit={handleSubmit}>
              <Box>
                <PasswordInput placeholder="*****************" label="Enter password" value={password} onChange={handleOnChange} errors={password.length > 3 && !isPasswordValidating} />
              </Box>

              <Box mt="30px">
                <PasswordInput placeholder="*****************" label="Re-enter password" value={confirmPassword} onChange={handleOnChangeConfirmPassword} passwordNotMatchErr={password.length >= 6 && confirmPassword.length > 6 && password !== confirmPassword} />
              </Box>

              <CustomButton
                w="100%"
                bg="black"
                border="1px solid black"
                color="white"
                hoverBg="white"
                hoverColor="black"
                testid="on-close"
                mt="40px"
                disabled={!isPasswordValidating || !isConfirmValidating}
              >
                Create Password
              </CustomButton>
            </form>
          </Box>
        </Box>
        <Text color="black" my="20px" mx="20px" textAlign="center" fontSize={{ base: "12px", lg: "14px" }}>
          Note: Ensure to keep it safe and do not share with any one else.
        </Text>
        <Box color="brand.gray" textAlign="center">
          <Text>Already have a wallet ?</Text>
          <a href="/import-wallet">
            <Text as="u" mt="10px" cursor="pointer">
              Import Existing Wallet
            </Text>
          </a>
        </Box>
      </Box>
    </NavBar>
  );
};

export default CreatePasswordTemp;
