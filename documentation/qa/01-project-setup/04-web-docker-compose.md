Web Service Docker Compose Configuration
--------------------------------------
## Validation Steps
- [x] Verify the web service starts correctly
  * Run `docker-compose up`  # Start all services
  * *Expected Result*: 
    - Web service should be accessible at http://localhost:4200
    - API service should be accessible at http://localhost:3000

- [x] Verify hot reloading works
  * Make a change to any file in apps/my-voting-web/src
  * *Expected Result*: The changes should be reflected in the browser without manual refresh

- [x] Verify API connectivity
  * Prerequisites:
    - Both web and API services must be running (`docker-compose up`)
  * Steps:
    1. Access http://localhost:4200 in your browser
    2. Open Chrome DevTools (F12)
    3. Go to the Network tab
    4. Look for a request to http://localhost:3000/api/health
    5. The request should return a 200 status with message "OK"
  * Validation:
    * Status code should be 200
    * Response should contain: `{ "status": "ok" }`
    * Response time should be under 200ms
    * No CORS errors should appear in the console

- [x] Verify health check
  * Prerequisites:
    - Both services should be running for at least 30 seconds
  * Steps:
    1. Run `docker ps` to list containers
    2. Look at the STATUS column for both services
    3. Wait 30 seconds for health check to run
    4. Run `docker ps` again
  * *Expected Result*: Status should show "(healthy)" for both services

- [x] Verify volume mounts
  * Prerequisites:
    - Both services should be running
  * Steps:
    1. Create a new file at apps/my-voting-web/src/components/ApiTest.tsx
    2. Import and use the component in MainLayout.tsx
    3. Refresh the browser
  * *Expected Result*: New component should be visible without rebuilding