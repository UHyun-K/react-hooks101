import "./styles.css";
import { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
];

const useTabs = (initialTabs, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTabs);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
export default function useTabsApp() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}
