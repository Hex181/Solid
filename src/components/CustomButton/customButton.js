import { Button } from "@chakra-ui/react";

const CustomButton = ({ bg, color, children, border, hoverBg, hoverColor, onClick, m, p, w, mx, disabled, href, mt, isLoading, borderRadius }) => {
  return (
    <a href={href}>
      <Button type="submit" background={bg} color={color} borderRadius={borderRadius || "0.5rem"} p="8px 40px" _hover={{ bg: hoverBg, color: hoverColor}} border={border} style={{ transition: "all 1.2s ease" }} fontSize="14px" h="45px" mx={mx} margin={m} w={w} padding={p} disabled={disabled} mt={mt} onClick={onClick} isLoading={isLoading} fontWeight="light">
        {children}
      </Button>
    </a>
  );
};

export default CustomButton;
