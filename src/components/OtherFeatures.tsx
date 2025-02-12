import Image from "next/image"
import Button from "./Button"

export default function OtherFeatures(){
    return (
        <section>

        </section>
    )
}




function FeatureCard(){
    return (
        <div className="w-full h-[592px] flex flex-col justify-between">
         <Image src={image} />
         <h2 className="text-3xl font-bold">Feature Title</h2>
         <p className="text-lg">Description of the feature</p>
         <Button title={btnText} />
        </div>
    )
}