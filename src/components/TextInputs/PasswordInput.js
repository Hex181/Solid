import React, { forwardRef, useState } from 'react';
import {
  FormControl, FormLabel, Input, Box, InputGroup, Text, InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const PasswordInput = forwardRef(
  (
    {
      width,
      margin,
      type,
      placeholder,
      label,
      padding,
      height,
      name,
      value,
      id,
      hideIcon,
      onChange,
      mt,
      mb,
      testid,
      errors,
      onBlur,
      passwordNotMatchErr,
      ...rest
    },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(() => !show);

    return (
      <Box position="relative" _focusWithin={{ border: '#0683FF' }}>
        <FormControl>
          <FormLabel
            color="#4D4D4D"
            fontSize="14px"
            fontWeight="500"
            key={id}
            id={id}
          >
            {label}
          </FormLabel>
          <div style={{ maxWidth: '388px' }}>
            {errors && (
            <Text color="#E24D4D" fontSize="14px" style={{ transition: "all 1.2s ease" }}>
              Password must contain at least 6 characters, 1 special character, 1 Capital letter and 1 letter
            </Text>
            ) }
          </div>

          <div style={{ maxWidth: '388px' }}>
            {passwordNotMatchErr && (
            <Text color="#E24D4D" fontSize="14px" style={{ transition: "all 1.2s ease" }}>
              Password do not match
            </Text>
            ) }
          </div>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder={placeholder}
              h="48px"
              w={width}
              ref={ref}
              name={name}
              color="#4d4d4d"
              onChange={onChange}
              onBlur={onBlur}
              fontSize="24px"
              fontWeight="500"
              borderRadius="2px"
              bgColor="none"
              border="1px solid #F0F2F5"
              mt={mt}
              style={{ transition: "all 1.2s ease" }}
              mb={mb}
              boxSizing="border-box"
              _focusWithin={{ border: '#F0F2F5' }}
              _placeholder={{
                color: '#F0F2F5', fontSize: '16px', fontWeight: '500',
              }}
              {...rest}
            />
            {!hideIcon && (
            <InputRightElement
              border="transparent"
              onClick={handleShow}
              cursor="pointer"
              bgColor="transparent"
              position="absolute"
              right="6px"
              top="5px"
              data-testid="togglePasswordIcon"
            >
              {show ? (
                <ViewOffIcon boxSize="1.5em" color="#a2adbe" />
              ) : (
                <ViewIcon boxSize="1.5em" color="#a2adbe" />
              )}
            </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </Box>
    );
  },
);
export default PasswordInput;