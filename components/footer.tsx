import { Codesandbox } from "lucide-react";

export function Footer() {
    return (
        <div className="w-full flex flex-col  items-center h-fit rounded-[60px] bg-[#101011] p-12  min-h-[400px] mb-6">
            <div className="py-10 w-full flex flex-col items-center justify-center z-10 gap-4 text-background/90 mb-8 border-gray-600 border-b">
                <p className="text-xl font-bold tracking-tight text-primary">
                    Start crafting your brand story                </p>
                <h1 className="text-7xl max-w-[80vw] font-bold text-center">
                    PARTNER WITH US TO CREATE A
                    <div className="relative inline-block  align-middle ">
                        <div className="h-20 w-[495px] bg-primary inline-block rounded-2xl mx-4  rotate-[2deg]">
                            <p className="absolute inset-0 flex items-center justify-center rotate-[-2deg] text-[#101011]">COMPELLING</p>
                        </div>
                    </div>

                    NARRATIVE FOR YOUR BRAND

                </h1>

                <p className="mt-4 max-w-lg text-center text-gray-200/80">Let's bring your ideas to life, start collaborating with our creative agnecy and turn your vision into reality.</p>

            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                    <h1 className="text-primary text-2xl font-bold">Agencia</h1>
                    <h1 className="text-background/90 text-lg font-normal">
                        St Andaloussi Res 3, Ouled Teima, Taroudant<br />(+212) 6-17-07-90-38<br />info@agencia.com
                    </h1>

                </div>
                <div className="flex flex-col  items-end justify-center gap-8 h-full">
                    <div className="flex gap-2"> 
                        <div className="flex px-4 py-2 border rounded-full text-background border-gray-600 ">
                            Market research
                        </div>
                        <div className="flex px-4 py-2 border rounded-full text-background border-gray-600 ">
                            Ads production
                        </div>
                        <div className="flex px-4 py-2 border rounded-full text-background border-gray-600 ">
                            Web design
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <p className="text-gray-200/80 text-lg font-light">Privacy & Cookies privacy</p>
                        <p className="text-gray-200/80 text-lg font-light">Agencia @ 2025</p>

                    </div>
                    
                </div>

            </div>
        </div>
    )
}