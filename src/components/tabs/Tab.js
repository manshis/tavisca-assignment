import React from "react";
import { useHistory } from "react-router-dom";

import TabContent from "./TabContent";

function Tab(props) {
  return (
    <div className={`tabs-content`}>
      <TabContent tab={props.tab} />
    </div>
  );
}

export function Navigation(props) {
  const history = useHistory();
  return (
    <ul className={`tabs-nav`}>
      {props.tabs.map(item => (
        <li key={item.id} className={`tabs-item`}>
          <button
            className={`tabs-button ${
              props.activeTabId === item.id ? "active" : ""
            }`}
            onClick={() => {
              props.onNavClick(item.id);
              history.push(item.redirectTo);
            }}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
