const useConfirm = (message, onConfirm, onCancle) => {
    if (onConfirm && typeof onConfirm !== "function") {
        return;
    }
    if (onCancle && typeof onCancle !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancle();
        }
    };
    return confirmAction;
};
export default function App() {
    const deleteWorld = () => console.log("Delete the world");
    const abort = () => console.log("aborted");
    const confirmDelete = useConfirm("are you sure delete", deleteWorld, abort);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}
