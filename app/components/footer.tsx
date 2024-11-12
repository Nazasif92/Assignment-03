import Image from "next/image"
import logo from "../../../assets/Logo.png"
export default function Footer(){
    return(
        <div className="w-[1920px] h-[461px] px-[220px] pt-[140px] top-[5195px] left-[1px] pb-8 gap-[200px] bg-[#043873] text-[#FFFFFF]">
            <div className="w-[1480px] h-[289px] gap-[100px]">
                <div className="flex w-[1480px] h-[169px] gap-[100px]">
                    <div className="w-[295px] h-[169px] gap-[15px]">
                        <div className="w-[191px] h-[34px]"><Image src={logo} alt="logo"/></div>
                        <div className="w-[240px] h-[120px] mt-4">
                            <p className="font-inter font-normal text-lg leading-[30px] tracking-[-0.02em]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>
                    </div>
                    <div className="w-[295px] h-[127px] gap-[15px]">
                        <div className="w-[68px] h-[22px] font-inter font-bold text-lg leading-[21.78px] tracking-[-0.02em]">Product</div>
                        <div className="w-[70px] h-[20px] font-inter font-normal text-base leading-5 text-[#FFE492] mt-4 tracking-[-0.02em]">Overview</div>
                        <div className="w-[50px] h-[20px] font-inter font-normal text-base leading-5 mt-3 tracking-[-0.02em]">Pricing</div>
                        <div className="w-[177px] h-[20px] font-inter font-normal text-base leading-5 mt-3 tracking-[-0.02em]">Customer stories</div>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                        <div className="w-[91px] h-[22px]  font-inter font-bold text-[18px] leading-[21.78px] tracking-[-0.02em]">Resources</div>
                        <div className="w-[33px] h-[20px]  font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-4">Blog</div>
                        <div className="w-[128px] h-[20px] font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-3">Guides & tutorials</div>
                        <div className="w-[130px] h-[20px] font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-3">Help centre</div>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                        <div className="w-[83px] h-[22px] font-inter font-bold text-base leading-[21.78px] tracking-[-0.02em]">Company</div>
                        <div className="w-[66px] h-[20px] font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-4">About us</div>
                        <div className="w-[62px] h-[20px] font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-3">Careers</div>
                        <div className="w-[99px] h-[20px] font-inter font-normal text-base leading-5 tracking-[-0.02em] mt-3">Media kit</div>
                    </div>
                </div>
                <div className="w-[1480px] h-[289px] mt-[100px]">
                    <div className=" w-[169px] h-[20px] gap-[60px] mx-[655.5px]">
                        <p className="font-inter font-normal text-base leading-5 tracking-[-0.02em]">©2021 Whitepace LLC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}