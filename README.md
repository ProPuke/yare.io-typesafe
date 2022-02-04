# How to easily make your yare.io bots typesafe

1. Use an editor/ide with typescript support (vscode is a good candidate)

2. Drop the `yare.io.d.ts` and `tsconfig.json` files into the same directory as your bot script

3. You're done, that's it

You don't need to switch languages or do any fancy compilation steps. Any environment that supports typescript should now apply automatic typechecking to your .js bot script.  
This should provide you with helpful autocomplete as well as errors when mistyping identifiers or for areas where variable types don't validate.

However for functions who's type is still ambiguous and for function parameters, you will need to include typing info in your js file, in the form of a comment.

For example:

```ts
/**
 * @param {Vector} from
 * @param {Vector} to
 * @returns {Vector}
 */
function vector(from, to) {
  return [to[0]-from[0]. to[1]-from[1]];
}
```

Hey presto! The parameter types and return types of that function are now known.

```ts
const travel = vector(spirit.position, base.position);
```
No need to specify types in the above. Typescript knows that vector returns a `Vector`, so `travel` is automatically typed as that too.

However sometimes you need a bit more...
```ts
/** @type {Spirit|null} */
let fatest = null;

for(const spirit of my_spirits){
  if(!fatest||spirit.energy>fatest.energy){
    fatest = spirit;
  }
}
```

Note that we initialise `fatest` as `null`, but want the option of also putting a `Spirit` value in it, so we type it as `Spirit|null` with the comment above.

That should be enough to get started. Get coding!
