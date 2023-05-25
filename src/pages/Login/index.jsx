import React from 'react'
import login from "./style/login.module.scss"

export default function index() {
    let logo = require("@/assets/logo.png")
  return (
      <div id={login.login}>
          <div className={login.compony}>
            <img src={logo} alt="神星科技" />
            <div className={login.componyName}>北京神星科技有限公司</div>
        <div className={login.componyNameEn}>Beijing MyStar Technology Co。,LTD</div>
        <div className={login.webUrl}>www.mystar.cn</div>
          </div>
    </div>
  )
}
