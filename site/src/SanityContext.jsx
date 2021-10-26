import React, { createContext, useState, useContext, useEffect } from "react";
import sanityClient from "@sanity/client";

const initialState = { client: {} };

const SanityContext = createContext(initialState);

export const SanityProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const client = sanityClient({
      projectId: "33hgh7pg",
      dataset: "production",
      apiVersion: "2021-09-22", // uses current UTC date - see "specifying API version"!
      token:
        "skzxVNKl3yIsLZ83VFe4KgxoAkxpVOlOJSaDLhzcKKLhXYNHTdFF7oYcOfoqZ3vlX9fjSxy6dhj0e3wpvXSrfBnFcODSbVxCz5pU1VNXgFA13Zozq2VA3hj9dQfwWJgVKaCkdHM1CojuUIMXLWkDmkmA0iRMxQtyRxFOObFX3ZltPlN3PoMh",
      useCdn: true, // `false` if you want to ensure fresh data
    });

    setState((prevState) => ({ ...prevState, client }));
  }, []);
  return (
    <SanityContext.Provider value={state}>{children}</SanityContext.Provider>
  );
};

export const useSanityContext = () => {
  const context = useContext(SanityContext);

  return context;
};
