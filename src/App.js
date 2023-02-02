import { useEffect, useState } from "react";

const useTitle = (initalTitle) => {
    const [title, setTitle] = useState(initalTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

export default function App() {
    const titleUpdate = useTitle("loading..");
    setTimeout(() => titleUpdate("home"), 5000);
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
