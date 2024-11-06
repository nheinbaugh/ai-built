# Web Application Dockerfile Implementation

## Requirements
- Create a Dockerfile for the React web application
- Implement multi-stage build
- Support both development and production builds
- Optimize caching for node modules
- Optimize build artifacts

## Implementation Details

### Dockerfile Structure
The Dockerfile uses a three-stage build process:
1. Dependencies stage: Installs and caches npm dependencies
2. Builder stage: Builds the React application
3. Runner stage: Creates a minimal production image

### Security Considerations
- Uses non-root user (webuser)
- Implements proper file permissions
- Only includes production dependencies in final image

### Performance Optimizations
- Multi-stage build reduces final image size
- Node modules are properly cached
- Development volumes are configured for fast updates

## Testing Steps

1. Build the Docker image:
```powershell
docker-compose build voting-web
```

2. Start the service:
```powershell
docker-compose up voting-web
```

3. Verify the application is running:
- Open http://localhost:4200 in a browser
- Should see the React application running
- Verify both Local and Network URLs are displayed in the console:
  * Local: http://localhost:4200/
  * Network: http://172.21.0.2:4200/

4. Verify health check:
```powershell
docker-compose ps
```
- Status should show as "healthy"

5. Verify development mode and hot reloading:
- Make a change to a source file in apps/my-voting-web/src
- Changes should be reflected in the browser without manual refresh
- Vite's HMR (Hot Module Replacement) messages should appear in the console

## Success Criteria
- [x] Docker image builds successfully
- [x] Application runs in development mode on port 4200
- [x] Health checks pass
- [] File changes are reflected without rebuild
- [x] Vite configuration properly handles workspace files
- [x] Production build creates optimized image