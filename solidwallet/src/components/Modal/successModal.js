import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { successIconGreen, closeModal } from "../../assets/svgs/svg";
import CustomButton from "../CustomButton/customButton";

function SuccessModal({
  isOpen,
  onClose,
  message,
  onClick,
  children,
  handleNoOnclick,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <Box p={{ base: "9px, 10px", lg: "17px 19px" }}>
          <ModalCloseButton _focus={{ boxShadow: "none" }}>
            {closeModal}
          </ModalCloseButton>
        </Box>
        <ModalBody>
          <Box p="0 15px" w="100%" textAlign="center">
            <Box justifyContent="center">{successIconGreen}</Box>
            <Text
              mt="28px"
              mb="12px"
              fontWeight="700"
              fontSize="19px"
              color="brand.dark"
              p="0px 30px"
              textAlign="center"
            >
              {message}
            </Text>
            <Text
              color="#333758"
              fontWeight="400"
              fontSize="16"
              opacity="0.64"
              p="0px 20px"
              textAlign="center"
            >
              {children}
            </Text>
            <Box mt="32px" mb="30px">
              <CustomButton
                width="180px"
                bg="brand.blue"
                color="brand.white"
                onClick={onClick}
                hoverBg="brand.primary"
                hoverColor="brand.white"
                testid="on-close"
                // href="/verification"
              >
                Great !
              </CustomButton>

              <CustomButton
                width="180px"
                bg="white"
                color="brand.blue"
                onClick={handleNoOnclick}
                hoverBg="brand.primary"
                hoverColor="brand.blue"
                testid="on-close"
                href="#"
              >
                Test another product ?
              </CustomButton>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SuccessModal;
