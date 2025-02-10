import React, { useState } from "react";
import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import play_icon from "../../Assets/play_icon.png";
import pause_icon from "../../Assets/pause_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  // Estado para controlar a visibilidade de todos os elementos
  const [showContent, setShowContent] = useState(true);

  const handlePlayClick = () => {
    setPlayStatus(!playStatus);
    setShowContent(prevState => !prevState); // Alterna entre mostrar e esconder o conteúdo
  };

  return (
    <div className="hero">
      {/* Condicionalmente renderiza o conteúdo */}
      {showContent && (
        <>
          <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
          </div>
          <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
          </div>
          <div className="hero-dot-play">
            <ul className="hero-dots">
              <li
                onClick={() => setHeroCount(0)}
                className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
              ></li>
              <li
                onClick={() => setHeroCount(1)}
                className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
              ></li>
              <li
                onClick={() => setHeroCount(2)}
                className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
              ></li>
            </ul>
          </div>
        </>
      )}
      <div className="hero-play">
        <img
          onClick={handlePlayClick} // Chama a função ao clicar
          src={playStatus ? pause_icon : play_icon}
          alt="play/pause"
        />
        <p>See the video</p>
      </div>
    </div>
  );
};

export default Hero;
