import "./styles.css";
import { useEffect } from "react";
const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

export default function App() {
    const onBefore = () => console.log("plz don't leave");
    useBeforeLeave(onBefore);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
        </div>
    );
}
