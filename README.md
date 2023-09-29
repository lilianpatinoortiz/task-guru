# Task Guru

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="https://img.shields.io/github/last-commit/lilianpatinoortiz/task-guru" >
<img src="https://img.shields.io/github/languages/top/lilianpatinoortiz/task-guru"  />

### ~ Project 2: Task Guru 📝

## Description

Are you drowning in a sea of tasks and deadlines? Feeling overwhelmed by the chaos of your daily responsibilities? Task Guru is the solution you've been searching for!
Imagine a world where your tasks are effortlessly organized, your projects seamlessly tracked, and your productivity soars. Task Guru empowers you to regain control of your life, both personally and professionally!

This project involves a comprehensive Task Management Application that aims to solve the common challenge of organizing and tracking tasks and projects effectively. It encompasses both front-end and back-end development.

## Motivation for development

There are several motivations for creating a task management application!

- Personal Productivity:

The application can serve as a tool to enhance personal productivity. Many developers and professionals struggle to keep track of tasks and deadlines efficiently.

- Team Collaboration:

If you're working with a team, this project offers an opportunity to collaborate effectively. You'll learn how to manage a development project with your peers, divide tasks, and coordinate efforts.

- Career Readiness:

Creating a Task Guru aligns with the skills and practices commonly sought after by employers. It demonstrates the ability to follow industry-standard development methodologies.

## Table of Contents

- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributions](#contributing)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Documentation

USER STORY

```
As a user, I want to be able to create tasks within the management app so that I can efficiently manage my responsibilities and track the progress.
```

ACCEPTANCE CRITERIA

```
Create Project & Task:

WHEN I open that management app and choose to create a new task and/or projects
THEN I should be prompted to enter a title, description and due date
WHEN I have entered the details and saved the task/project
THEN the newly created task should appear in the task list

Edit Project & Task:

WHEN I choose to edit a project,
THEN I should be able to modify the title, description, and due date
WHEN I make changes and save the project or task status,
THEN the project details should be updated in real-time

Task Priority:

WHEN I create or edit a task,
THEN I should be able to set the task’s priority level ( 1,2,3),
WHEN I set the priority
THEN task will be colored coded per priority.

Red = 1
Orange = 2
Green = 3

```

## Installation

To run the project in your local machine:

1. Open visual studio in your computer or laptop
2. Clone the git project: https://github.com/lilianpatinoortiz/task-guru
3. Pull the latest from the 'main' branch
4. Open a new terminal and type `npm install` to install the dependencies
5. Run the following commands in this order:
6. `mysql -u root -p ` (put your password)
7. > `source db/schema.sql `
8. > `exit`
9. `npm run seed`
10. Locate the server file and locate yourself there
11. Open a new terminal and type `npm start` or `node server`

## Usage

Deployed app: https://still-brushlands-64829-00310e5d25cf.herokuapp.com/homepage

## Testing

Chekoout a GIF of task guru actually working!

![Task-guru](public/img/gif.gif)

## Contributing

If you want to contribute on this project please contact us:

lpatinoortiz (Lilian Patino Ortiz)
Frankieramirez72 (Francisco Ramirez)
tsiau (Tiare Siaumau)

## Credits

The main resources used:

- Module 14 information provided in canva for the MVC modeling structure
- npm package 'Add to calendar': https://add-to-calendar-button.com/
- Screencastify for video recording

## License

Please refer to the license badge, on top of this file.

## Questions

Any question, please feel free to contact us directly, here are our usernames:

lpatinoortiz (Lilian Patino Ortiz)
Frankieramirez72 (Francisco Ramirez)
tsiau (Tiare Siaumau)
