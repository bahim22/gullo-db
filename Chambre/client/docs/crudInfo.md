
# React Hooks info

## _useState_

```tsx
(alias) useState<{

    name: string;
    position: string;
    level: string;
}>(initialState: {
    name: string;
    position: string;
    level: string;
} | (() => {
    name: string;
    position: string;
    level: string;
})): [{
    name: string;
    position: string;
    level: string;
}, React.Dispatch<...>] (+1 oLoad)
```

1. the returned state = val that's used as 1st arg in init state on first render
2. then stSt func used to updt stte, by getting new state val & reflects that change in dom.
3. Then returns stateful val & a func to update it;

## async function

- const onSubmit(e: any): Promise< void>
  - e.preventDefault(): the (e) event is the onSubmit func parameters

```tsx
const newPerson:{name:string, position: string, level: string} = form: { name: string; position: string; level: string; // use spread operator via {...form} instead

async func fetch( input: RequestInfo, init?: RequestInit):
Promise<Response>
```

- using a string to set req method;
- an object || array to set req headers;
- a bodyInit obj || null to set req body;
- json.stringify takes val(obj|arr) param
  - Optional use of replacer?: (any) param that transforms result and space?:(any) param to format json w/ line breaks, indents, white space, etc.

```tsx
(method) Promise<Response>
.catch<void>(onrejected?: (reason: any) => void | PromiseLike<void>): Promise<void | Response>
```

> contains an onRejected() param used as the callback to exe when prom is rejected
> then returns a prom for if/when callback is completed successfully

- setForm:( has val of setStateAction, which inturn contains props )
  - const navigate: NavigateFunction (to: To, options?: NavigateOptions) => void

```jsx
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

// combo of func update form + obj spread
const [state, setState] = useState({});
setState(prevState => {
  return {...prevState, ...updatedValues};
});
```

## useParams

```tsx
(alias) function useParams<ParamsOrKey extends string | Record<string, string> = string>(): Readonly<[
  ParamsOrKey
] extends [string] ? Params<ParamsOrKey> : Partial<ParamsOrKey>>
import useParams
```

Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.

## useNavigate

```jsx
function Redirect() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

(alias: navigate) useNavigate(): NavigateFunction

- Returns an imperative method for changing the location.
- Used by s, but may also be used by other el to change the location.

(async func) onSubmit(e: any): Promise< void>

Event.preventDefault(): void
If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

```js
<input
type='text'
className='form-control'
id='position'
value={form.position}
onChange={(e) => updateForm({ position: e.target.value })}/>
```

(property) React.ChangeEvent<HTMLInputElement>.target: EventTarget & HTMLInputElement

- value Returns the value of the data at the cursor's current position.

## React Router

### References

1. [React.js][https://reactjs.org/docs/hooks-reference.html#usestate]
2. [MongoDb][https://www.mongodb.com/languages/mern-stack-tutorial]
