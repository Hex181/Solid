import { Button } from "@chakra-ui/react";

const CustomButton = ({
  bg,
  color,
  children,
  border,
  hoverBg,
  hoverColor,
  onClick,
  m,
  p,
  w,
  mx,
  disabled,
  href,
  mt,
  isLoading,
  borderRadius,
  onMouseEnter,
  onMouseOut,
  fontSize,
  leftIcon
}) => {
  return (
    <a href={href}>
      <Button
        type="submit"
        background={bg}
        color={color}
        borderRadius={borderRadius || "0.5rem"}
        p={p || "8px 40px"}
        _hover={{ bg: hoverBg, color: hoverColor }}
        border={border}
        style={{ transition: "all 1.2s ease" }}
        fontSize={fontSize || "14px"}
        h="45px"
        mx={mx}
        margin={m}
        w={w}
        disabled={disabled}
        mt={mt}
        onClick={onClick}
        isLoading={isLoading}
        fontWeight="light"
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        leftIcon={leftIcon}
      >
        {children}
      </Button>
    </a>
  );
};

export default CustomButton;