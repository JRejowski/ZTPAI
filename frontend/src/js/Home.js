import Navigation from "../components/Nav";
import SearchBar from "../components/SearchBar";

import  '../css/home.css'

function Home(){
    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <SearchBar/>
                <section className="supplements">

                </section>
            </main>
        </div>
    );
}

export default Home