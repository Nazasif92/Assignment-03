import Image from "next/image"
import apple from "../../../assets/Apple.png"
import microsoft from "../../../assets/Microsoft.png"
import slack from "../../../assets/Slack.png"
import google from "../../../assets/Google.png"
export default function Sponsors(){
    return(
        <div className="w-[1922px] h-[538px] py-[140px] px-[220px] gap-[100px]">
            <div className="w-[1482px] h-[87px]">
                <h1 className="font-inter font-bold text-7xl leading-[87.14px] tracking-[0.02em] text-[#212529] text-center">Our sponsors</h1>
            </div>
            <div className="flex w-[1482px] h-[71px]  justify-between mt-24">
                <div className="w-[55.47px] h-[68px] gap-1"><Image src={apple} alt="apple"/></div>
                <div className="w-[287px] h-[62px] gap-1"><Image src={microsoft} alt="microsoft"/></div>
                <div className="w-[280px] h-[71px] gap-1"><Image src={slack} alt="slack"/></div>
                <div className="w-[211px] h-[69.81px] gap-1"><Image src={google} alt="google"/></div>
            </div>
        </div>
    )
}