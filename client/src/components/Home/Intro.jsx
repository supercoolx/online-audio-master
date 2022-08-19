import video from "assets/video/home.mp4"
import create from "assets/img/create.jpg"
import collaborate from "assets/img/collaborate.jpg"
import master from "assets/img/master.jpg"
import distribute from "assets/img/distribute.jpg"

const Intro = () => {
    return (
        <div className="container mx-auto">
            <div className="text-6xl font-semibold text-center py-60">&ldquo;Take your music from creation to<br />release with LANDR Studio&rdquo;</div>
            <div className="flex justify-center bg-black">
                <video controls className="w-[600px]">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="flex items-center gap-20 mt-40">
                <div className="flex-[3] px-10">
                    <img src={create} alt="create" />
                </div>
                <div className="flex-[2] space-y-5">
                    <div className="text-3xl font-semibold text-teal-400">Create</div>
                    <div className="text-5xl font-bold">Your DAW just got better</div>
                    <div className="">
                        When you're ready to turn your inspiration into creation, LANDR offers a selection of curated samples and exclusive plugins, which easily integrate with your DAW to let you utilize, control and manipulate sounds to bring your musical vision to life.
                    </div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">
                        Learn more about Plugins and Samples
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-20 mt-40">
                <div className="flex-[2] space-y-5">
                    <div className="text-3xl font-semibold text-teal-400">Collaborate</div>
                    <div className="text-5xl font-bold">Kick it up a notch with a team.</div>
                    <div className="">
                        Connect with collaborators in real-time, trade feedback through notes and videos and access a community of pros to help take your track to the next level.
                    </div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">
                        Learn more
                    </div>
                </div>
                <div className="flex-[3] px-10">
                    <img src={collaborate} alt="collaborate" />
                </div>
            </div>
            <div className="flex items-center gap-20 mt-40">
                <div className="flex-[3] px-10">
                    <img src={master} alt="master" />
                </div>
                <div className="flex-[2] space-y-5">
                    <div className="text-3xl font-semibold text-teal-400">Master</div>
                    <div className="text-5xl font-bold">The finishing touch</div>
                    <div className="">
                        Upload a track and let our powerful, AI-driven mastering engine do the rest. Our engine listens to your songs and applies a fast, reliable master without ever using presets. Find out why it's the trusted mastering tool for music industry powerhouses.
                    </div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">
                        Master a track
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-20 mt-40">
                <div className="flex-[2] space-y-5">
                    <div className="text-3xl font-semibold text-teal-400">Distribute</div>
                    <div className="text-5xl font-bold">It's time to be heard</div>
                    <div className="">
                        Release your music to over 150 streaming platforms without interrupting your workflow. Split royalties with collaborators easily and get promotional tips from the LANDR success team to make sure your songs get the streams they deserve.
                    </div>
                    <div className="inline-block font-bold relative after:-bottom-1 after:absolute after:left-0 after:bg-white after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300">
                        Learn more about distribution
                    </div>
                </div>
                <div className="flex-[3] px-10">
                    <img src={distribute} alt="distribute" />
                </div>
            </div>
        </div>
    )
}

export default Intro