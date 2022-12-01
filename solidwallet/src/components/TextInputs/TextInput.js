import { Box, FormLabel, Input, Text } from "@chakra-ui/react";

const TextInput = ({ placeholder, type, label, defaultValue, border, borderColor, color, isReadOnly, onChange, value, minLength, maxLength, error }) => {
  return (
    <Box>
      <FormLabel color="brand.dark" fontSize="14px" fontWeight="300" mt="20px">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        border={border}
        h="48px"
        borderColor={borderColor}
        focusBorderColor="#0368FF"
        _focus={{ border: "0.1px solid #0368FF" }}
        color={color}
        isReadOnly={isReadOnly}
        fontSize="14px"
        onChange={onChange}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
      />
      {error &&
        <Text color="red">{error}</Text>
      }
    </Box>
  );
};

export default TextInput;
