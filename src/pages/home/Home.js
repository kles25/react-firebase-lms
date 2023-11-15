import Header from "../../components/header/Header";
import "./home.css"


function Home() {
    return (
        <>
            <div className='background-image-color'>
                <div className="background-gradient">
                    <div className="home-container-fluid">
                        <Header />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
