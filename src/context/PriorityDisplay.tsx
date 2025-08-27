import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the shape of the context value
interface PriorityDisplayContextType {
  priorityDisplay: any; 
  setPriorityDisplay: React.Dispatch<React.SetStateAction<any>>;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define props for the provider
interface PriorityDisplayProviderProps {
  children: ReactNode;
}

const PriorityDisplayContext = createContext<PriorityDisplayContextType | undefined>(undefined);

export const PriorityDisplayProvider: React.FC<PriorityDisplayProviderProps> = ({ children }) => {
  const [priorityDisplay, setPriorityDisplay] = useState<any>(null); 
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
      
  useEffect(() => {
    console.log('PriorityDisplay', priorityDisplay);
  }, [priorityDisplay]);

  const contextValue: PriorityDisplayContextType = {
    priorityDisplay,
    setPriorityDisplay,
    drawerOpen,
    setDrawerOpen
  };

  return (
    <PriorityDisplayContext.Provider value={contextValue}>
      {children}
    </PriorityDisplayContext.Provider>
  );
};

export const usePriorityDisplay = (): PriorityDisplayContextType => {
  const context = useContext(PriorityDisplayContext);
  if (context === undefined) {
    throw new Error('usePriorityDisplay must be used within a PriorityDisplayProvider');
  }
  return context;
};