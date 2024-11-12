import Image from "next/image"
import hero from "../../../assets/hero.jpg"
export default function Hero(){
    return(
        <div className=" flex w-[1920px] h-[829px] px-[220px] py-[140px] bg-[#043873] ">
            <div className="w-[656px] h-[361px]  gap-[60px] text-[#FFFFFF] my-[100px] ">
                <div className=" w-[656px] h-[238px] gap-6  ">
                    <h2 className="h-[154px] w-[656px] font-inter font-bold leading-[77.45px] tracking-[-0.02em] text-[64px] pr-10">Get More Done with whitepace</h2>
                    <p className="h-[60px] w-[656px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] mt-6 pr-10">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>
                <div className="w-[219px] h-[63px] rounded-lg gap-[10px] bg-[#459CF9] p-5 mt-14">
                    <button className="font-inter font-medium text-lg leading-[23px] tracking-[-0.02em]">Try Whitepace free &rarr; </button>
                </div>
            </div>
            <div className="w-[824px] h-[549px] gap-1 ">
                <Image src={hero} alt="hero"/>
            </div>
        </div>
    );
}   