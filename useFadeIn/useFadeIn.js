import "./styles.css";
import { useRef, useEffect } from "react";

export function useFadeIn(duration = 1, delay = 0) {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity: 0 } };
}

export default function App() {
    const FadeInH1 = useFadeIn(3, 1);
    const FadeInH2 = useFadeIn();

    return (
        <div className="App">
            <h1 {...FadeInH1}>Hello CodeSandbox</h1>
            <h2 {...FadeInH2}>Start editing to see some magic happen!</h2>
        </div>
    );
}
