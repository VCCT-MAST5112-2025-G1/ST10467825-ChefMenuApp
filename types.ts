/**Menu Item Type */

export type Course = "Starter" | "Main" | "Dessert";

//defining a typescript type for menu items
export type MenuItem = {
  id: number; //unique id
  name: string;
  description: string;
  course: Course;
  price: number;
};

export type ChefScreenProps = {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export type HomeScreenProps = {
  menuItems: MenuItem[];
};
