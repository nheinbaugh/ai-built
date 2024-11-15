import { createInvalidTestVoter } from './__tests__/voter.test-factory';
import { VOTER_VALIDATION_MESSAGES } from "./validation/voter-validation-messages.const";
import { createVoter } from './voter.factory';
import { validateVoter, validateVoterAge, validateVoterEmail, validateVoterId } from './voter.validation';

describe('Voter Validation', () => {
  describe('Age Validation', () => {
    it('accepts voters 18 years or older', () => {
      const date18YearsAgo = new Date();
      date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
      expect(validateVoterAge(date18YearsAgo)).toBe(true);
    });

    it('rejects voters under 18 years old', () => {
      const date17YearsAgo = new Date();
      date17YearsAgo.setFullYear(date17YearsAgo.getFullYear() - 17);
      expect(validateVoterAge(date17YearsAgo)).toBe(false);
    });

    it('handles edge cases for age calculation', () => {
      const today = new Date();
      const date18YearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate() + 1
      );
      expect(validateVoterAge(date18YearsAgo)).toBe(false);
    });
  });

  describe('Email Validation', () => {
    it('accepts valid email formats', () => {
      expect(validateVoterEmail('test@example.com')).toBe(true);
      expect(validateVoterEmail('test.name@sub.example.com')).toBe(true);
    });

    it('rejects invalid email formats', () => {
      expect(validateVoterEmail('invalid-email')).toBe(false);
      expect(validateVoterEmail('@example.com')).toBe(false);
      expect(validateVoterEmail('test@')).toBe(false);
    });
  });

  describe('VoterId Validation', () => {
    it('accepts valid voter ID format', () => {
      expect(validateVoterId('V123456')).toBe(true);
    });

    it('rejects invalid voter ID formats', () => {
      expect(validateVoterId('123456')).toBe(false);
      expect(validateVoterId('V12345')).toBe(false);
      expect(validateVoterId('V1234567')).toBe(false);
      expect(validateVoterId('v123456')).toBe(false);
    });
  });

  describe('Complete Voter Validation', () => {
    it('validates complete voter data', () => {
      const voterData = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        dateOfBirth: new Date('1990-01-01'),
        address: '123 Test St, City, ST'
      };

      const voter = createVoter(voterData);
      voter.voterId = 'V123456'; // Add valid voter ID since factory doesn't set it
      voter.id = 'test-id'; // Add ID since factory doesn't set it
      
      const result = validateVoter(voter);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('identifies missing required fields', () => {
      const voter = {};
      const result = validateVoter(voter);
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual({
        field: 'firstName',
        message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY
      });
      expect(result.errors).toContainEqual({
        field: 'lastName',
        message: VOTER_VALIDATION_MESSAGES.NAME.EMPTY
      });
    });

    it('identifies multiple validation errors', () => {
      const invalidVoter = createInvalidTestVoter();
      const result = validateVoter(invalidVoter);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(1);
      expect(result.errors).toContainEqual({
        field: 'email',
        message: VOTER_VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT
      });
    });
  });
}); 