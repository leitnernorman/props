import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import 'bulma/css/bulma.css';

function App() {
    return (
      <div>
        <section class="hero is-primary">
          <div class="hero-body">
            <p class="title">
            Personal Digital Assistants
            </p>
          </div>
        </section>
        {/* <img src={AlexaImage} /> */}

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-3">
                <ProfileCard 
                  title="Alexa" 
                  handle="@alexa99" 
                  image={AlexaImage}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              </div>
              <div className="column is-3">
                <ProfileCard 
                  title="Cortana" 
                  handle="@cortana32" 
                  image={CortanaImage}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              </div>
              <div className="column is-3">
                <ProfileCard 
                  title="Siri" 
                  handle="@siri01" 
                  image={SiriImage}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}

export default App;
