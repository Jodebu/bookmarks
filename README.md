# Bookmarks
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## About this project
This is a very simple front-end only app to register bookmarks. It is coded in **Angular 8** with **NgRx** to manage the `state`.

## How to check the project
Three different ways have been provided to evaluate this project:
- Deployed application (recommended)
- Development server
- Build and run

### Deployed application (recommended)
The last version of this app is always deployed [here](https://jodebu.github.io/bookmarks/) thanks to a [GitHub Actions](https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions) automated CI workflow. This is the easiest way to check the project.

### Development server
Check out the repository and run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/` in your browser.

### Build and run
Check out the repository and run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Go there and launch `index.html`.



## Folder structure
```bash
bookmarks
├───.github
│   └───workflows
├───e2e
│   └───src
├───readme-assets
└───src
    ├───app
    │   ├───bookmarks
    │   │   ├───+state
    │   │   ├───add-bookmark-dialog-component
    │   │   ├───bookmarks-component
    │   │   └───services
    │   ├───nav-bar
    │   │   └───nav-bar-component
    │   └───shared
    │       ├───angular-material
    │       ├───expandable-table
    │       │   └───expandable-table-component
    │       └───table
    │           └───table-component
    ├───assets
    └───environments
```

The `app` folder has been structured to make it easy to understand the contents and their role in the application. It contains the **root app** component and module, the **routing** module and three more folders:

### bokmarks
In this folder we have the main component of the app (`bookmarks-component`), the dialog to add new bookmarks (`add-bookmark-dialog-component`), the state management folder for this container (`+state`), the related services simulating an API (`services`) and the module.

### nav-var
Here we can find the navigation bar of the app. It contains the component itself (`nav-bar-component`) and the module.

### shared
Lastly, all components and modules that are likely to be reused if this project were to scale have been placed here, including a dedicated `angular-material` module to keep the rest of the modules import section clean and components for the `expandable-table` to keep the bookmarks grouped and the `table` component used to populate it.

## Usage
The app is very straight forward, once launched you get directly into your bookmarks:

![Alt text](readme-assets/bookmarks-screen.jpg?raw=true "Bookmarks Screen")

From here you can check your current bookmarks by group or create a new one. Clicking the `ADD` button will pop a dialog window to enter the new bookmark:

