Candidate Model Implementation
----------------------------

## Requirements
- Implement a type-safe Candidate model with validation
- Support CRUD operations for candidates
- Ensure data integrity through validation
- Provide test utilities for candidate data

## Automated Tests
- [ ] Candidate Validation Tests
  * Test creating candidates with valid data
  * Test validation failures for:
    - Empty name
    - Invalid party
    - Biography exceeding max length
    - Malformed image URL
  * *Expected Result*: All validation tests pass

- [ ] Type Guard Tests
  * Test identifying valid candidate objects
  * Test rejecting invalid objects
  * Test handling partial candidate data
  * *Expected Result*: Type guards correctly identify valid/invalid candidates

- [ ] Factory Method Tests
  * Test creating valid candidates
  * Test creating customized mock candidates
  * Test batch candidate creation
  * *Expected Result*: Factory methods produce valid candidate objects

## Manual Verification Steps
- [ ] Candidate Creation
  * Use the API to create a new candidate with valid data
  * *Expected Result*: Candidate is created and returns expected fields

- [ ] Candidate Validation
  * Attempt to create a candidate with:
    - Missing required fields
    - Invalid party name
    - Oversized biography
  * *Expected Result*: API returns appropriate validation errors

- [ ] Image URL Handling
  * Create candidate with valid image URL
  * Create candidate without image URL
  * Create candidate with invalid image URL
  * *Expected Result*: System handles all image URL scenarios appropriately
