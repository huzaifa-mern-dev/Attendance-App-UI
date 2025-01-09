# Attendance App

The **Attendance App** is a mobile application built with React Native and Expo that helps users track student attendance. By default, all students are marked as absent. Users can then mark students as present, and the app allows them to copy the present student's name to the clipboard for easy sharing. Additionally, the app displays the current date, time, and class name, and includes a search option to look up students by their name.

## Features

- **Mark Attendance:** Students are by default marked as absent. The user can manually mark a student as present.
- **Clipboard Sharing:** After marking a student as present, their name is copied to the clipboard, allowing for easy sharing.
- **Search Functionality:** Users can search for students by name.
- **Date & Time Display:** The app displays the current date and time of the attendance marking.
- **Class Name Display:** The app shows the class name for the current attendance session.

## Requirements

- Expo SDK
- React Native
- Node.js
- npm or yarn
- Android Studio or Xcode for building the app on Android/iOS

## Installation

Follow these steps to get the Attendance App up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/attendance-app.git
   cd attendance-app
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the app:**

   To run the app on an Android emulator or device:
   ```bash
   npm start
   ```

   To run the app on an iOS simulator or device:
   ```bash
   npm run ios
   ```

   Alternatively, use `expo start` for running the app through Expo.

## Usage

1. Open the app and you will be presented with a list of students, each marked as "Absent" by default.
2. Tap on a student's name to mark them as **Present**. The student will be updated to **Present** on the list.
3. Once a student is marked as present, their name will automatically be copied to your clipboard.
4. You can then share the name with others by pasting it anywhere (e.g., in a message or email).
5. The app displays the **current date and time** of the attendance marking session at the top of the screen.
6. The **class name** will be displayed on the screen, indicating the class the attendance is being marked for.
7. Use the **search bar** to search for students by their name.

## File Structure

Here is the file structure for the **Attendance App**:

```
attendance-app/
    ├── app.json                    # App configuration for React Native
    ├── eas.json                    # Expo Application Services configuration
    ├── assets/                     # Static assets (images, fonts, etc.)
    ├── components/                 # Reusable components
    │   ├── styles.js               # Styles for components
    │   ├── studentsData.js         # Sample data or functions related to student data
    │   └── AttendanceApp.js        # Main component for handling attendance logic
    ├── App.js                      # Entry point of the app
    ├── package.json                # Project dependencies and scripts
    ├── babel.config.js             # Babel configuration file for React Native
    ├── README.md                   # Project documentation
    └── Attendance App React Js code file.txt  # Additional code or notes related to the app

```

### Key Files:
- **`App.js`**: This is the entry point of the app where the navigation and the main app flow are defined.
- **`HomeScreen.js`**: The main screen where the attendance is marked.
- **`StudentList.js`**: Displays the list of students, each with the option to mark them as present or absent.
- **`SearchBar.js`**: Provides functionality to search for students by name.
- **`Header.js`**: Displays the current date, time, and class name at the top of the screen.
- **`dateHelper.js`**: Utility function to format and display the current date and time.
- **`clipboardHelper.js`**: Utility function to copy a student's name to the clipboard for sharing.
- **`globalStyles.js`**: Defines global styles used across the app, like font sizes, button styles, etc.

## Dependencies

Here are the dependencies used in this project:

```json
"dependencies": {
   "expo": "^52.0.23",
   "expo-clipboard": "~7.0.0",
   "expo-dev-client": "~5.0.7",
   "expo-status-bar": "~2.0.0",
   "npm-check-updates": "^17.1.13",
   "react": "18.3.1",
   "react-native": "0.76.5"
}
```

- **`expo`**: The core Expo framework that provides a set of tools and services to build React Native apps.
- **`expo-status-bar`**: Provides a simple interface for controlling the status bar.
- **`react`**: The core library used for building user interfaces.
- **`react-native`**: The React Native framework to build cross-platform mobile apps.
- **`expo-clipboard`**: A package to handle clipboard operations, used to copy the student's name after marking attendance.
- **`expo-dev-client`**: A tool to build a custom Expo development client for easier testing and debugging.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
