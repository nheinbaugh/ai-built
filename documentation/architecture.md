We use the following technologies for this project:

## Frontend Technologies
- React
- Next.js
- Tailwind CSS
- TypeScript

## Backend Technologies
- Node.js
- Express
- PostgreSQL

## Supporting Technologies
- Docker
- ESLint
- Prettier
- NX
    - The following NX plugins are used:
        - @nrwl/react
        - @nrwl/node
- Jest


## NX
* We place executable code in the `apps` folder.
* We place libraries in the `libs` folder.
* We don't hesitate to create a new NX project if it makes sense for the codebase.
  * we always tag the new projects as appropriate
* As much as possible we try to create shared libraries that can be used by any application.
* We use NX tags to group libraries and applications into feature sets.
    * `scope:feature` - Libraries that are part of a feature set
        * These should only contain code that is specific to a single feature (e.g. a login page)
    * `scope:shared` - Libraries that are shared between feature sets
      * This logic is shared between multiple features (e.g. authentication)
    * `layer:presentation` - Libraries that are presentation layer libraries
        * These should only contain UI components and hooks
    * `layer:domain` - Libraries that are domain layer libraries
    * `layer:data` - Libraries that are data layer libraries
        * These should only contain data models and factories


## Third Party Libraries
* When and how do we add new third party libraries?
    - When we encounter a problem that already has been solved by the larger web development community we consider using that library
    - If the problem is not a priority for us to solve ourselves we will consider using a library
    - We try to avoid adding libraries that can be easily implemented in our own codebase
    - We try to avoid adding libraries that are not well maintained or supported
    - We prefer to use libraries that are well supported by the community
    - We prefer to use libraries that are well documented and have a lot of examples
    - We prefer to use libraries that are well maintained and have a lot of active development
    - We prefer to use libraries that are well supported by the library maintainers


