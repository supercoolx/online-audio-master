import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const header = useRef(null);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY === 0) {
                header.current.classList.add("absolute", "py-16", "animate-fade-in")
                header.current.classList.remove("fixed", "py-3", "bg-[#0C1B2B]", "animate-move-in")
            }
            if (window.scrollY > 190) {
                header.current.classList.add("fixed", "py-3", "bg-[#0C1B2B]", "animate-move-in")
                header.current.classList.remove("absolute", "py-16", "animate-fade-in")
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div ref={header} className="absolute top-0 w-full py-16 animate-fade-in">
            <div className="container flex items-center justify-between mx-auto">
                <Link to="/">
                    <img src="/logo.png" alt="logo" width={40} />
                </Link>
                <div className="flex items-center gap-5 font-bold">
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Create</div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Collaborate</div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Master</div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Distribute</div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Pricing</div>
                    <Link to="/login" className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">Log In</Link>
                    <Link to="/signup" className="px-4 py-2 text-black bg-white rounded-full">Sign up free</Link>
                </div>
            </div>
        </div>
    )
}

export default Header