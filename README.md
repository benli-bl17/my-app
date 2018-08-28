## Style Guide
### Single responsibility
* A file defines one thing, such as a component, a service, a pipe, an directive.
* Each file is within 400 lines.
* Define a function with a single function.
* A function should not exceed 75 lines at most.
### Naming
* Do follow a pattern that describes the symbol's feature then its type. The recommended pattern is `feature.type.**.`.
  * Component ---   `***.component.ts|html|scss`
  * Module ---   `***.module.ts`
  * Routing ---   `***-routing.module.ts`
  * Service ---   `***.service.ts`
  * Pipe ---   `***.pipe.ts`
  * Directive ---   `***.directive.ts`
  * Model ---   `***.model.ts`
  * Data ---   `***.data.ts`
* Do use dashes to separate words in the descriptive name. For example `hero-list.component.ts` 
* Do use upper camel case for class names, and same as the file name.
For example, the class name defined by `app.module.ts` is `AppModule`.<br/>
* Do use lower camel case for directive selector. For example `clickOutSide`
### Coding conventions
* Do use upper camel case when naming classes.
* Do declare variables with `const`.
* The naming of variables should be controlled within 3 words.
* Do use upper camel case for name an interface.
* Do use lower camel case for name properties and methods.
* Leaving one empty line between third party imports and application imports.



  




