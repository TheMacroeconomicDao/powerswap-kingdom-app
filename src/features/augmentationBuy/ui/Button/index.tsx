import Image from "next/image"
import ButtonStones from './assets/buttonStones.svg?url'

export const Button = () => {
    return(
        <button disabled className="min-w-[80px] relative h-[24px] justify-center flex items-center active:opacity-80 bg-[#BFFF6E]">
            <Image src={ButtonStones} style={{position:"absolute", width:"100%", height:"100%"}} alt={"button-stones"}/>
            <span className="z-10 text-black text-lg mt-1">BUY</span> 
        </button>
    )
}