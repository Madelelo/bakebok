import { ChakraProvider } from "@chakra-ui/react";
import { SanityProvider } from "./SanityContext";
import Page from "./Components/Page";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    //https://coolors.co/564e58-006d77-83c5be-f0f8fa-f7b32b-ffe0d6-ef767a-c83e4d-120303
    gray: "#564E58",
    dteal: "#006D77",
    mteal: "#83C5BE",
    lteal: "#EDF6F9",
    yellow: "#F7B32B",
    lpink: "#FFE0D6",
    mpink: "#EF767A",
    dpinnk: "#C83E4D",
    black: "#120303",
  },
  shadows: {
    pink: "3px 3px 0px 1px #FFE0D6",
    blue: "3px 3px 0px 1px #83C5BE",
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
      boxShadow: "blue",
    },
  },
  components: {},
});

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <SanityProvider>
          <Page />
        </SanityProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
