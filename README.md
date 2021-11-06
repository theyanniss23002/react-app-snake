# Getting Started Snake Game in React

---

### In the project directory, you can install node_modules: `yarn`

### To configure esLint and Prettier go to your IDE settings and enable the corresponding options:

### For WebStorm:

>## `EsLint:`
>
>-   Double tap `Shift` and write `EsLint` and open current parameter.
>-   Select `Automatic EsLint configuration`, and also click on the Run eslint checkbox --fix on save.

>## `Prettier:`
>
>- Double tap `Shift` and write `Prettier` and open current parameter.
>- Select prettier package in current project.

### Then run project: `yarn start`

---

### To register a project in firebase for further deployment:

- `firebase init`

- > Choose:
  > 
  > `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
  > 
  >`Hosting: Set up GitHub Action deploys`
  > 

- `Create a new project`

- `Add project name`
- Write public directory `build`.
- Configure as a single-page app `yes`.
- Set up automatic builds and deploys with GitHub `yes`.
- Specify nickname and repository in `<nickname/repo>` format.
- Set up the workflow to run a build script before every deploy `yes`
- What script should be run before every deploy `yarn && yarn build && firebase deploy`.
- Set up automatic deployment to your site's live channel when a PR is merged `yes`.
- Write name your main branch.

---

### In this project, the following stack was used:

- typescript
- eslint
- husky
- prettier
- babel
- react
- firebase
- cypress
- middleware: sagas
- state management: redux
- material-ui@v5
