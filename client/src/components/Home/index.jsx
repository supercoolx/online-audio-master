import Header from "components/Header"
import Video from "components/Home/Video"
import GetStart from "./GetStart"
import Intro from "./Intro"
import Studio from "./Studio"
import Tips from "components/Home/Tips"
import Footer from "components/Footer"

const Home = () => {
    return (
        <>
            <Header />
            <Video />
            <GetStart />
            <Intro />
            <Studio />
			<Tips />
            <Footer />
        </>
    )
}

export default Home