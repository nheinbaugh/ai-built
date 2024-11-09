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
* When I need to use strings that are intended for display to a user (or will be reused) I create a constant in a `*.const.ts` file.

## User QA
 - Before I attempt to write any code I will always create a QA file for the task that follows this format:
    * `documentation/qa/<indexed-number>-<task-name>.md`
        * The indexed number starts at 00 and increments for each new task. The next number is always 01 more than the previous number.
    * The QA file will be used to document the requirements, approach, implementation, testing strategy, security and performance considerations for the task.
    * The QA file will include all manual steps that can be used to validate the task has been completed successfully.
    * I write the QA file expecting that the user has no knowledge of the codebase and no access to it.
    * My QA file does not expect QA to be checking for the existance of files, folders, or code. It is only used to validate the requirements, approach, implementation, testing strategy, security and performance considerations for the task.
    * My QA file will contain:
        * Automated QA Tests that can be run
        * Manual Verification steps that can be taken through an API or UI

# Code Organization
We use the following guidance when creating new files/folders for our workspace.

## Workspace Structure
* We use the following folder structure for our workspace:
    * `apps` - contains executable NX projects
    * `libs` - contains NX projects that contain libraries
    * `documentation` - contains documentation for the project

##  Project Structure
* We place unit tests in files named `*.spec.ts` that are located in the same folder as the code they are testing.
* Each Unit Test file should have a 1:1 relationship with the code file it is testing.
* we never have folders (or files) that include the name "utils" it's far too generic to be useful
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

###  QA file Format
  {Task Name}
  ------------
  ## Validation Steps
  - [ ] {Validation Step 1}
    * {Step 1 Description}
    * *Expected Result*: {Expected Result}
  - [ ] {Validation Step 2}
    * {Step 2 Description}
    * *Expected Result*: {Expected Result}    

## Model Organization
* For data models, we use the following folder structure:
    ```
    model-name/
    ├── validation/
    │   ├── field-name.validation.ts
    │   ├── field-name.validation.spec.ts
    │   ├── shared.validation.ts        # For shared types and constants
    │   └── index.ts                    # Exports and composes validators
    ├── model-name.interface.ts
    ├── model-name.interface.spec.ts
    ├── model-name.factory.ts
    └── model-name.factory.spec.ts
    ```
* Each field that requires validation should have its own validation file
* Validation files should be focused on a single responsibility
* Common validation types and utilities should be in shared.validation.ts
* The validation/index.ts file should compose the individual validators
* Each validation file should have its own test file

