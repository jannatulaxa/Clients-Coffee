import { useLoaderData } from "react-router-dom";
import Services from "../Components/Services/Services";
import Gallery from "../Components/Gallery/Gallery";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            
            <Services data={data}></Services>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;