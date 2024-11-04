import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";


const RoutesApp = ()=> {
    return (
        <>
        <Router>
            <Nav />
                <Routes>
                    <Route path= '/' element={< Home />}/>
                    <Route path= '/myjob' element={< MyJob />}/>
                    <Route path= '/profile' element={< Profile />}/>
                </Routes>
        </Router>
        </>
    )
}

export default RoutesApp