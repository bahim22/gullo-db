
# react-fullstack MongoDb App

tags: [ 'react', 'express', 'mongoDb', 'npm', 'javascript']

## Notes

## Project setup, config and packages

1. create root dir and project dir
2. start the nodejs app via yarn init
3. install ts and dep (local or -g )
   1. express, mongoDB (mongoose), cors and their types as devDep for TS compiler
   2. install dep so we can compile the ts and for starting server concurrently
4. add build and start values to script key in package.json

```bash
yarn add typescript
yarn add express cors mongoose
yarn add -D @types/node @types/express @types/mongoose @types/cors
yarn add -D concurrently nodemon
```

## Back-end steps

- create a `type` (interface)
- create a `model`
  - import the BE `interface` and `util` from mongoose
    - (defines the _A1_.`schema` and passes the interface as a _A2_.`type` to _A3_.`model`)
- create `API` _controller_ (CRUD-get, add, update, delete info)
  - create a func to _fetch data_(in controller/app/index.ts)
  - the model gets data from db and returns res (array of items)
  - create `api routes`
  - create `server` and get keys from MongoDB Atlas by making a cluster

## Front-end steps (adjust for proj not using tsx)

- make the client side app with React
  - create types
  - fetch data
  - create components
  - add forms
  - display items
  - fetch/display data

## Add Styling and Build for Production

- Test
- Debug
- Deploy
