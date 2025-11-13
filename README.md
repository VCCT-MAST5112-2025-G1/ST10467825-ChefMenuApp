# Chef Menu App

A menu application that allows users to view the current offerings of the chef.

## Kgomotso Mbele

ST10467825

kgomotsombele@outlook.com

Repository link: [(https://github.com/KgomotsoMbele/ST10467825-ChefMenuApp)]

Module: MAST5112 — Mobile Application Scripting

Part 2 YouTube link: [Video](https://youtu.be/X03iqC-fkDg)

Part 3 YouTube link: 

## Project Overview

The app demonstrates understanding of UI design principles and state management in React Native, with dynamically loaded data.
The application also allows the chef to add and remove items from the menu swiftly and easily.

## Goals

Creating a digital menu application that allows a private chef to showcase daily dishes in an organized and user-friendly way.
Providing a flexible system where the chef can quickly add, view, and manage menu items for each dining experience.
Enhancing the customer experience by displaying the menu clearly, including dish details, categories, and pricing.

## Features

🧱 Dynamic data rendering (data is loaded at runtime)

💾 Temporary state management using React hooks

🎨 Intuitive and responsive UI elements designed for mobile screens

🧭 Navigation between screens

⚙️ Form handling and user interaction

## Changelog

- Version 1.0

  Created the application and initialised it. For some reason, my first project stopped working
  and no longer accepted commands so now I have to start again last minute.
  Just made the bare mininmum application using blank template and committed.

- Version 1.1

  Created the base app structure and started setting up the functional components that will be used.
  Added a `SafeAreaView` and `StatusBar` to make my UI layout more consistent for all devices.
  Ran into some issues regarding my imports but go that sorted by changing to a more updated import
  that supports iOS better as well. I added some foundational TS definitions for type safety and scaling.

- Version 1.2

  Implemented the main functionality for the home screen by adding a fully controlled form that allows the chef to input new menu items dynamically. Set up individual state variables(`useState`) to capture the dish name, description, course, and price. Added logic to validate input fields and store each new item inside an array. Created a `FlatList` to render the list of menu items in real time and display the total number of dishes currently on the menu. Ensured that all the fields reset after submission for better usability.

- Version 1.3

  Added logic to calculate and display item counts by category (Starters, Mains, Desserts) dynamically on the home screen. Implemented `.filter()` based counting for each course type to improve menu visibility for the chef. Updated the layout as well to show category specific stats. Used a dropdown and `picker` to avoid input errors if users don't put in the exact syntax and wording for the course type.

- Version 1.4

  Added dynamic item counts per food category and total price calculation for the menu items. Counts and totals update dynamically as menu items are added, providing the chef with a clear overview of the menu and costs. Updated TypeScript configuration to ensure stricter type checking and better type safety across the app.

- Version 1.5

  Added dedicated screens for each job type to improve navigation and user clarity across the app. Each screen now will handle its own layout and logic whilst maintaining consistent styling with the main interface. Refactored the menu function so it can be global, this will come in handy for the chef's side of things later. Carried out minor UI adjustments to ensure consistent behaviour between the new job screens and the main menu

- Version 1.6

  Refactored the overall structure of the code for imporoved readability and maintainability. Added a centralised `MenuProvider` context to manage menu data globally across screens. Also `HomeScreen` was updated to consume global menu context to prepare the app for the next phase where menu management will move to the dedicated chef screen.

- Version 1.7

   Refactored menu handling to be global by introducing a centralised MenuProvider context and updated HomeScreen to consume this context. Implemented the fully controlled Home form (state, validation) with a FlatList to render menu items in real time and reset fields on submit. Added category counts (Starters, Mains, Desserts) using .filter() and a dropdown/picker to reduce input errors, plus a dynamic total price calculation that updates as items are added. Added dedicated screens for each job type, carried out minor UI adjustments for consistency, and resolved TypeScript/import issues to improve type safety and cross-platform imports.

## Installation and setup

1. Clone this repository:

   `git clone https://github.com/KgomotsoMbele/ST10467825-ChefMenuApp`

2. Navigate to the project repository:

   `cd ST10467825-ChefMenuApp`

3. Install dependencies:

   `npm install`

4. Run the app:

   `npx react-native run-android`

   or for iOS

   `npx react-native run-iOS`

## Device tested

The device used to test and run the app was a Samsung A05s, an android with a resolution of 1080 x 2400 pixels at 6.7 inches. 
Please run/test the app with a device of similar or same sizing.
(Pixel Phone 6, 6a, 7, 7a, 8, 8a, and Medium Phone on Android studio)

## References

1. React Native. 2023. React Native Documentation. [online] Available at: https://reactnative.dev/docs/getting-started
   [Accessed 22 October 2025].

2. TypeScript. 2023. TypeScript Handbook. [online] Available at: https://www.typescriptlang.org/docs/handbook/intro.html
   [Accessed 22 October 2025].

3. Expo. 2023. Using FlatList in React Native. [online] Available at: https://docs.expo.dev/versions/latest/sdk/flatlist/
   [Accessed 22 October 2025].

4. React Native Picker. 2023. React Native Picker Documentation. [online] Available at: https://reactnative.dev/docs/picker
   [Accessed 22 October 2025]
