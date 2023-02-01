import { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange }; //{value:value, onchange: onChange}
};
export default function App() {
    const maxLeng = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLeng);
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}
