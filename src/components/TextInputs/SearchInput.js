import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = ({
  placeholder,
  type,
  label,
  defaultValue,
  border,
  borderColor,
  color,
  isReadOnly,
  onChange,
  value,
  minLength,
  maxLength,
  w,
  error,
}) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          border={border}
          borderColor={borderColor}
          focusBorderColor="#2D81FF"
          _focus={{ border: "0.1px solid #2D81FF" }}
          color={color}
          isReadOnly={isReadOnly}
          fontSize="14px"
          fontWeight="200"
          onChange={onChange}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          width={w}
        />
      </InputGroup>
      {error && <Text color="red">{error}</Text>}
    </Box>
  );
};

export default SearchInput;
