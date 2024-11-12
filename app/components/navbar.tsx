import Image from "next/image"
import logo from "../../../assets/Logo.png"
export default function Navbar(){
    return(
    
        <div className="w-[1920px] h-[92px] bg-[#043873] px-[220px] py-4 flex justify-between">
            <div className="w-[191px] h-[34px]">
                 <Image src={logo} alt="logo"/> 
            </div>
            <div className=" w-[737.5px] h-[60px] flex gap-[60px]">
                <ul className="flex text-[#FFFFFF] w-[549px] h-[23px]font-dm_sans font-medium text-lg leading-[23px] gap-8 relative top-3">
                    <li className="w-[78px] ">Products</li>
                    <li className="w-[79px] ">Solutions</li>
                    <div className="w-[89px] ">Resources</div>
                    <li className="w-[58px] ">Pricing</li>
                </ul>
                <div className="flex w-[126px] h-[60px] gap-6">
                    <button className="w-[126px] h-[60px] rounded-lg bg-[#FFE492] px-10 py-4 text-[#043873] font-inter font-medium text-lg leading-[23px] tracking-[0.02em]">Login</button>
                </div>
            </div>
        </div>
    )
}