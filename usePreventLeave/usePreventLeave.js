const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""; //이거 꼭있어야함
    };
    const enablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
};
export default function App() {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>UnProtect</button>
        </div>
    );
}
