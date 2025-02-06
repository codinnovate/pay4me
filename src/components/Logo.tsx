import { logo } from "@/assets";
import Image from "next/image";

export default function Logo(){
    return (
        <Image 
        src={logo} 
        className="" 
        alt='payfor me' 
        />
    )
}