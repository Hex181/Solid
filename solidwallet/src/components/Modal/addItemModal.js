import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import TextInput from "../TextInputs/TextInput";

const AddItemModal = ({ isOpen, onClose, header, handleProceed, children }) => {
  const [itemNumber, setItemNumber] = useState('');
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <TextInput
                label="How many items do you want to add"
                placeholder="Enter product name"
                type="number"
                onChange={(e) => setItemNumber(e.target.value)}
                value={itemNumber}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bgColor="brand.teal"
              color="brand.white"
              onClick={handleProceed}
            >
              Add Item
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddItemModal;
