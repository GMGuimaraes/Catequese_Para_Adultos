import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaLongArrowAltRight, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'
import { IoIosAddCircle } from "react-icons/io"

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <a href='/cadastrar'>     
        <SidebarItem Icon={IoIosAddCircle} Text="Cadastrar Catequizando" />
        </a> 
        <a href='/cadastrarTurma'>
        <SidebarItem Icon={IoIosAddCircle} Text="Cadastrar Turma" />
        </a>
        <SidebarItem Icon={FaUserAlt} Text="Consultar Catequizandos" />
        <a href="/">
        <SidebarItem Icon={FaLongArrowAltRight} Text="Sair" />
      </a>
      </Content>
    </Container>
  )
}

export default Sidebar