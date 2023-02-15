import { useEffect, useState } from "react";
import "./styles.css";

const useNetWork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};

export default function App() {
    const handleNetworkChange = (online) => {
        console.log(online ? "we just went online" : "we are offline");
    };
    const status = useNetWork(handleNetworkChange);
    return (
        <div className="App">
            <h1>{status ? "online" : "offline"}</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
