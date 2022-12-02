import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1441px",
});

const colors = {
  brand: {
    blue: "#0368FF",
    lightBlue: "#CDE1FF",
    white: "#FFFFFF",
    lightBlue2: "#ABCDFF",
    lightBlue3: "#81B3FF",
    lightGrey: "#FAF9F7",
    dark: "#011533",
    gray: "#3A3A3ABF",
    grey: "#F0F2F5",
  },
};

const fonts = {
  heading: `'', "Manjari", "Manjari"`,
  body: ` "Manjari", "Manjari"`,
};

const styles = {
  body: {
    fontFamily: "'Manjari', 'Roboto'",
  },
  "::placeholder": {
    color: "#BABABA",
  },
};

const theme = extendTheme({ colors, styles, fonts, breakpoints });

export default theme;
