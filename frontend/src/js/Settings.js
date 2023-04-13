import Navigation from "./Nav";
import  '../css/settings.css';



function Settings(){
    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <h1>Settings</h1>
                <button>change password</button>
                <button>change email</button>
                <button>delete account</button>

            </main>
        </div>
    );
}

export default Settings