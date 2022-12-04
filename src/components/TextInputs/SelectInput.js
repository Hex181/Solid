import { Box, FormLabel, Text, Select } from "@chakra-ui/react";

const SelectInput = ({ placeholder, type, label, defaultValue, border, borderColor, color, isReadOnly, onChange, value, minLength, maxLength, error, options }) => {
  return (
    <Box>
      <FormLabel color="brand.dark" fontSize="14px" fontWeight="300" mt="20px">
        {label}
      </FormLabel>
      <Select
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        border={border}
        h="48px"
        borderColor={borderColor}
        focusBorderColor="black"
        _focus={{ border: "0.1px solid black" }}
        color={color}
        isReadOnly={isReadOnly}
        fontSize="16px"
        onChange={onChange}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
      >
        {options?.map((option) => (
            <>
                <option value={option?.address} id={option?.address}>{option?.symbol}</option>
            </>
        ))}
      </Select>
      {error &&
        <Text color="red">{error}</Text>
      }
    </Box>
  );
};

export default SelectInput;
