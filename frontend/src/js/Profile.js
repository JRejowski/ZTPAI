import Navigation from "../components/Nav";
import RatedByMe from "../components/RatedByMe";
import ReviewedByMe from "../components/ReviewedByMe";


function Profile(){
    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <h1>ProfileName</h1>
                <RatedByMe/>
                <ReviewedByMe/>
            </main>
        </div>
    );
}

export default Profile