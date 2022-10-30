//import useState hook to create menu collapse state
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  Sidebar,
  Menu,
  MenuItem
} from "react-pro-sidebar";
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";


const SideBar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
  return (
    <>

        <Sidebar collapsed={menuCollapse}>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />} routerLink={<Link to="/" />}>Home</MenuItem>
              <MenuItem active={true} icon={<FaList />} routerLink={<Link to="/" />}>Lists</MenuItem>
              <MenuItem active={true} icon={<RiPencilLine />} routerLink={<Link to="/" />}>Notifications</MenuItem>
             </Menu>
        </Sidebar>

    </>
  );
};

export default SideBar;