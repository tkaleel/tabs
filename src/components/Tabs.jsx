import React, {useState} from 'react'

const Tabs = (props) => {
    const [tabString, setTabString] = useState("");

    const handleTab = (tabIndex) => {
        setTabString(props.tabList[tabIndex]);
    }

    return (
        <div>
            {props.tabList.map((text, i) =>
                <button onClick={(e) => { handleTab(i) }} key={i}>Tab {i + 1} </button>
            )}
            {
                tabString ?
                    <p>{tabString}</p> : ""
            }
        </div>
    );
}

export default Tabs;
