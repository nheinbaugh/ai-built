* We use ESLint for linting and Prettier for formatting.
* We use Jest for testing.
* We use NX for project management and dependency management.
* We use Docker for containerization.
* We use TypeScript for all code.
* We use Tailwind CSS for styling.
* We use Next.js for the frontend framework.
* We use Node.js and Express for the backend framework.
* We use PostgreSQL for the database.
* We leverage Typescript features to ensure our code is more robust and easier to maintain.
    * We use TypeScript interfaces to define the shape of our data.
    * We use TypeScript enums to define the shape of our data.
    * We use TypeScript types to define the shape of our data.
    * We use TypeScript generics to create more flexible and reusable code.
    * We use TypeScript type guards to perform runtime checks of our data.
* We ensure that we are only importing files from NX libraries and projects.
* We make sure that any files that are needed outside the current project is exposed in the NX project's `index.ts` file.
* we separate business logic from presentation logic
* UI Components should contain no business logic
* data models should contain no business logic
* data models should live in a project with the tag `layer:data`

# Code Organization
We use the following guidance when creating new files/folders for our workspace.

## Workspace Structure
* We use the following folder structure for our workspace:
    * `apps` - contains executable NX projects
    * `libs` - contains NX projects that contain libraries
    * `documentation` - contains documentation for the project

##  Project Structure
* We place unit tests in files named `*.spec.ts` that are located in the same folder as the code they are testing.
* we prefer to have similar files (e.g. hooks, types, etc.) located in the same folder with the same generic names
    * hooks
    * types
        * this should include all interfaces, enums, types and utility functions
    * components
    * models
        * for models they should be grouped in folders of similar models, but there should never be a folder with a single model unless the project only has a single model
        * models should live in a project with the tag `layer:data`

## File Naming
* We use the following naming conventions for our files:
    * `*.component.tsx` - for React components
    * `*.page.tsx` - for Next.js pages
    * `*.module.css` - for CSS modules
    * `use-{name}.hook.ts` - for custom hooks
    * `*.type.ts` - for TypeScript types
    * `*.enum.ts` - for TypeScript enums
    * `*.interface.ts` - for TypeScript interfaces
    * `*.function.ts` - for utility functions
    * `*.factory.ts` - for factory functions