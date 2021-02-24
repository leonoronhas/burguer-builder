import React from "react";

import Layout from "./components/layout/Layout";
import "./App.css";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </>
  );
}

export default App;
