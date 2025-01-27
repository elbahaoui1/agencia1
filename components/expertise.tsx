import { ArrowUpRight, Codesandbox, Divide, MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function Expertise() {
    return (<div className="w-full flex flex-col  items-center h-fit rounded-[60px] bg-[#101011] p-12  min-h-[400px] ">

        <div className="flex justify-between items-center w-full mt-2 pb-6 border-gray-600 border-b">
            <h1 className="font-bold tracking-tighter text-4xl text-background">Our Expertise</h1>
            <h1 className="font-normal tracking-normal text-md text-background/80 max-w-sm">Transform ideas into reality by combining creativity, strategy, and expertise</h1>
        </div>
        <div className="w-full h-fit text-background mt-10 flex gap-3 pb-10 border-b border-gray-600">

            <div className="p-4 flex flex-col bg-gray-400/30 w-full rounded-[40px]">
                <div className="m-2 flex justify-between items-end border-b border-gray-300/30 pb-4">
                    <h1 className="font-bold tracking-tighter text-5xl text-primary">Market Research</h1>
                    <div className="flex items-center justify-center   bg-gray-400/60 rounded-full h-20 w-20 p-4 cursor-pointer hover:bg-primary">
                        <ArrowUpRight className="h-16 w-16" />
                    </div>
                </div>
                <p className="m-2 font-normal text-background/80">
                    Blends consumer behavior and economic trends to confirm and improve business idea
                </p>
                <div className="w-full h-54 bg-white rounded-[30px] mt-2 overflow-hidden">
                    <img src="research.png" className="object-cover " alt="" />
                </div>
            </div>



            <div className="p-4 flex flex-col bg-secondary w-full rounded-[40px]  rounded-bl-[210px] relative">
                <div className="m-2 flex justify-between items-end border-b border-gray-300/30 pb-4">
                    <h1 className="font-normal tracking-tighter text-5xl text-background max-w-[50px]">Ads Production</h1>

                </div>
                <p className="m-2 font-normal text-background/80">
                    Blends consumer behavior and economic trends to confirm and improve business idea
                </p>
                <div className="w-full h-54 bg-white rounded-[30px] rounded-bl-[200px] mt-2 overflow-hidden">
                    <img src="research.png" className="object-cover " alt="" />
                </div>
                <div className="flex items-center justify-center  absolute bottom-0 left-0 bg-primary rounded-full h-28 w-28 p-4 cursor-pointer border-[6px] border-[#101011] ">
                    <ArrowUpRight className="h-16 w-16" />
                </div>
            </div>



            <div className="p-4 flex flex-col bg-gray-400/30 w-full rounded-[40px]">
                <div className="m-2 flex justify-between items-end border-b border-gray-300/30 pb-4">
                    <h1 className="font-bold tracking-tighter text-5xl text-primary">Branding Strategies</h1>
                    <div className="flex items-center justify-center   bg-gray-400/60 rounded-full h-20 w-20 p-4 cursor-pointer hover:bg-primary">
                        <ArrowUpRight className="h-16 w-16" />
                    </div>
                </div>
                <p className="m-2 font-normal text-background/80">
                    Blends consumer behavior and economic trends to confirm and improve business idea
                </p>
                <div className="w-full h-54 bg-white rounded-[30px] mt-2 overflow-hidden">
                    <img src="research.png" className="object-cover " alt="" />
                </div>
            </div>

        </div>
        <div className=" w-full pt-16 flex justify-between relative">
            <div className="w-full h-full  max-w-[840px] relative overflow-hidden">
                <Codesandbox className="h-full w-full absolute top-0 -left-28   text-gray-100/5 z-1" />
                <h1 className="font-bold tracking-tighter text-7xl text-primary text-left z-10">    WE CREATE IMPACTFUL EXPERIENCES FOR OUR CLIENTS' CUSTOMERS EVERY TIME THEY ENGAGE WITH A BRAND</h1>

            </div>
            <div className="h-60 w-60 mt-8 bg-secondary rounded-full flex justify-center items-center text-primary/90">
                <Codesandbox className="h-48 w-48" />
            </div>
            <div className="absolute flex flex-col right-6 bottom-8 justify-end max-w-xl text-right">
                <div className="flex flex-col justify-end">
                    <h1 className="text-background font-bold text-5xl">50<span className="text-secondary -mt-1">+</span></h1>
                    <h1 className="text-primary font-normal text-md">Projects Completed</h1>
                </div>
                <div className="text-background/80 mt-3">
                We take pride in our client success stories, where our creative strategies and execution have played a vital role in achieving their business goals and surpassing expectations.
                </div>
            </div>

        </div>
    </div>
    )
}