import "../../styles/Sidebar.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "../../data/SidebarData.js";
import IconFormat from "../IconFormat";
import resetColor from "../resetState.js";
const Sidebar = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav
          className={
            props.sideMenuStatus ? "sidebar-menu active" : "sidebar-menu"
          }
        >
          <ul className="sidebar-menu-items" onClick={props.setSideMenu}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="sidebar-content">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={resetColor}>
                      <div className="title-icons">{item.icon}</div>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="sidebar-icons">
              <IconFormat />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
