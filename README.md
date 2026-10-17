# PROJECT: Planet Explorer — Capstone Project(GROUP-4)

## 📖 PROJECT OVERVIEW

Planet Explorer is a collaborative frontend capstone project developed by GROUP(4) using HTML, CSS, and JavaScript. The application provides users with an interactive way to explore the planets in our solar system and learn about their characteristics.

The application retrieves planetary information from the provided API and displays details such as planet names, images, types, distances from the Sun, masses, diameters, orbital periods, temperatures, gravity, number of moons, and descriptions.

The website recreates the supplied Figma design, including its interactive states, light and dark themes, and responsive layouts for desktop and mobile devices.

This project demonstrates the practical application of frontend development, API integration, responsive web design, accessibility, documentation, collaborative Git workflows, and web deployment.


---


## LIVE DEMO AND REPOSITORY LINKS:

**Live Application:** [https://planetexplorercapstonegroup4.netlify.app/]
**GitHub Repository:** [https://github.com/monik-grey/frontend-capstone-project-group4.git]


---


## ✨ FEATURES

### Planetary Information

- Fetch planetary data from the provided API.
- Display planet names and images.
- Show each planet's type and description.
- Display distance from the Sun, mass, diameter, period, temperature, gravity, and number of moons.
- Present planetary information in an organized and readable layout.

### Interactive User Interface

- Navigate between planets.
- Display the appropriate information for the selected planet.
- Implement interactive states such as hover and focus.
- Provide appropriate feedback when data cannot be found or loaded, where applicable.

### Light and Dark Themes

- Toggle between light and dark appearances.
- Maintain readable text, images, tables, buttons, and icons in both themes.
- Ensure the theme styles remain consistent throughout the application.

### Responsive Design

- Recreate the supplied desktop design.
- Implement the specified mobile and tablet layout modifications.
- Use CSS media queries and flexible layouts to support different screen sizes.

### Footer

The footer includes:

- A brief introduction to the team, including members' first names linked
  to their various github profile.
- A link to Amaka N's website: [amakandukwu.com](https://amakandukwu.com).
- A link to the group4's [GitHub repository](https://github.com/monik-grey/frontend-capstone-project-group4.git)
- A link to [TSAcademy](https://tsacademyonline.com/).


---


## 🛠️ TECHNOLOGIES USED

- **HTML5:** Semantic structure and accessible page content.
- **CSS3:** Layout, styling, responsive design, and light/dark themes.
- **JavaScript (ES6+):** Application logic, DOM manipulation, event handling, and interactive 
    functionality.
- **Fetch API:** Retrieving planetary information from the provided API(https://anurella.github.io/json/planet.json).
- **Promises and asynchronous JavaScript:** Handling API requests and responses.
- **Git:** Version control and branch management.
- **GitHub:** Repository hosting, collaboration, pull requests, and code reviews.
- **Figma:** Reference design and visual specifications (https://www.figma.com/design/IhNMADS0jxaEeafBRK9KAj/Hajime-cohort?node-id=94702-193&p=f&t=x7MkTqglJuxax7OS-0).
- **Netlify:** Public deployment.


---


## 🎯 PROJECT OBJECTIVES

The objectives of this project are to:

- Apply HTML, CSS, and JavaScript fundamentals to build a functional web application.
- Retrieve and display planetary information using the Fetch API and promises.
- Implement interactive features using JavaScript functions and logic.
- Recreate the provided Figma design as closely as possible.
- Implement light and dark themes with consistent styling.
- Develop responsive layouts for desktop and mobile devices.
- Use semantic HTML and accessible interface elements.
- Practise collaborative development using Git and GitHub.
- Follow a pull request review and approval process.
- Deploy the completed application to a public hosting platform.


---


## 📂 PROJECT STRUCTURE

frontend-capstone-project-group4/
│
├── .vscode/
│ └── settings.json
│
├── images/
│ └── logo-black.svg
│
├── index.html
├── style.css
├── script.js
│
└── README.md



---


## ⚙️ GETTING STARTED AND INSTALLATION

Follow these instructions to set up and run the project locally.

### Prerequisites

- Git installed on your computer.
- Visual Studio Code or another code editor.
- A modern web browser.
- Access to the project repository.
  Example of where to find the repository's clone URL on GitHub.

   Follow these steps:
    1. Open GitHub in your browser.
    2. Navigate to the repository you want to clone.
    3. On the repository page, click the green Code button.
    4. Select the Local or HTTPS option, depending on the interface shown.
    5. Copy the repository URL.
- Access to the provided planetary API, where required.

### 1. Clone the Repository

Open your project folder terminal in your code editor preferably VSCODE and run:

```bash
git clone https://github.com/monik-grey/frontend-capstone-project-group4.git
```

### 2. Navigate to the Project Directory

```bash
cd frontend-capstone-project-group4
```

### 3. Open the Project in Visual Studio Code

```bash
code .
```

```bash
git status
```
a successful result might look like this:
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

### 4. Create your own branch before working

For a collaborative project where everyone must use pull requests, do not make your changes directly on main.
First, update your local copy of main:

```bash
git switch main

git pull origin main
```
Then create and switch to your own branch:

```bash
git switch -c feature/your-task
```
Make changes, commit, and push your branch
You can verify your current branch with:

```bash
git branch
```
Stage your changes:

```bash
git add .
```
Commit the changes:

```bash
git commit -m "COMMIT YOUR CHANGES"
```
Push your branch to GitHub:

```bash
git push -u origin feature/your-task
```

After pushing, create a pull request on GitHub.
Create a pull request:
1. Open the repository on GitHub.
2. Find the prompt to compare or create a pull request for your recently pushed branch.
3. Set the base branch to main and the compare branch to your feature branch.
4. Review the changes.
5. Create the pull request.
6. Wait for the required review and approval before merging.


---


## 🔀 GIT AND GITHUB COLLABORATION WORKFLOW

All team members must follow the agreed Git workflow to maintain code quality and protect the main branch.

### Repository Setup

The team lead is responsible for:

1. Creating a public repository named after the group.
2. Adding all team members as collaborators.
3. Establishing the branch and pull request rules.
4. Ensuring that changes to `main` are made through reviewed pull requests.

### Development Workflow

1. Get the latest changes from the main branch.
2. Create a separate branch for your assigned task.
3. Implement and test the feature.
4. Commit changes using descriptive commit messages.
5. Push the branch to GitHub.
6. Open a pull request targeting `main`.
7. Request a review from another team member.
8. Address feedback and required corrections.
9. Merge only after the required review and checks are complete.


### Pull Request Rules

- Work must be completed on separate feature branches.
- All contributions must be submitted through pull requests.
- Pull requests must be reviewed before merging into `main`.
- The pull request author must not approve or merge their own pull request.
- The reviewer should check code quality, functionality, design consistency, and possible conflicts.
- Avoid unnecessary commits and pull requests by checking that work meets the agreed requirements before requesting a review.
- Team members should not bypass repository protections or merge unreviewed changes.


---


## 👥 TEAM MEMBERS AND INDIVIDUAL CONTRIBUTIONS

The project is being developed collaboratively by nine team members. Each member has an assigned area of responsibility, with additional collaboration where components depend on one another.

FIRST NAME (LINKED TO GITHUB PROFILE LINK):

| S/N | Team Member's Name | GitHub Profile Link | Assigned Role | Contribution | Primary Deliverables |
|:---:|---|---|---|---|---|
| 1 | [OSAMEDE](https://github.com/monik-grey) | [monik-grey](https://github.com/monik-grey) | Team Lead / Project Coordinator | Coordinated the team, established project guidelines, managed the GitHub repository, added collaborators, delegated tasks, monitored progress, configured the main branch, oversaw pull request reviews, maintained documentation, resolved integration issues, collaborated with the JavaScript team on corrections, and coordinated final testing and deployment. | Project coordination, repository management, team collaboration, code integration, README documentation, testing, and release oversight. |
| 2 | [MARK-ANTHONY](https://github.com/EMPRINTNATION) | [EMPRINTNATION](https://github.com/EMPRINTNATION) | Assistant Team Lead / JavaScript Developer | Supported team coordination, implemented JavaScript functionality for the planetary statistics table and planet card, collaborated with the HTML and CSS team on corrections, resolved integration issues, monitored assigned tasks, and supported the agreed Git workflow. | JavaScript functionality for the planetary statistics table and planet card, cross-team code corrections, and assistant team leadership. |
| 3 | [JOSHUA](https://github.com/barristerInTech) | [barristerInTech](https://github.com/barristerInTech) | HTML Structure Developer | Developed and organized the application's HTML structure, including the header, main content, planetary information, statistics, and footer, ensuring compatibility with CSS styling and JavaScript functionality. | Complete HTML structure of the Planet Explorer application. |
| 4 | [THELMA](https://github.com/Thelma-dot88) | [Thelma-dot88](https://github.com/Thelma-dot88) | Desktop CSS Developer | Implemented desktop styling for the layout, typography, spacing, sizing, and alignment of the main sections. Styled the planetary information and statistics to match the provided Figma design and collaborated on visual consistency. | Desktop CSS styling for the application, excluding the desktop footer. |
| 5 | [FATIMA](https://github.com/teemaa876) | [teemaa876](https://github.com/teemaa876) | Desktop Footer Developer | Implemented and styled the desktop footer, including its content, links, spacing, and alignment, in accordance with the design specifications and the application's overall visual style. | Desktop footer styling and visual implementation. |
| 6 | [AUGUSTINA](https://github.com/augustinaakintewe-max) | [augustinaakintewe-max](https://github.com/augustinaakintewe-max) | Responsive Design Developer | Implemented mobile and tablet CSS media queries, adjusted layouts and spacing for smaller screens, and collaborated with the other responsive developer to maintain consistency across viewports. | Mobile and tablet responsive layouts and media queries. |
| 7 | [CHISOM](https://github.com/ChisomWeb) | [ChisomWeb](https://github.com/ChisomWeb) | Responsive Design Developer | Worked on mobile and tablet media queries, refined component sizing, positioning, spacing, and alignment, and collaborated with Augustina to improve readability and visual consistency across devices. | Mobile and tablet responsive styling in collaboration with Augustina. |
| 8 | [HABEEB](https://github.com/Badboyvado) | [Badboyvado](https://github.com/Badboyvado) | Theme Toggle JavaScript Developer | Implemented the JavaScript functionality for switching between light and dark themes, connected the toggle control to the application's theme behavior, and ensured the interface responded to theme changes. | JavaScript functionality for the light and dark theme toggle. |
| 9 | [ADEOLUWA](https://github.com/Crown-great02) | [Crown-great02](https://github.com/Crown-great02) | Default Planet Display and Error Handling Developer | Implemented the default planet display on application load, presented the initial planetary information, and added error handling to display appropriate messages when the default planet information could not be loaded. | Default planet display and error-handling functionality. |



### Other team members who contributed nothing to the project

# 1. Abdulafeez Salaudeen (https://github.com/harees07-bit)
# 2. Inioluwa Olufosoye (https://github.com/ini28-dot)


## 🔄 Project Collaboration, Corrections, and Branch Updates

After the HTML and CSS teams completed their initial implementations and submitted their pull requests, several issues were identified in the JavaScript integration, requiring additional corrections across the project.

Mark-Anthony, who was responsible for coordinating HTML and CSS corrections and also served as the Assistant Team Lead, worked alongside the HTML and CSS teams to improve the code structure, address identified issues, and ensure better integration between the different components.

To ensure that all corrections were properly incorporated, team members were individually instructed to update their respective branches with the corrected code and submit their changes for merging into the `main` branch.

### Branch Update Summary

- **Html-Css-Fixes branch:** ### The`html-css-fixes` branch was created by the assistant team lead to address recurring merge conflicts and structural issues in the HTML and CSS files. These issues arose from team members failing to update their branches before committing changes, accidentally deleting existing code, and making structural modifications that affected other parts of the project.
To resolve these challenges, the branch was created to consolidate and correct the HTML and CSS structure, update the main branch with the necessary fixes, and provide the JavaScript team with a stable and consistent codebase. This helped simplify integration, minimize further conflicts, and streamline the final release process.

- **Release/final-review branch:** A dedicated release/final-review branch was created and is managed by the Team Lead. The branch is used to pull the latest changes from the main branch for a final review of the project. The Team Lead is responsible for reviewing the codebase, organizing the project structure, identifying and implementing any necessary corrections, and ensuring that all components are properly integrated before the final release.

### Summary

This correction phase highlighted the importance of maintaining consistent code across branches, resolving merge conflicts before integration, and following the established GitHub workflow. It also emphasized the need for timely communication, individual accountability, and collaboration between team members to ensure that all corrections were properly implemented before final integration into the `main` branch.


### Contribution Guidelines

- Every member should contribute through their own assigned branch or an agreed shared-feature workflow.
- Members collaborating on one component should have their individual contributions documented.
- The author of a pull request must not review or merge that same pull request.
- Team responsibilities may be adjusted by agreement as the project develops.
- The final documentation must reflect the actual work completed by each member.


---



## 🧪 TESTING AND QUALITY ASSURANCE

The following were verified before the final deployment:

- [x] Planet data is retrieved successfully from the provided API.
- [x] All required planetary fields are displayed.
- [x] Planet navigation displays the correct information.
- [x] Images load correctly and have appropriate alternative text.
- [x] API failures and unavailable data are handled appropriately.
- [x] Light and dark themes both work correctly.
- [x] Hover and focus states follow the design.
- [x] Desktop and mobile layouts match the provided specifications.
- [x] Tables and other content remain readable on small screens.
- [x] Semantic HTML and accessible controls are used.
- [x] No unintended console errors or broken assets remain.
- [x] All approved pull requests are integrated into `main`.
- [x] The deployed application works as expected.


---


## 🚀 HOSTING AND DEPLOYMENT

The completed application must be deployed to a public hosting platform, such as Netlify or Vercel.

**Live Application(Netlify):** [https://planetexplorercapstonegroup4.netlify.app/]

**GitHub Repository:** [https://github.com/monik-grey/frontend-capstone-project-group4.git]

After deployment, it is verified that:

- The website is publicly accessible.
- All images and assets load correctly.
- API requests work on the deployed site.
- The light and dark themes work.
- Responsive layouts display correctly.
- The deployed version contains the latest approved changes.


---


## 📈 PROJECT STATUS

The Planet Explorer Capstone Project has been successfully completed. The team has implemented the required features, integrated the planetary information, developed responsive layouts, and implemented light and dark theme switching.

Project Completion Checklist

- [x] Complete assigned components.
- [x] Integrate the planetary API.
- [x] Implement all required planetary data fields.
- [x] Complete navigation and interactive functionality.
- [x] Implement light and dark themes.
- [x] Complete responsive design.
- [x] Review semantic HTML and accessibility.
- [x] Complete integration and testing.
- [x] Finalize documentation.
- [x] Deploy the application.
- [x] Verify the public deployment link.



---


## 🤝 ACKNOWLEDGMENTS

We appreciate TSAcademy, our tutors - Miss Amaka N, and MR. Emmanuel, the project organizers, course moderator - Miss Moyin, class moderators, and everyone who provided guidance throughout the capstone project.

We also acknowledge the collective effort of all nine team members in applying their frontend development skills, collaborating through GitHub, and building the Planet Explorer application.

---

**Built collaboratively with HTML, CSS, JavaScript, and GitHub.**












