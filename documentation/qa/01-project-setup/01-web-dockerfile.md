# Web Application Dockerfile Implementation

## Requirements
- Create a Dockerfile for the Next.js web application
- Implement multi-stage build
- Support both development and production builds
- Optimize caching for node modules
- Optimize build artifacts

## Implementation Details

### Dockerfile Structure
The Dockerfile uses a three-stage build process:
1. Dependencies stage: Installs and caches npm dependencies
2. Builder stage: Builds the Next.js application
3. Runner stage: Creates a minimal production image

### Security Considerations
- Uses non-root user (nextjs)
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
- Open http://localhost:3000 in a browser
- Should see the Next.js application running

4. Verify health check:
```powershell
docker-compose ps
```
- Status should show as "healthy"

5. Verify development mode:
- Make a change to a source file
- Change should be reflected without rebuilding

## Success Criteria
- [ ] Docker image builds successfully
- [ ] Application runs in development mode
- [ ] Health checks pass
- [ ] File changes are reflected without rebuild
- [ ] Production build creates optimized image 