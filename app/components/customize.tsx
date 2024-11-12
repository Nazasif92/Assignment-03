import Image from "next/image"
import customize from "../../../assets/hero.jpg"
export default function Customize(){
    return(
        <div className="flex w-[1921px] h-[759px] py-[140px] px-[220px] gap-[98px] bg-[#043873] text-[#FFFFFF]">
            <div className="w-[697px] h-[294px] gap-[60px] my-32">
                <div className="w-[697px] h-[171px] gap-6">
                    <h1 className="w-[697px] h-[87px] font-inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Use as Extension</h1>
                    <p className="w-[697px] h-[60px] font-inter font-normal text-lg leading-[30px] tracking-[-0.02em] mt-5 ">Use the web clipper extension, available on Chrome and Firefox, to save web pages<br/>or take screenshots as notes.</p>
                </div>
                <div className="w-[171px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] mt-14">
                    <button className="w-[67px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-0.02em] text-nowrap ">Let’s Go &rarr;</button>
                </div>
            </div>
            <div className="flex w-[686px] h-[479px] gap-1 my-10">
                <Image src={customize} alt="customize"/>
            </div>
        </div>
    )
}