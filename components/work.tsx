import { Codesandbox } from "lucide-react";

export function Work() {

    return (
        <div className="border-b-2 border-x-2 min-h-[800px] w-full p-12 flex flex-col gap-y-7 relative overflow-hidden">
            <Codesandbox className="absolute z-0 h-[600px] w-[600px] text-primary/80 -right-36 top-64" />
            <h1 className="text-lg font-bold text-secondary z-1">RECENT WORK</h1>
            <h1 className="max-w-5xl text-4xl font-bold text-foreground/90 tracking-tight">
                Through meticulous planning, seamless execution, and creative problem-solving, we achieved remarkable project success.
            </h1>
            <div className="flex gap-20 z-20 mx-auto mt-10">
                <div className="w-fit flex flex-col gap-12">
                    <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <div className="h-[25vw] w-full max-w-[500px]  rounded-[40px]  overflow-hidden">
                            <img src="work1.png" alt="work1" className="object-cover w-full h-full" />
                        </div>
                        <h1 className="w-full text-secondary font-semibold text-3xl pl-2">Google LLC</h1>
                        <h1 className="w-full text-muted-foreground font-normal text-md pl-2 -mt-2">DesignDigital, WebContent, Computer, Medical</h1>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <div className="h-[25vw] w-full max-w-[500px] rounded-[40px] overflow-hidden">
                            <img src="work1.png" alt="work1" className="object-cover w-full h-full" />
                        </div>
                        <h1 className="w-full text-secondary font-semibold text-3xl pl-2">Apple Inc</h1>
                        <h1 className="w-full text-muted-foreground font-normal text-md pl-2 -mt-2">DesignDigital, WebContent, Computer, Medical</h1>
                    </div>


           
                </div>
                <div className="w-fit flex flex-col gap-12 mt-28">
                    <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <div className="h-fit w-fit relative">
                            <div className="h-[25vw] w-full max-w-[500px] rounded-[40px] overflow-hidden">
                                <img src="work1.png" alt="work1" className="object-cover w-full h-full" />
                            </div>
                            <div className="absolute h-16 w-16 bg-secondary -top-10 right-16"></div>
                        </div>
                        <h1 className="w-full text-secondary font-semibold text-3xl pl-2">Meta LLC</h1>
                        <h1 className="w-full text-muted-foreground font-normal text-md pl-2 -mt-2">DesignDigital, WebContent, Computer, Medical</h1>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <div className="h-[25vw] w-full max-w-[500px]  rounded-[40px] overflow-hidden">
                            <img src="work1.png" alt="work1" className="object-cover w-full h-full" />
                        </div>
                        <h1 className="w-full text-secondary font-semibold text-3xl pl-2">CodeSandBox</h1>
                        <h1 className="w-full text-muted-foreground font-normal text-md pl-2 -mt-2">DesignDigital, WebContent, Computer, Medical</h1>
                    </div>



                </div>

            </div>

        </div>
    )
}