import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';



const Nav = styled.div`

  background: #17151c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  overflowY: "auto";
  display: block;
  position: relative;
  transition: all 0.3s ease;
  justify-content: relative;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  cursor: pointer;
  z-index: 10;
  transform 0.1s;
`;

const SidebarWrap = styled.div`
appBarRoot: {
  display: "flex",
  //flexGrow: 1,
`;



const Sidebar = () => {
  const [sidebar, setSidebar ] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
                  </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>            
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};


export default Sidebar;
