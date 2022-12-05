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
  leftIcon,
  rightIcon,
  mr,
  target,
  pos
}) => {
  return (
    <a href={href} target={target}>
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
        mr={mr}
        w={w}
        disabled={disabled}
        mt={mt}
        onClick={onClick}
        isLoading={isLoading}
        fontWeight="light"
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        position={pos}
      >
        {children}
      </Button>
    </a>
  );
};

export default CustomButton;
