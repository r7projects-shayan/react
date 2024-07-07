import React from "react";
import { Hero } from "./Hero";
import { heroheading } from "../constants";
export const Home = (heading) => {
  return (
    <>
      <Hero heading={heroheading} />
      <div></div>
    </>
  );
};
