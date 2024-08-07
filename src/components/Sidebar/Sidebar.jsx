import { faBars, faBorderAll, faCreditCard, faGear, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const sidebarOptions = [
  {
    id: 1,
    title: 'HOME',
    path: '/home',
    icon: faHome
  },
  {
    id: 2,
    title: 'MENU',
    path: '/',
    icon: faBars
  },
  {
    id: 3,
    title: 'PAYMENTS',
    path: '/payments',
    icon: faCreditCard
  },
  {
    id: 4,
    title: 'ORDERS',
    path: '/orders',
    icon: faBorderAll
  },
  {
    id: 5,
    title: 'SETTINGS',
    path: '/settings',
    icon: faGear
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [tabs, setTabs] = useState();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeTab = sidebarOptions.find(option => option.path === currentPath);
    if (activeTab) {
      setTabs(activeTab.id);
    }
  }, [location.pathname]);

  const getTabsId = (id) => {
    setTabs(id);
  }

  return (
    <aside className='h-100 p-4 aside_container position-fixed border_secondary'>
      <ul className='d-flex flex-column justify-content-start list-unstyled align-items-center sidebar_gap h-100'>
        {
          sidebarOptions.map(option => (
            <li key={option.id} className='position-relative'>
              <Link to={`${option.path}`} className={`d-flex flex-column justify-content-center align-items-center text-decoration-none gap-3 sidebar_links ${tabs === option.id ? 'btnActive ': ''}`} onClick={() => getTabsId(option.id)}>
                <FontAwesomeIcon icon={option.icon}/>
                <span className={`${tabs === option.id ? 'titleActive': ''}`}>{option.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  );
}
