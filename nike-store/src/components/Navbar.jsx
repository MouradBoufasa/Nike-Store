import {
   MagnifyingGlassIcon,
   HeartIcon,
   ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import setOpenCart from "./app/CartSlice.js";
import React, { useEffect, useState } from "react";

const Navbar = () => {
   const [navState, setNavState] = useState(false);
   const dispatch = useDispatch();
   const onCartToggle = () => {
      dispatch(
         setOpenCart({
            cartState: true,
         })
      );
   };

   const onNavScroll = () => {
      if (window.scrollY > 30) {
         setNavState(true);
      } else {
         setNavState(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", onNavScroll);

      return () => {
         window.removeEventListener("scroll", onNavScroll);
      };
   }, []);
   return (
      <div>
         <header
            className={
               !navState
                  ? "absolute top-7 left-0 right-0 opacity-100 z-50"
                  : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
            }>
            <nav className="flex items-center justify-between nike-container">
               <div className="flex items-center">
                  <img
                     src={logo}
                     alt="logo/img"
                     className={`w-16 h-auto ${
                        navState && "filter brightness-0"
                     }`}
                  />
               </div>
               <ul className="flex items-center justify-center gap-2">
                  <li className="grid items-center">
                     <MagnifyingGlassIcon
                        className={`icon-style ${
                           navState &&
                           "text-slate-900 transition-all duration-300"
                        }`}
                     />
                  </li>
                  <li className="grid items-center">
                     <HeartIcon
                        className={`icon-style ${
                           navState &&
                           "text-slate-900 transition-all duration-300"
                        }`}
                     />
                  </li>
                  <li className="grid items-center">
                     <button
                        type="button"
                        className="border-none active:scale-110 transition-all duration-300 relative"
                        onClick={() => onCartToggle}>
                        <ShoppingBagIcon
                           className={`icon-style ${
                              navState &&
                              "text-slate-900 transition-all duration-300"
                           }`}
                        />
                        <div
                           className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                              navState
                                 ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                 : "bg-slate-100 text-slate-900 shadow-slate-100"
                           }`}>
                           0
                        </div>
                     </button>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
};

export default Navbar;
