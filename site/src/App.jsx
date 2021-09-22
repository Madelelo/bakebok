import "./App.css";
import sanityClient from "@sanity/client";
import Recipe from "./Recipe/Recipe";

const App = () => {
  const client = sanityClient({
    projectId: "33hgh7pg",
    dataset: "production",
    apiVersion: "2021-09-22", // use current UTC date - see "specifying API version"!
    token:
      "skzxVNKl3yIsLZ83VFe4KgxoAkxpVOlOJSaDLhzcKKLhXYNHTdFF7oYcOfoqZ3vlX9fjSxy6dhj0e3wpvXSrfBnFcODSbVxCz5pU1VNXgFA13Zozq2VA3hj9dQfwWJgVKaCkdHM1CojuUIMXLWkDmkmA0iRMxQtyRxFOObFX3ZltPlN3PoMh",
    useCdn: true, // `false` if you want to ensure fresh data
  });

  const query = '*[_type == "recipe"] {_id, name,ingredients->}';

  client
    .fetch(query)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="App">
      <Recipe />
    </div>
  );
};

export default App;
