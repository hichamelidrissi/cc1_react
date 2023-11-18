import React, { useState } from 'react';
import './Slides.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import NavResp from './Nav';


export default function ImgsSlides() {
    const imgs = [
        {id:1, src:img1},
        {id:2, src:img2},
        {id:3, src:img3},
        {id:4, src:img4},
        {id:5, src:img5}
    ];
    const [idimg, setIdimg] = useState(1);
    function findeImage() {
        for (const val of imgs) {
            if (val.id === idimg) {
                return val.src;
            }
        }
    }
    function moveNext(){
        if(idimg < imgs.length) setIdimg(idimg+1);
        else if(idimg === imgs.length) setIdimg(1);
    }
    function moveBack(){
        if(idimg > 1) setIdimg(idimg-1);
        else if(idimg === 1) setIdimg(imgs.length);
    }
  return (
    <>
    <NavResp />
    <div id="window" style={{backgroundImage:`url(${findeImage()})`}}>
        <div id="conteneur">
            <div id="back"><span className="btn" onClick={moveBack}>&lsaquo;</span></div>
            <div id="next"><span className="btn" onClick={moveNext}>&rsaquo;</span></div>
        </div>
        <div id="imgPosition">
            {imgs.map(
                function (src, index) {
                    let disp = (index+1 === idimg)? 'block':'none';
                    return <div key={src.id} className="daeira"><div style={{display:disp}} className='selected' id={`selected${src.id}`}></div></div>
                }
            )}
        </div>
    </div>
    </>
  )
}
