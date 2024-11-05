# API Dockerfile QA Steps

## Overview
This document outlines the steps to validate the Dockerfile implementation for the my-voting-api application.

## Requirements Validated
- Multi-stage build implementation
- Production optimization
- Health check functionality
- Proper dependency handling
- Build process verification
- Security considerations

## Prerequisites
- Docker installed and running
- Node.js 20.x installed
- Access to the project repository
- NX workspace set up with my-voting-api project
- Trivy installed for security scanning (optional)

## Test Steps

### 1. Build Image Validation
```powershell
# From project root, build the image
docker build -t voting-api -f apps/my-voting-api/Dockerfile .

# Verify build success and image creation
docker images | Select-String voting-api
```
Expected Result:
- Build completes successfully
- Image is created with expected size (should be <300MB)
- No error messages during build

### 2. Container Runtime Validation
```powershell
# Run the container
docker run -d --name voting-api-test -p 3000:3000 voting-api

# Check container status
docker ps -a | Select-String voting-api-test

# View logs for startup issues
docker logs voting-api-test
```
Expected Result:
- Container starts successfully
- No error messages in logs
- Application is listening on port 3000

### 3. Health Check Validation
```powershell
# Wait 30 seconds for health check to execute
Start-Sleep -Seconds 30

# Check container health status
docker inspect --format='{{.State.Health.Status}}' voting-api-test

# Test health endpoint directly
Invoke-WebRequest -Uri http://localhost:3000/api/health
```
Expected Result:
- Health status should show as "healthy"
- Health endpoint returns 200 OK response with {"status":"ok"}

### 4. Environment Variable Validation
```powershell
# Verify environment variables are set correctly
docker exec voting-api-test cmd /c "set NODE_ENV"
docker exec voting-api-test cmd /c "set PORT"
```
Expected Result:
- NODE_ENV=production
- PORT=3000

### 5. Security Validation
```powershell
# If Trivy is installed, scan the image for vulnerabilities
trivy image voting-api

# Check running processes in container
docker exec voting-api-test tasklist
```
Expected Result:
- No critical security vulnerabilities
- Process running with minimal permissions
- Only necessary processes running

### 6. Build Layer Optimization
```powershell
# Analyze image layers
docker history voting-api
```
Expected Result:
- Proper layer caching visible
- No unnecessary files in layers
- Optimized layer size and count

### 7. Production Build Verification
```powershell
# Check for development dependencies
docker exec voting-api-test npm list
```
Expected Result:
```
my-voting-api@1.0.0
├── @fastify/cors@8.3.0
├── fastify@4.24.0
├── helmet@7.1.0
└── tslib@2.6.2
```
Key validation points:
- Package list should be minimal and only contain production dependencies
- No dev dependencies (like @types/*, typescript, jest, etc.) should be present
- Core runtime packages must be present (fastify, cors, helmet, tslib)
- No packages should show errors or "UNMET PEER DEPENDENCY" warnings

### 8. Docker Compose Validation
```powershell
# Start services using docker-compose
docker-compose up -d

# Check service status
docker-compose ps

# Check service logs
docker-compose logs voting-api
```
Expected Result:
- Service starts successfully
- Network is created
- Logs show proper startup
- Health check passes

### 9. Cleanup
```powershell
# Stop and remove test container
docker stop voting-api-test
docker rm voting-api-test

# Stop docker-compose services
docker-compose down

# Optionally remove test image
docker rmi voting-api
```

## Failure Scenarios to Test

### 1. Health Check Failure
1. Modify the health check endpoint to return 500
2. Rebuild and run container
3. Verify container is marked as unhealthy after health check interval

### 2. Build Failure Scenarios
1. Remove package.json and verify build fails appropriately
2. Introduce TypeScript error and verify build catches it
3. Test with missing NX configuration

### 3. Runtime Failure Scenarios
1. Test with incorrect PORT environment variable
2. Test with missing required environment variables
3. Test with invalid NODE_ENV setting

## Success Criteria
- [ ] Image builds successfully
- [ ] Container runs without errors
- [ ] Health check functions correctly
- [ ] Production optimization verified
- [ ] Security measures in place
- [ ] No development dependencies in production image
- [ ] Environment variables properly configured
- [ ] Build layers properly optimized
- [ ] Docker Compose setup works correctly

## Notes
- All tests should be run on a clean environment
- Document any deviations from expected results
- Save all test logs for review
- Report any security concerns immediately
- Consider using Trivy or other security scanning tools in your CI/CD pipeline