import Image from "next/image";
import Button from "./Button";
import { card, makePayCard, p, phone, track } from "@/assets";

export default function Hero(){
    return (
        <section 
        className="bg-[url('/map.svg')] bg-center flex flex-col py-20 gap-12 "
        >
        <div className="flex-col flex gap-4 items-center ">
            <h1 className="text-center font-bold text-4xl md:text-5xl ">Global Payments Made Simple 
            for International Students</h1>
            <p className="text-center font-normal text-xl">A safe, fast, and simple way to pay tuition, fees, and services to schools, businesses, and government agencies worldwide.</p>
            <Button title="Start Your Payment" className=''/>
        </div>
        <div className="flex relative justify-center">
            <div className="hidden   md:flex flex-col">
                <Image 
                src={p} 
                alt="card" 
                />
                <Image 
                 src={track} 
                 alt="card"
                 className="absolute bottom-0" 
                 />
            </div>
            <Image
             src={phone}
             alt="fyn"
             className=""
             />
             <div className="hidden   md:flex flex-col">
                <Image 
                src={makePayCard} 
                alt="card" 
                className=""
                />
                <Image 
                 src={card} 
                 alt="card"
                 className="absolute bottom-0 right-0"  
                 />
            </div>
             
        </div>
            
        </section>
    )
}