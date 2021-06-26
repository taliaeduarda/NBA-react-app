import React, { useState } from "react";
import "./layout.css";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer'

export default function Layout(props) {

  const [sidebar, setSidebar] = useState(false);

  function openSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <>
      <Header
        showNav={sidebar}
        onHideNav={openSidebar}
      />
      {props.children}
     <Footer/>
    </>
  );
}
