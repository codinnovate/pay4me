import OtherFeatures from "./OtherFeatures";
import Partner from "./Partner";

export default function Features(){
    return (
        <section className="flex flex-col  w-full overflow-hidden">
            <Partner
             />
             <OtherFeatures />
        </section>
    )
}