import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  background-color:#010A10
  
  ;
  transition: background-color .5s;
}
  text-decoration: none;
  font-size: 18px;
  .sidebar {
    animation-name:rotate_sidebar; 
    animation-duration: 2s
  
`;

const SidebarLabel = styled.span`
  margin-left: 25px;
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height:90px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size:18px;
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            
          );
        })}
    </>
  );
};

export default SubMenu;
