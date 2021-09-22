import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const client = sanityClient({
    projectId: "33hgh7pg",
    dataset: "production",
    apiVersion: "2021-09-22", // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data
  });

  return <div className="App">Hello world</div>;
};

export default App;
