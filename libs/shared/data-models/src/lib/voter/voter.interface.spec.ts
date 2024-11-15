import { createTestVoter } from './__tests__/voter.test-factory';
import { isVoter } from './voter.interface';

describe('Voter Interface', () => {
  describe('Type Guard', () => {
    it('correctly identifies valid voter objects', () => {
      const voter = createTestVoter();
      expect(isVoter(voter)).toBe(true);
    });

    it('rejects non-voter objects', () => {
      expect(isVoter({})).toBe(false);
      expect(isVoter(null)).toBe(false);
      expect(isVoter({ id: '1' })).toBe(false);
    });

    it('rejects objects with invalid date types', () => {
      const invalidVoter = {
        ...createTestVoter(),
        dateOfBirth: '2000-01-01', // string instead of Date
        registrationDate: '2024-01-01'
      };
      expect(isVoter(invalidVoter)).toBe(false);
    });
  });
}); 