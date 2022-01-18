import { ChakraProvider } from "@chakra-ui/react";
import { SanityProvider } from "./SanityContext";
import Page from "./Recipe/Page";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <SanityProvider>
          <Page />
        </SanityProvider>
      </ChakraProvider>
    </div>
  );
};

export default App;
