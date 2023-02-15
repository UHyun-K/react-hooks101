import "./styles.css";

const useNotificition = (title, option) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, option);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, option);
        }
    };
    return fireNotif;
};

export default function App() {
    const triggerNotif = useNotificition("Hello babies", {
        body: "welcome to uyhun world endless Happniess",
        icon: "https://img.icons8.com/external-gradients-pongsakorn-tan/256/external-animals-autumn-gradients-pongsakorn-tan.png",
    });
    return (
        <div className="App">
            <button onClick={triggerNotif}>Hello CodeSandbox</button>
        </div>
    );
}
///https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon MDN문서
