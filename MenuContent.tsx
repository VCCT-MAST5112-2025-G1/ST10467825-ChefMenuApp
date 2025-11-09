import React, { createContext, useState, ReactNode } from "react";
import { MenuItem } from "./types";

//definiing what the context will hold
type MenuContextType = {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

//creating the context with a defualt value (will be overridden)
export const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  setMenuItems: () => {},
});

//creating a provider to wrap the app
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};
