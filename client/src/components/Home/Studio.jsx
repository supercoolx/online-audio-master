import studio from "assets/img/studio.jpg"

const Studio = () => {
    return (
        <div style={{ backgroundImage: `url(${studio})` }} className="h-screen bg-contain">
            <div className="text-center pt-60 text-6xl font-bold">LANDR <span className="text-teal-400">Studio</span></div>
            <div className="text-center mt-8 text-xl">Create and release more music for one low price with Plugins, Samples,<br />Mastering, Distribution and more— starting at just $12.50/mo.</div>
            <div className="text-center mt-10"><button className="rounded-full bg-[#28A2A2] p-5 font-bold text-black mt-5 text-xl">Get started</button></div>
        </div>
    )
}

export default Studio