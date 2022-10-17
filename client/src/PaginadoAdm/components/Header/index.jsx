import React, { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;
