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

  return (
    <div>
      {sidebarOpen && <Sidebar show={sidebarOpen}/>}
      {sidebarOpen && <Backdrop closeSidebar={closeSidebar}/>}
      <Header toggleSidebar={() => setSidebarOpen(true)}/>
    </div>
  )
}

export default Navigation
