import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    //https://coolors.co/564e58-006d77-83c5be-f0f8fa-f7b32b-ffe0d6-ef767a-c83e4d-120303
    dgray: "#564E58",
    dteal: "#006D77",
    mteal: "#83C5BE",
    lteal: "#EDF6F9",
    yellow: "#F7B32B",
    lpink: "#FFE0D6",
    mpink: "#EF767A",
    dpink: "#C83E4D",
    black: "#120303",
  },
  textStyles: {
    h1_icon: {
      fontSize: { base: "0px", md: "30px", lg: "40px" },
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h1: {
      fontSize: { base: "14px", md: "30px", lg: "40px" },
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: { base: "10px", md: "20px", lg: "30px" },
      fontWeight: "semibold",
      lineHeight: "100%",
      letterSpacing: "-1%",
      textColor: "dteal",
    },
    h3: {
      fontWeight: "semibold",
      lineHeight: "80%",
      textColor: "mpink",
    },
    body_list: {
      fontSize: { base: "8px", sm: "8px", lg: "14px" },
      lineHeight: "150%",
      textColor: "black",
    },
    body: {
      fontSize: { base: "8px", sm: "8px", lg: "14px" },
      textColor: "black",
    },
  },
  shadows: {
    pink: "3px 3px 0px 1px #FFE0D6",
    teal: "3px 3px 0px 1px #83C5BE",
    yellow: "3px 3px 0px 1px #F7B32B",
  },
  layerStyles: {
    pinkShadow: {
      bg: "transparent",
      border: "2px solid #83C5BE",
      boxShadow: "pink",
    },
    blueShadow: {
      bg: "transparent",
      border: "2px solid #006D77",
      boxShadow: "teal",
    },
  },
  components: {},
});
