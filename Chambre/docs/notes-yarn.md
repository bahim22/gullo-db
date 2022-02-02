
# Notes for StoryBook React App

➾➔➤❖$ℬ⊕✓✂︎♑️©❖❝❞[]✬★☒☑︎⇐⥣⇓❮❯🖥💻⏳💡⚒🔑📭📦📨📊📈📜📚📕📙📘✂️🔐🔎♑️❌⭕️🚫✅❎🌐🆗2️⃣0️⃣▶️©️✔️™️☑️🔘🕢é

## Tsx Example

- Example TS types, interfaces

```ts
let foo: string = "test" //explicit type define
 let foo = "test" //or implicit
let baz: string[] = ["This", "is", "a", "Test"] //same code as below
 let baz: Array<string> = ["This", "is", "a", "Test"].
```

- `Interfaces` and `Type` aliases help to define the shape of an object-like data structures.

```ts
interface ITest {
  id: number;
  name?: string;
}

type TestType = {
  id: number,
  name?: string,
}

function myTest(args: ITest): string {
  if (args.name) {
    return `Hello ${args.name}`
  }
  return "Hello Word"
}

myTest({ id: 1 })
```

## Initial SetUp

1. clone or degit repo, cd into app and install dep

```shell
    npm install --global yarn #to update yarn
    npx degit <github repo url>
    cd <app-name>
    yarn
```

1. if there are security issues run audit and upgrade dep
   1. can pass flags such as
      1. --production[=true|false]
      2. --verbose
   2. yarn add (dep) || yarn add --dev (devDep)
      1. yarn add package-name@tag // @latest @next
   3. yarn run [script] [args] // yarn test -o --watchAll
   4. yarn cache list | ... cache dir |  cache clean | yarn config set cache-folder [path]
   5. yarn install --check-file
   6. yarn import // creates yarn-lock file based on package-lock or w/ info from node_modules dir
   7. yarn info [package] --json # get info on a npm package

```shell
yarn init # create new package.json
yarn install
yarn audit --groups "dependencies devDependencies"
yarn upgrade-interactive --latest
yarn versions #check --v of node, yarn, v8 etc.
yarn remove <pack> --flag
```

## 🔎 What's inside?

   > .
    | Main App
    ├── node_modules
    ├── public
    ├── src
    ├── .env
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md

1. **`public`**: This directory will contain the development and production build of the site.

2. **`src`**: This directory will contain all of the code related to what you will see on your application.

3. **`.env`**: Simple text configuration file for controlling the application's environment constants.

4. **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

## Front-End React

## Create React App Scripts

`npm start`: Runs the app in the development mode.\
`npm test`: Launches the test runner in the interactive watch mode.
`npm run build`: Builds the app for production to the `build` folder.\
`npm run eject`: copy config files and the transitive dependencies (webpack, Babel, ESLint, etc) into your proj

## FETypeScript

- _src/type.d.ts_ holds the types
  - ext .d.ts allows types to be global, removing need for importing them
- create the `todo type`
  - the FE `interface` needs to match the structure of the API data + add'l props for equaling the defined API types
  - the `TodoProps` are = type of the app handling data rendering
- _axios response_ implemented to req info from API
  - `getTodos`() func calls the server to get the data and returns a promise
    - Type = AxiosResponse which is the Todos that will match type = ApiDataType
  - `addtodo`: a user inputs data (argument) then the func responds with a promise (return)
  - Mdb also able to auto create _id prop so we can remove it.
  - `updateTodo`
    - pass in the updated data and the _id of the object & change status
  - `deleteTodo`
    - receives _id param to return promise
- `components`: todo form and display
  - AddTodo = React func compo that recieves the saveTodo() method as a prop, enabling storing data to the db
  - The ITodo type is matched by the formData state and in order for it to accept the initial state of the empty object (no todos) an alternative type ({}) is added
  - To correctly handle props received by the compo we extend TodoProps type then append the updatetodo & deleteTodo funcs
  - the todo object will be passed in enabling it to be displayed and add funcs to update & delete a Todo
- `Fetch` & `Display` data (import compos & utilities)
  - implement useState with the ITodo type but initialized w/ empty []
  - since getTodos() returns a promise, able to use then func and return the user input data or error (change to _async func and await_); then call fetchTodos after compo mounts
- (update/delete = get params, send req to server, get a res and carryout the task or throw error) upon form submit, addTodo() req to server and the data is either saved and the Todo updated or throw new error
- place  AddTodo compo in App then use todos.map to loop through the data and return to the nested TodoItem compo
- start the server then the FE
- test and debug
- add UI/UX, az login and build
