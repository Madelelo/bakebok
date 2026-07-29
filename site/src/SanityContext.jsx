import React, { createContext, useState, useContext, useEffect } from "react";
import { createClient } from "@sanity/client";

const initialState = { client: {} };

const SanityContext = createContext(initialState);

export const SanityProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const client = createClient({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2026-04-29",
      useCdn: true,
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
