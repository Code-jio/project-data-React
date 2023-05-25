import React, { Suspense, lazy } from "react"
import { Link, Routes, Route } from "react-router-dom"
// import {Button} from "antd"

// const Home = lazy(() => import(/*webpackChunkName: "home"*/"./pages/Home"))
// const About = lazy(() => import(/*webpackChunkName: "about"*/"./pages/About"))
const Login = lazy(() => import(/*webpackChunkName: "login"*/"./pages/Login"))

function App() {
    return <div className="app">
        {/* <Button type="primary">按钮</Button> */}
        {/* <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul> */}

        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                {/* <Route path="/about" element={<About />}></Route> */}
            </Routes>

        </Suspense>


    </div>
}

export default App