import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../component/nav";
import Hero from "../component/hero";
import Header from "../component/header";
import JoinUs from "../component/joinUs";
import Footer from "../component/footer";
import HowTo from "../component/howTo";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Header />
      <HowTo />
      <JoinUs />
      <Footer />
    </>
  );
}
