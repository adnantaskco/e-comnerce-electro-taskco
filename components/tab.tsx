import React, { useState } from 'react';
import IphoneCard from './productcard/Mobilecard';
import PcComponent from './productcard/pcandcomponent';
import ApplicaentCard from './productcard/Applicantcart';
// Mock components based on your layout
const SmartPhone = () => <div className="py-4 text-muted-foreground animate-fadeIn">Smartphones Content Layout</div>;
const PComponent = () => <div className="py-4 text-muted-foreground animate-fadeIn">PC & Components Content Layout</div>;
const Appliance = () => <div className="py-4 text-muted-foreground animate-fadeIn">Appliances Content Layout</div>;

const BestsellerTabs = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('appliances');

  // Tab configuration array
  const tabs = [
    { id: 'smartphones', label: 'Smartphones', component: <IphoneCard></IphoneCard> },
    { id: 'pc-components', label: 'PC & Components', component: <PcComponent></PcComponent> },
    { id: 'appliances', label: 'Appliances', component: <ApplicaentCard/> },
  ];

  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4 md:px-16">
        
        {/* Header & Navigation Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/60 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
            Bestsellers in Category
          </h2>
          
          {/* Tab Buttons Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-2 rounded-full font-semibold text-xs md:text-sm select-none transition-all duration-200 active:scale-95
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="w-full">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>

      </div>
    </section>
  );
};

export default BestsellerTabs;