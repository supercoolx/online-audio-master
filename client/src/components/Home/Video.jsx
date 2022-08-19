import video from "assets/video/home.mp4"

const Video = () => {
    return (
        <video autoPlay muted loop className="absolute top-0 w-full -z-10">
            <source src={video} type="video/mp4" />
        </video>
    )
}

export default Video