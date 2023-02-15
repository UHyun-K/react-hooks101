const useConfirm = (message, onConfirm, onCancle) => {
    if (typeof onConfirm !== "function") {
        return;
    } //    if (onConfirm && typeof onConfirm !== "function") 에서 변경  onConfirm 없는 경우 typeof 검사에서 undefined로 필
    if (typeof onCancle !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            try {
                onCancel();
            } catch (error) {
                return;
            }
        } //onCancel() 실행 부분은 onCancel이 필수가 아니라 onCancel이 없는 경우에도 Cancel 누르면 실행 될건데 예외 발생으로 프로그램 터질 겁니다. 그래서 예외처리 넣어서 프로그램 터지는걸 방지했습니다.
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
