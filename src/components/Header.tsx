import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

export default function Header(){
    return (
        <header className="flex justify-between items-center  px-[17px] h-[71px]  rounded-2xl">
            <Logo />
            <div className="flex items-center gap-10">
                <nav className='hidden md:flex'>
                    <ul className="flex gap-5 text-[#2D2E2E]">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Support</Link></li>
                    </ul>
                </nav>
                <Button title="Download App" />
            </div>
        </header>
    )
}