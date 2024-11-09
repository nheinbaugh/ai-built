import { createInvalidVoter, createVoter } from './voter.factory';
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
      const voter = createVoter();
      const errors = validateVoter(voter);
      expect(errors).toHaveLength(0);
    });

    it('identifies missing required fields', () => {
      const voter = {};
      const errors = validateVoter(voter);
      expect(errors).toContain('id is required');
      expect(errors).toContain('firstName is required');
    });

    it('identifies multiple validation errors', () => {
      const invalidVoter = createInvalidVoter();
      const errors = validateVoter(invalidVoter);
      expect(errors.length).toBeGreaterThan(1);
      expect(errors).toContain('Invalid email format');
      expect(errors).toContain('Invalid voter ID format. Must be V followed by 6 digits');
    });
  });
}); 