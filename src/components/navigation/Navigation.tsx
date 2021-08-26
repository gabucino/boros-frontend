import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Backdrop from '../UI/Backdrop'

export interface NavigationProps {}

const Navigation: React.SFC<NavigationProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const closeSidebar = () => {
    setSidebarOpen(false)
  }



  const items = [
    { name: 'home', label: 'Home' },
    {
      name: 'shop',
      label: 'Shop',
      items: [
        { name: 'bottles', label: 'Bottles' },
        { name: 'food', label: 'food' },
      ],
    },
    {
      name: 'news',
      label: "What's new?",
      items: [
        { name: 'promotions', label: 'Promotions' },
        { name: 'packages', label: 'Packages' },
      ],
    },
  ]

  return (
    <div>
      <Sidebar items={items} show={sidebarOpen} />
      {sidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
      <Header toggleSidebar={() => setSidebarOpen(true)} />
    </div>
  )
}

export default Navigation
