
# JavaScript info

## Event Listener

```ts
(method) addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void (+1 overload)
```

Appends an `event listener` for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing `event listener`s.

When set to true, options's once indicates that the callback will only be invoked once after which the `event listener` will be removed.

If an AbortSignal is passed for options's signal, then the `event listener` will be removed when signal is aborted.

The `event listener` is appended to target's `event listener` list and is not appended if it has the same type, callback, and capture.

## Array manipulation

_length_
(property) Array<any>.length: number

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

_push_
(method) Array<any>.push(...items: any[]): number

Appends new elements to the end of an array, and returns the new length of the array.

@param items — New elements to add to the array.

_map_
(method) Array<any>.map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

_forEach_
(method) Array<any>.forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void

Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

_toLocalString_ and _toString_
(method) Array<any>.toLocaleString(): string

toLocalString ? The elements are converted to string using their toLocaleString methods : Returns a string representation of an array.

_indexOf_
(method) Array<any>.indexOf(searchElement: any, fromIndex?: number): number

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

_pop_
(method) Array<any>.pop(): any

Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

_join_
(method) Array<any>.join(separator?: string): string

Adds all the elements of an array into a string, separated by the specified separator string.

@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

_filter_
(method) Array<any>.filter<S>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[] (+1 overload)

Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

filter(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

Returns the elements of an array that meet the condition specified in a callback function.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

## ex. use concat to change localhost value

```js
const changeLocalHost = () => {
 const localhost = `http://localhost:7222/`

 const adjustLocal= () => {
	return (localhost.concat(`record/`))
	};
}
```

## tsx func & arrow snippet

```ts
//arrow
type Props = {}

const  = (props: Props) => {
  return (
    <div></div>
  )
};
export default;

// function
type Props = {}

export default function ({}: Props) {
  return (
    <div></div>
  )
};
```
