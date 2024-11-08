Shared Components Library Setup
-----------------------------

## Validation Steps
- [x] Verify library creation and configuration
  * Run `nx show project shared-components`
  * *Expected Result*: Project info shows with tags `scope:shared,layer:presentation`

- [x] Verify Storybook configuration
  * Run `nx storybook shared-components`
  * *Expected Result*: Storybook should start and show the default page

- [x] Verify project structure
  * Check `libs/shared/components/src/lib` exists
  * Check `index.ts` properly exports components
  * *Expected Result*: Directory structure follows standards with proper exports

- [x] Verify dependencies
  * Check package.json includes required dependencies
  * *Expected Result*: All necessary React and Storybook dependencies present

- [ ] Verify library can be imported
  * Create a test component in apps/my-voting-web/src/components/test/ImportTest.tsx
  * Import and use a component from the shared library
  * Run `nx build my-voting-web` to verify build succeeds
  * *Expected Result*: Component should import without errors and application should build successfully