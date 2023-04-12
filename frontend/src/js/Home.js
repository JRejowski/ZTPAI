import Navigation from "./Nav";
import  '../css/home.css'


function Home(){
    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <div className="search-bar">
                        <input placeholder="search supplements"/>
                </div>
                <section className="supplements">

                </section>
            </main>
        </div>
    );
}

export default Home