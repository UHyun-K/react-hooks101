import "./styles.css";
import { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            //존재한다면
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};

export default function App() {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);

    return (
        <div className="App">
            <h1 ref={title}>Hello CodeSandbox</h1>
        </div>
    );
}
/*useEffect componentDidMount 일 때 실행됨.
useEffect return 받은 함수는 componentWillUnMount 때 호출됨
component가 mount되지 않았을 때 eventLinster배치되게하고싶지 않기 때문에*/
