import { ArrowDown, Codesandbox, MoveDown } from "lucide-react";

export function Hero() {
    return (
        <div className="w-full flex flex-col justify-between items-center h-fit border-b-2 border-x-2 px-8 min-h-[400px] relative">

            <div className="absolute top-10 right-8 flex gap-[2px] flex-col items-end ">
                <div className="px-5 py-1 bg-secondary text-background rounded-full text-md font-light">
                    Ouled Teima
                </div>
                <div className="px-5 py-1 bg-secondary text-background rounded-full text-md font-light w-fit">
                    MA
                </div>
            </div>

            <div className=" absolute rounded-b-[500px] rounded-t-[100px] top-16 left-48 h-64 w-56 bg-primary/70 -rotate-12">

            </div>
            <div className="absolute bottom-36 left-8 flex flex-col gap-4 max-w-sm">
                <div className="bg-primary/20 rounded-full overflow-hidden border-primary border-2 w-fit ">
                    <img src="./image.png" className="h-16 w-16 " alt="" />
                </div>
                <p className="text-muted-foreground/70 text-md tracking-tighter font-normal">“ Amplify brands by crafting unique and compelling brand identities that leave a lasting impact. ”</p>
            </div>
            <div className=" absolute bottom-36 right-48  rounded-tr-[500px] rounded-b-[100px] rounded-tl-[100px] h-64 w-56 bg-secondary/70 rotate-12">
            </div>
            <div className="py-40 w-full flex flex-col items-center justify-center z-10 gap-8">
                <p className="text-xl font-medium tracking-tight text-muted-foreground">
                    Crafting Experiences that Inspire:
                </p>
                <h1 className="text-8xl max-w-[63vw] font-bold text-center">
                    Elevate Your Brand
                    <div className="mx-3 inline-block align-middle -mt-4 p-1 rounded-full h-28 w-28 border-4 border-primary">
                        <div className=" bg-secondary h-full w-full  rounded-full flex items-center justify-center ">
                            <Codesandbox className="text-background h-16 w-16" />
                        </div>
                    </div>
                    With Our <div className="relative inline-block  align-middle ">
                        <div className="h-24 w-[406px] bg-primary inline-block rounded-2xl mx-4  rotate-[4deg]">
                            <p className="absolute inset-0 flex items-center justify-center rotate-[-4deg] text-white">Creative</p>
                        </div>
                    </div>
                    Magic
                </h1>



            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-36 flex items-center justify-center gap-2 px-2 py-1 border rounded-full">
                <h1 className="text-muted-foreground">Scroll down</h1>
                <div className="p-1 bg-secondary rounded-full">
                <ArrowDown className="h-4 w-4 text-primary" />
                </div>
               
            </div>
            <div className="h-24 w-full">

</div>


        </div>
    )
}