import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import Signin from "./component/Auth/Signin/Signin";
import Header from "./component/Header/Header";
import Cards from "./component/Cards/Cards";

import "react-toastify/dist/ReactToastify.css";



import Signup from "./component/Auth/Signup/Signup";
import Footer from "./component/Footer /footer";
import NotFoundPage from "./component/NotFound/NotFoundPage";
import HomePage from "./component/HomePage/HomePage";
import CardDetails from "./component/CardDetails/CardDetails";
import AddToFav from "./component/AddToFav/AddToFav";
import Cart from './component/Cart/Cart'
import MyItems from "./component/MyItems/MyItems";

function App() {
  const { isSignin } = useSelector((state) => state.authSlice);
  return (
    <>
      {isSignin ? (
        <>
          <Header />
         
          <ToastContainer />
          <Routes>
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/signin" element={<Signin />}/>
            <Route path="/" element={<Cards />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/card/:id" element={<CardDetails />} />
      
            <Route path="/myItems" element={<MyItems />} />
            <Route path="/favList" element={<AddToFav />} />
           
          </Routes>
          <Footer/>
        </>
      ) : (
        <>
          <Routes>
             <Route path="/" element={<HomePage/>}  />
             <Route path="/signin" element={<Signin />} />
           <Route path="/signup" element={<Signup />} />
          
          </Routes>
        </>
       )}
    </>
  );
}

export default App;
