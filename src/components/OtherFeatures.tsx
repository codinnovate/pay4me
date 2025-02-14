import Image, { StaticImageData } from "next/image"
import Button from "./Button"

export default function OtherFeatures(){
    return (
        <section className='flex flex-col'>
            <div className="flex flex-col md:flex-row">
                <FeatureCard 
                 text='Super fast tuition and school fees payments'
                 desc='Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.' 
                 image='/partners/schools.png' 
                 className='w-full md:w-1/2'
                 btnText='Pay School fees'

                 />
                 <FeatureCard 
                 text='Access Student Loans with Ease' 
                 desc='Easily apply for student loans to fund your education, whether you&apos;re studying locally or abroad. Our platform connects you with trusted loan providers, offering flexible terms and competitive rates'
                 image='/partners/studentloan.png' 
                 className='w-full md:w-1/2'
                 btnText='Apply for a loan'
                 />
            </div>
            <div className="flex flex-col md:flex-row">
                <FeatureCard 
                 image='/partners/sevis.png' 
                 className='w-full md:w-1/2'
                 />
                 <FeatureCard 
                 text='Pay for SEVIS, WES, Visa, Applications & More' 
                 desc='We help you achieve your study abroad and relocation goals by completing payment orders for evaluations, immigration, and visas.'
                 className='w-full md:w-1/2'
                 btnText='Make Your Payments'
                 />
            </div>

        </section>
    )
}



interface IFeature{
    text?: string,
    image?: StaticImageData,
    className: string,
    btnText?: string,
    desc?: string
 
}
function FeatureCard({text, image, desc, className, btnText}:IFeature){
    return (
        <div className="w-full h-[592px] flex flex-col justify-between">
        {image && 
         <Image src={image}  alt='images' height={317} width={1000} className="w-full h-[317px]"/>
        }
        {text && 
        <div className="p-8 flex flex-col">
         <h2 className="text-2xl md:text-3xl font-bold">{text}</h2>
         <p className="text-base font-medium mt-4 mb-[40px] text-[#606060]">{desc}</p>
         <Button title={btnText} />
        </div>
        }

        </div>
    )
}