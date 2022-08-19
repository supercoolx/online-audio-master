const Footer = () => {
    return (
        <div className="container mx-auto px-5 flex gap-3 my-20 font-semibold text-slate-400">
            <div className="flex-1 space-y-3">
                <div className="text-white">Product</div>
                <div>Mastering</div>
                <div>Distribution</div>
                <div>Samples</div>
                <div>Network</div>
                <div>Sessions</div>
                <div>Plugins</div>
                <div>Promotion</div>
                <div>Desktop app</div>
                <div>Mastering API</div>
                <div>Pricing</div>
            </div>
            <div className="flex-1 space-y-3">
                <div className="text-white">LANDR</div>
                <div>About</div>
                <div>Blog</div>
                <div>Help</div>
                <div>Careers</div>
                <div>Affillates</div>
                <div>Press</div>
                <div>Legals</div>
            </div>
            <div className="flex-1 space-y-3">
                <div className="text-white">Resources</div>
                <div>What is Mastering?</div>
                <div>How to Mix Music</div>
                <div>How to Promote Music</div>
                <div>Get Your Music on Spotify</div>
                <div>Get Your Music on Apple Music</div>
                <div>Get Your Music on TikTok</div>
                <div>Get Your Music on Tidal</div>
                <div>Get YouTube Content ID</div>
            </div>
            <div className="flex-1 space-y-3">
                <div className="text-white">Newsletter</div>
                <div className="text-white">Get the ideas, tools and tips you need to grow your sound straight to your inbox.</div>
                <form className="flex">
                    <input type="email" placeholder="Enter your email" className="p-3 border bg-transparent outline-none" />
                    <button type="submit" className="border px-3 bg-white text-black">Subscribe</button>
                </form>
                <div className="text-white">Redeem a product</div>
                <div>Enter a code to redeem a product</div>
            </div>
        </div>
    )
}

export default Footer