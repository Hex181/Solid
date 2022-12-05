import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

const TextInput = ({ placeholder, type, label, defaultValue, border, borderColor, color, fontSize, isReadOnly, onChange, fontWeight, w, value, step, minLength, maxLength, error, focusBorderColor, h, textAlign, focusColor, icon }) => {
  return (
    <Box>
      <FormLabel color="brand.dark" fontSize="14px" fontWeight="300" mt="20px">
        <Flex alignItems="center" justifyContent={icon ? "space-between" : 'left'}>
          {label}
          <Box>{icon}</Box>
        </Flex>
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
        step={step}
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
