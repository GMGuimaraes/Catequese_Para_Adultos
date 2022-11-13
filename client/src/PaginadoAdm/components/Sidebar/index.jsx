import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaRegStickyNote, FaUserAlt, FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <a href="/cadastrar">
          <SidebarItem Icon={IoIosAddCircle} Text="Cadastrar Catequizando" />
        </a>
        <a href="/cadastrarTurma">
          <SidebarItem Icon={IoIosAddCircle} Text="Cadastrar Turma" />
        </a>
        <a href="/cadastrarPadrinho">
          <SidebarItem Icon={AiOutlineUsergroupAdd} Text="Cadastrar Padrinho" />
        </a>
        <a href="/catequizando">
          <SidebarItem Icon={FaUserAlt} Text="Consultar Catequizandos" />
        </a>
        <a href="/turma">
          <SidebarItem Icon={FaUsers} Text="Consultar Turmas" />
        </a>
        <a href="/recados">
          <SidebarItem Icon={FaRegStickyNote} Text="Recados" />
        </a>
        <a href="/">
          <SidebarItem Icon={FiLogOut} Text="Sair" />
        </a>
      </Content>
    </Container>
  );
};

export default Sidebar;
