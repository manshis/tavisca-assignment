import React, { useState, useMemo } from "react";
import Tab, { Navigation } from "./Tab";

import "./Tabs.css";

const tabs = [
  {
    id: 1,
    name: "Flights",
    title: "Flights",
    redirectTo: "/flight"
  },
  {
    id: 2,
    name: "Hotels",
    title: "Hotels",
    redirectTo: "/hotel"
  },
  {
    id: 3,
    name: "Cars",
    title: "Cars",
    redirectTo: "/hotel"
  }
];
function TabsFactory() {
  const [activeTabId, setActiveTab] = useState(tabs[0].id);

  const activeTab = useMemo(() => tabs.find(tab => tab.id === activeTabId), [
    activeTabId
  ]);

  return (
    <div className="tabs">
      <Navigation
        tabs={tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <Tab tab={activeTab} />
    </div>
  );
}

export default TabsFactory;
