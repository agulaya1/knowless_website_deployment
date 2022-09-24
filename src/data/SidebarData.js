import * as AiIcons from "react-icons/ai";
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'sidebar-text'
  },
  {
    title: 'about',
    path: '/about',
    icon: <AiIcons.AiOutlineQuestion/>,
    cName: 'sidebar-text'
  },
  {
    title: 'contact',
    path: '/contact',
    icon: <GrIcons.GrContact />,
    cName: 'sidebar-text'
  },
]