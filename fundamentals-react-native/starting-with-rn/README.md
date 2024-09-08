# Task Manager

This is a simple task management application built with **React Native** and styled using **Gluestack UI** and **NativeWind**. The app allows users to create, delete, and mark tasks as completed, and it provides real-time tracking of the total number of tasks.

## Features

- **Add Task**: Allows users to create new tasks.
- **Delete Task**: Users can delete tasks from the list.
- **Mark Task as Completed**: Users can toggle tasks between completed and incomplete.
- **Task Counter**: Real-time tracking of the number of tasks created and completed.

## Technologies Used

- **React Native (0.74.5)**: The framework used for building the mobile app.
- **Expo**: A framework and platform for universal React applications.
- **TypeScript (5.3.3)**: Static typing for improved code reliability.
- **Gluestack UI**: A component library used for building and styling the UI.
- **NativeWind**: Tailwind CSS in React Native for utility-first styling.
- **React Navigation**: Manages navigation within the app, including stacks and screens.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-manager
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the app:

    ```bash
    npm run start
    # or
    yarn start
    ```

To run the app on specific platforms:

```bash
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For Web
```

Make sure your React Native development environment is properly set up to run the project on an emulator or a physical device.

## Project Structure

```bash
.
├── src
│   ├── @types
│   │   └── nativewind-env.d.ts       # Type definitions for NativeWind
│   ├── components
│   │   ├── ButtonComponent.tsx       # Reusable button component
│   │   ├── HomeHeader.tsx            # Header for the home screen
│   │   ├── Main.tsx                  # Main logic handling component
│   │   ├── ShowTasks.tsx             # Renders each task in the list
│   │   └── ShowTasksResults.tsx      # Displays task statistics
│   ├── routes
│   │   ├── index.tsx                 # Main navigation logic
│   │   └── app.routes.tsx            # Application route management
│   ├── screens
│   │   └── Home.tsx                  # Main screen where tasks are displayed
├── App.tsx                           # Entry point of the app
├── package.json                      # Project dependencies and scripts
└── README.md                         # Project documentation
```

## Usage

1. Upon launching the app, users can add a new task by entering text into the input field and clicking the **Add** button.
2. Tasks will appear in the list with options to **Mark as Completed** or **Delete**.
3. The header shows the total number of tasks created and completed in real-time.

## Key Libraries and Tools

- **Expo**: Simplifies running and debugging the React Native app across platforms.
- **React Navigation**: Helps manage navigation between different screens.
- **NativeWind**: Tailwind CSS utility-based styling for React Native.
- **Gluestack UI**: Provides UI components and themes.
- **React Native SVG**: Handles rendering of SVG images in the app.
- **Lucide Icons**: Vector icons used in various parts of the app.

## Code Example

Here is an example of how the app handles task management:

```typescript
const [tasks, setTasks] = useState<TaskProps[]>([]);
const [taskInput, setTaskInput] = useState<string>('');
const [completedTaskCount, setCompletedTaskCount] = useState<number>(0);

const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, { title: taskInput, isCompleted: false }]);
    setTaskInput('');
};

const handleToggleTaskCompletion = (taskTitle: string) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.title === taskTitle ? { ...task, isCompleted: !task.isCompleted } : task
        )
    );
    setCompletedTaskCount(prevTasks.filter(task => task.isCompleted).length);
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
