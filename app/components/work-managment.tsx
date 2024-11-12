import Image from "next/image"
import work from "../../../assets/hero.jpg"
import work2 from "../../../assets/work.jpg"
export default function WorkManagment(){
    return(
        <div className="w-[1920px] h-[1588px] px-[220px] py-[140px] gap-[100px]">
            <div className=" flex w-[1480px] h-[547px] gap-[60px]">
                <div className="w-[672px] h-[411px] gap-[60px] my-16">
                    <div className="w-[672px] h-[288px] gap-6">
                        <h1 className="w-[672px] h-[174px] font-inter font-bold text-7xl leading-[87.14px] -tracking-[0.02em] text-[#212529]">Project Management</h1>
                        <p className="w-[672px] h-[90px] font-inter font-normal text-lg leading-[30px] -tracking-[0.02em] text-[#212529] mt-6">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them<br/>to a note.</p>
                    </div>
                    <div className="w-[201px] h-[63px] rounded-md px-10 py-5 gap-[10px] bg-[#4F9CF9] mt-12">
                        <button className="w-[97px] h-[23px] font-inter font-medium text-lg leading-[23px] -tracking-[0.02em] text-[#FFFFFF] text-nowrap">Get Started &rarr;</button>
                    </div>
                </div>
                <div className="flex w-[748px] h-[540px]">
                    <Image src={work} alt="work"/>
                </div>
            </div>
            <div className="flex w-[1480px] h-[661px] gap-[100px]  mt-[100px]">
                <div className="w-[710px] h-[661px] border-[#A7CEFC]">
                    <Image src={work2} alt="work2"/>
                </div>
                <div className="w-[670px] h-[294px] gap-[60px] my-44">
                    <div className="h-[171px] w-[670px] gap-6 text-[#212529]">
                        <h1 className="w-[670px] h-[87px] font-inter font-bold text-7xl leading-[87.14px] -tracking-[0.02em] ">Work together</h1>
                        <p className="w-[670px] h-[60px] mt-6 font-inter font-normal text-lg leading-[30px] -tracking-[0.02em] ">With whitepace, share your notes with your colleagues and collaborate on them.<br/>You can also publish a note to the internet and share the URL with others.</p>
                    </div>
                    <div className="w-[186px] h-[63px] rounded-md px-10 py-5 gap-[10px] bg-[#4F9CF9] mt-14">
                        <button className="w-[82px] h-[23px] font-inter font-medium text-lg leading-[23px] -tracking-[0.02em] text-[#FFFFFF] text-nowrap">Try it now &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}