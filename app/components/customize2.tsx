import Image from "next/image"
import Customize from "../../../assets/hero.jpg"
export default function Customize2(){
    return(
        <div className="flex w-[1921px] h-[812.09px] py-[140px] px-[220px] gap-[98px]">
            <div className="flex w-[714px] h-[532.09px] gap-1">
                <Image src={Customize} alt="customize2"/>
            </div>
            <div className="w-[669px] h[411px] gap-[60px] my-14">
                <div className="w-[669px] h-[288px] gap-6 text-[#212529]">
                    <h1 className="w-[669px] h-[174px] font-inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Customise it to your needs</h1>
                    <p className="w-[669px] h-[90px] font-inter font-normal text-lg leading-[30px] tracking-[-0.02em] mt-6 text-nowrap">Customise the app with plugins, custom themes and multiple text editors (Rich<br/>Text or Markdown). Or create your own scripts and plugins using the Extension<br/>API.</p>
                </div>
                <div className="w-[171px] h-[63px] rounded-lg py-5 px-10 bg-[#4F9CF9] gap-[10px] mt-12">
                    <button className="w-[67px] h-[23px] font-inter font-medium text-lg leading-[23px] tracking-[-0.02em] text-[#FFFFFF] text-nowrap">Let’s Go &rarr;</button>
                </div>
            </div>
        </div>
    );
}   