import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"; 
import sound from "../assets/mp3/b.mp3";
import one from '../assets/photos/1.jpg'
import two from '../assets/photos/2.jpg'
import four from '../assets/photos/4.jpg'
import five from '../assets/photos/5.jpg'
import six from '../assets/photos/6.jpg'
import seven from '../assets/photos/7.jpg'
import eight from '../assets/photos/8.jpg'
import nine from '../assets/photos/9.jpg'
import ten from '../assets/photos/10.jpg'
import eleven from '../assets/photos/11.jpg'
import twl from '../assets/photos/12.jpg'
import thit from '../assets/photos/13.jpg'
import fort from '../assets/photos/14.jpg'
import fift from '../assets/photos/15.jpg'
import sixt from '../assets/photos/16.jpg'
import sevett from '../assets/photos/17.jpg'
const Home = () => {
    const [audio, setAudio] = useState(null);
    const [isPlay, setIsPlay] = useState(false);

    const[popupimg,setPopUpImg] = useState()
    const[work,setWork]=useState(false)


    function working(pic){
        setPopUpImg(pic)
        setWork(true)
    }

    function removing(){
        setWork(false)
    }

    useEffect(() => {
        const aud = new Audio(sound);
        setAudio(aud);

        aud.play()
            .then(() => setIsPlay(true)) 
            .catch((error) => console.log("Autoplay blocked:", error));
        
        return () => aud.pause(); // Cleanup on unmount
    }, []);

    function statement() {
        if (audio) {
            if (isPlay) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlay(!isPlay);
        }
    }
    let img = [one,two,four,five,six,seven,eight,nine,ten,eleven,twl,thit,fort,fift,sixt,sevett]
    return (
        <>
        <div>
            <div className="flex items-center justify-center p-7 text-violet-800 ">
                <div className="flex items-center justify-center font-medium  text-violet-800 ">
                    <h1 className="text-xl">Happy B-day💜Kuttizz </h1>
                </div>
                <button className="bg-violet-50 rounded-3xl px-4 py-2" onClick={statement}>
                    {isPlay ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:border-0 gap-2.5  mx-6 p-2 h-[550px] rounded-lg overflow-y-scroll border-2 border-violet-800">
            {img.map((item)=>(
                    <img onClick={()=>working(item)} className=" cursor-pointer rounded-lg border-2 border-violet-800 h-[286px] w-[154px]  sm:h-[500px] sm:w-[300px] sm:rounded-2xl" src={item} alt="" /> 
            ))}
        </div>
        {work ? <div className="fixed top-0 bg-black/50 h-screen w-full flex items-center justify-center">
            <div className="absolute w-[300px] h-[500px] bg-violet-600 flex z-50  rounded-2xl justify-end">
                <h1 className="absolute px-2 cursor-pointer" onClick={()=>removing()}>X</h1>
                <img src={popupimg} className="w-full h-full rounded-lg" alt="" />
            </div>
        </div> : <div></div>}
        </>
    )
};

export default Home;

