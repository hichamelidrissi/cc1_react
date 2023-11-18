import React from 'react';
import './welcom.css';
import NavResp from './Nav';

const WelcomePage = (props) => {
  function setLangue(lng){
    switch (lng) {
      case "AR":
        return ["مرحبا بكم في التطبيق الخاص بي", ".اكتشف الميزات واستمتع بتجربتك"];
      case "EN":
        return ["welcome to my app", "Explore the features and enjoy your experience."];

      case "FR":
        return ["Bienvenue sur mon application", "Explorez les fonctionnalités et profitez de votre expérience."];
    }
  }
  return (
    <>
    <NavResp />
    <div className="welcome-container col-12">
      <h1>{setLangue(props.langue)[0]}</h1>
      <p>{setLangue(props.langue)[1]}</p>
    </div>
    </>
  );
};

export default WelcomePage;
