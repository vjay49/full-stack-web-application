import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
            <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="blockhouse logo"
                                width={220}
                                height={80}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar
