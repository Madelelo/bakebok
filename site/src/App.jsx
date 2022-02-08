import { ChakraProvider } from "@chakra-ui/react";
import { SanityProvider } from "./SanityContext";
import Page from "./Components/Page";
import { theme } from "./Components/Styling/style";

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
