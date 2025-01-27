import { Codesandbox, MoveRight } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {

    return (
        <div className="w-full flex justify-between items-center h-20 border-b-2 border-x-2 px-8 ">
            <div className="flex gap-x-6 font-normal w-full">
                <h1>How it works</h1>
                <h1>Services</h1>
                <h1>Clients</h1>
            </div>
            <div className="w-full flex items-center justify-center font-extrabold text-xl">
            <Codesandbox  className="text-foreground h-14 w-14" />
            </div>
            <div className="w-full flex items-center justify-end gap-8">
                <h1 className="font-normal ">FAQ</h1>
                <Button variant="outline" className="rounded-full px-6 py-6 pr-5 flex  shadow-none border-primary border-2">
                   <h1 className="font-bold">Get started</h1> 

                    <MoveRight className="text-secondary"/>
                </Button>

            </div>
        </div>
    )
}