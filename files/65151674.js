import * as IO from 'fp-ts/es6/IO'
import { flow } from 'fp-ts/es6/function'
import { Lens } from 'monocle-ts'

// Just for fun, model writing a Foo to disk
declare const writeFooToDisk: (foo:Foo) => IO.IO<Foo>
interface Foo {
  id: string
  bar: string
}

// How to instantiate a Foo
const makeFoo = (id:string):Foo => ({id, bar: 'initial value'})

/* 
 * How to update bar within a Foo; FP prefers immutable data structures.
 * Here, setBar('new val')(oldFoo) does not change oldFoo but returns a new Foo
 */
const setBar = (bar:string) => (foo:Foo):Foo => ({...foo, bar})

/*
 * Here's how you might change your someFunction... (sFTR) to be functional.
 * I assume "does something" means there's a side effect (HTTP fetch, DB read, 
 * disk write). With a side effect, you want to wrap it in an IO (if sync) or
 * Task (if async). For simplicity, I'm assuming the function can never produce
 * an error.
 */
const sFTR: (foo:Foo) => IO.IO<Foo> = flow(
  IO.of,
  IO.chain(writeFooToDisk),
  IO.map(foo => setBar(foo.bar==='initial value'?'initial value changed':'value changed')(foo))
)

///// We can improve this with lenses, another thing in FP:

/*
 * A lens is essentially two functions: a getter and an immutable setter
 * assume type S { A: unknown }, then
 *
 * sLens.get is (s:S) => A, you pass state and it gives you property
 *
 * sLens.set is (a:A) => (s:S) => S, you pass new property, then state, and it
 * gives up updated state
 *
 * some libs provide `modify`, which is like `set` but it takes a function
 * rather than a value, and it modifies the property based on its current value
 */
const barLens = Lens.fromProp<Foo>()('bar')

// This is what we'll pass `modify`
const updateBar = (bar:string) => bar==='initial value' 
  ? 'initial value changed' 
  : 'value changed'

/*
 * We define a function "flow" that lifts a Foo into IO, then writes to disk,
 * then modifies bar, and returns the updated Foo (still wrapped in IO)
 */
const sFTRWithLens: (foo:Foo) => IO.IO<Foo> = flow(
  IO.of,
  IO.chain(writeFooToDisk),
  IO.map(barLens.modify(updateBar))
)

// type IO<A> is just ()=>A, so we can unwrap the Foo like so:
const foo = makeFoo('howdy')
const newFooIO = sFTRWithLens(foo) // IO<Foo>
newFooIO() // Foo

// Or, using flow again. This creates a Foo, writes it to disk, updates bar,
// and returns the updated Foo
flow(makeFoo, newFooIO, newFooIO)('howdy') // { id: 'howdy', bar: 'updated initial value' }
