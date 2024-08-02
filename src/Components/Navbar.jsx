import { Link } from "react-router-dom"
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
    

    const [primary, changer]= useState(false)

    const show = ()=>{
        changer(!primary)
    }
    

  return (
    <>
    <nav className=" h-[60px] w-full bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D] flex justify-center items-center relative">
        <div className="container flex justify-between items-center">
         <Link to="/" ><img className=" w-[200px] h-[50px] ml-3 flex-wrap" src="./public/logo2.png" alt="logo" /></Link>
        <VscThreeBars onClick={show} className=" block text-4xl lg:hidden relative"/>
        {
            primary&&
            <div className="  flex justify-center items-center ">
        <ul className="mt-8 rounded-3xl h-[300px] w-[400px] bg-gradient-to-r from-[#fa0000] via-[#d600c2] to-[#0900ff]  flex flex-col justify-center items-center gap-4 absolute top-[10%]  ">
            <li><Link to="/" className=" text-3xl font-semibold text-[#fff] ">Home</Link></li>
            <li><Link to="/element" className=" text-3xl font-semibold text-[#fff] ">About</Link></li>
            <li><Link to="/work" className=" text-3xl font-semibold text-[#fff] ">Members</Link></li>
            <li><Link to="/gallery" className=" text-3xl font-semibold text-[#fff] ">Gallery</Link></li>
            <li><Link to="/Location" className=" text-3xl font-semibold text-[#fff] ">Products</Link></li>
        </ul>
        
        </div>
        }
        <div className=" hidden lg:block">
            <ul className=" flex justify-center items-center gap-3 mr-8 flex-wrap ">
             <li><Link to="/" className=" text-xl font-semibold text-[#666] flex-wrap">Home</Link></li>
             <li>
             <div className="master">
                <Link to="/element" className=" for-app text-xl font-semibold text-[#666] flex justify-center items-center w-[88px] h-[60px] flex-wrap">About<FaChevronDown className="text-[18px] mt-1"/></Link>
                <div className="for-dis">
                    <ul className=" flex justify-around items-center absolute left-0 right-0 top-[60px] bg-gradient-to-r from-[#565656] via-[#8f8f8f] to-[#ffffff] h-[170px]">
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">About us</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Branches</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Warranty</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Repair and Services</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Order Procedure</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">EMI</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Blog</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Glossary</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Home Delivery</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Return, Refund & Cancelation</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Payment Method</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Contact Us</Link>
                    </li>
                </ul>
                </div>
             </div>
                
             </li>
            <li>
                <div className="master">
                <Link to="/Location" className="for-app text-xl font-semibold text-[#666] flex justify-center items-center w-[100px] h-[60px] flex-wrap">Products<FaChevronDown className="text-[18px] mt-1"/></Link>
                <div className="for-dis">
                    <ul className=" flex justify-around items-center absolute left-0 right-0 top-[60px] bg-gradient-to-r from-[#00ccfa] via-[#0067d6] to-[#0335ff] h-[230px]">
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Laptop</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Monitor</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Tablet</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">PC</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Mouse</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Casing</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Casing Fan</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Cooler</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Ram</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Keyboard</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">SSD</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Printer</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Camera</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Software</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Speaker</Link>
                    </li>
                </ul>
                </div>
                </div>
                </li>
            <li>
            <div className="master">
                <Link to="/work" className=" for-app text-xl font-semibold text-[#666] flex justify-center items-center w-[104px] h-[60px] flex-wrap">Members<FaChevronDown className="text-[18px] mt-1"/></Link>
                <div className="for-dis">
                    <ul className=" flex justify-around items-center absolute left-0 right-0 top-[60px] bg-gradient-to-r from-[#ffadad] via-[#ff6262] to-[#ff2424] h-[250px]">
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Chief Executive Officer</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Chief Financial Officer</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Chief Marketing Officer</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Chief Technology Officer</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Chief Operating Officer</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Sales Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Marketing Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Product Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Finance Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Customer Service Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">IT Manager</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Account Managers</Link>
                    </li>
                    <li className=" flex flex-col">
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">SEO Specialists</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Warehouse Managers</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Maintenance Workers</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Office Managers</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Delivery Drivers</Link>
                        <Link to='#' className=" text-xl font-medium text-[#fff] hover:underline ">Janitors</Link>
                    </li>
                </ul>
                </div>
            </div>
            </li>
            <li><Link to="/gallery" className=" text-xl font-semibold text-[#666] ">Gallery</Link></li>
        </ul>
        </div>
        
        <div className=" flex justify-center items-center gap-2 flex-wrap"><Link to="/Signup" className=" h-[100%] w-[100px] p-2 flex justify-center items-center bg-[#b21f1f] text-xl font-semibold text-[#fff] rounded-full">Sign Up</Link>
         <Link to="/Login" className="  h-[100%] w-[100px] p-2 flex justify-center items-center bg-[#ec38bc] text-xl font-semibold text-[#fff] rounded-full mr-2 ">Login</Link>
         </div>
     </div>   
        
    </nav>
    
    </>
  )
  
}

export default Navbar