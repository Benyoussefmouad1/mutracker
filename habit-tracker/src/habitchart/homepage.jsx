import './csschart.css';
import { useNavigate } from "react-router-dom";
import { GiProgression } from "react-icons/gi";

export default function Hompepage() {

  const navigate = useNavigate();

  function navigateToTrack(e) {
    e.preventDefault();
    navigate("/habitform")
  }
  
  return (
    <div className="homepage">

      <section>
        <div className="webname">
          <GiProgression size={40} />
          <p>MUTRACKER</p>
        </div>

        <div className="sectiontexts">
          <p>ORGANISE YOUR LIFE, BECOME THE BEST VERSION OF YOURSELF.</p>
          <p>Start Tracking Your Habits By Defining Them First</p>
        </div>

        <button className="moving-btn" onClick={(e) => { navigateToTrack(e) }}>ENTER HABITS</button>
      </section>

      <article>
        <img src="fb.png" alt="" />
        <img src="twitter.png" alt="" />
        <img src="ig.png" alt="" />
      </article>
    </div>
  )
}
