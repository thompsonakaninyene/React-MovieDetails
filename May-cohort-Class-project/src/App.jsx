import Register from "./component/Auth/register"
import Login from "./component/Auth/login"
// import FullPage from "./component/main-component/FullPage"
import Gallary from "./component/main-component/Gallary";
import { Route, Routes } from "react-router-dom";
import SubFull from "./component/main-component/SubFull";
import WatchList from "./component/main-component/WatchList";
import DiscoverMovies from "./component/main-component/DiscoverMovies";
import Profile from "./component/main-component/Profile";
import Back from "./component/main-component/Back";
import FullPage from "./component/main-component/FullPage";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
function App() {


  return (
     <Routes>
      {/* <Register /> */}
       {/* <Login /> */}
       {/* <FullPage /> */}
       
       
       <Route path="/" element={<SubFull />} />
       <Route path="/loginPath" element={<Login />} />
       <Route path="/RegisterPath" element={<Register />} />
       <Route path="/ProfilePath" element={<Profile/>} />
        
        
        


       <Route element={<ProtectedRoutes />} >
         <Route path="/discoverMovie" element={<DiscoverMovies />} />
         <Route path="/FullPage" element={<FullPage />} />
         <Route path="/movieDetails/:id" element={ <Back />} />
         <Route path="/watchPath" element={<WatchList/>} />
       </Route>
      
       
       <Route path="/" element={<Gallary />} />
       
      
       
    </Routes>
  )
}

export default App
