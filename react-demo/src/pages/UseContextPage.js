import React from 'react'
import { Context, UserContext } from "../Context";
export default function UseContextPage() {
  const {themeColor} = React.useContext(Context)
  const {name} = React.useContext(UserContext)
  return (
    <div>
      UseContextPage --- 
      {themeColor}---{name}
    </div>
  )
}
