import "./styles.css";
import { useRef } from "react";

const useFullScreen = (callBack) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callBack && typeof callBack === "function") {
            callBack(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullScreen) {
                element.current.webkitRequestFullScreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.mozExitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

export default function App() {
    const onFulls = (isFull) => {
        console.log(isFull ? "weare full" : "we are small");
    };

    const { element, triggerFull, exitFull } = useFullScreen(onFulls);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img
                    src="https://i.ibb.co/R6RwNxx/grape.jpg"
                    alt="grape"
                    width="250"
                />
                <button onClick={exitFull}> Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}> Make Fullscreen</button>
        </div>
    );
}
