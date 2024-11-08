Data Models Library Setup
------------------------

## Validation Steps
- [x] Verify library creation and configuration
  * Run `nx show project data-models`
  * *Expected Result*: Project info shows with tags `scope:shared,layer:data`

- [x] Verify project structure
  * Check `libs/shared/data-models/src/lib` exists
  * Check `index.ts` properly exports types and models
  * *Expected Result*: Directory structure follows standards with proper exports

- [x] Verify test setup
  * Check Jest configuration exists
  * Run `nx test data-models`
  * *Expected Result*: Test runner should work without errors

- [x] Verify dependencies
  * Check package.json includes required dependencies
  * *Expected Result*: All necessary TypeScript and testing dependencies present

- [x] Verify library can be imported
  * Try importing from another project using `@voting/shared/data-models`
  * *Expected Result*: Import should work without errors 