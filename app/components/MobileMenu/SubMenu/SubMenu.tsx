"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './style.module.scss'
import Menu from './Menu';

const SubMenu = ({setSubMenuActive,setIsActive}:{
  setSubMenuActive:Dispatch<SetStateAction<boolean>>
  setIsActive:Dispatch<SetStateAction<boolean>>
}) => {

  return (

    <div>
      <Menu setSubMenuActive={setSubMenuActive} setIsActive={setIsActive}/>
    </div>

  )
}

export default SubMenu