import { Box, FormLabel, Input, Text } from "@chakra-ui/react";

const TextInput = ({ placeholder, type, label, defaultValue, border, borderColor, color, fontSize, isReadOnly, onChange, fontWeight, w, value, minLength, maxLength, error, focusBorderColor, h, textAlign, focusColor }) => {
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
        textAlign={textAlign}
        h={ h || "48px"}
        fontWeight={fontWeight}
        borderColor={borderColor}
        focusBorderColor={focusBorderColor || "black"}
        _focus={{ border: `0.1px solid ${focusColor || 'black'}`}}
        color={color}
        isReadOnly={isReadOnly}
        fontSize={fontSize || "14px"}
        onChange={onChange}
        value={value}
        w={w}
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
