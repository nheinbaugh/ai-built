import { createInvalidVoter, createManyVoters, createVoter } from './voter.factory';
import { isVoter } from './voter.interface';
import { validateVoter } from './voter.validation';

describe('Voter Factory', () => {
  describe('createVoter', () => {
    it('creates valid voter instances', () => {
      const voter = createVoter();
      expect(isVoter(voter)).toBe(true);
      expect(validateVoter(voter)).toHaveLength(0);
    });

    it('allows overriding default values', () => {
      const customVoter = createVoter({
        firstName: 'Jane',
        lastName: 'Smith'
      });
      expect(customVoter.firstName).toBe('Jane');
      expect(customVoter.lastName).toBe('Smith');
    });

    it('creates unique IDs for each voter', () => {
      const voter1 = createVoter();
      const voter2 = createVoter();
      expect(voter1.id).not.toBe(voter2.id);
    });
  });

  describe('createInvalidVoter', () => {
    it('creates an invalid voter instance', () => {
      const invalidVoter = createInvalidVoter();
      const errors = validateVoter(invalidVoter);
      expect(errors.length).toBeGreaterThan(0);
    });

    it('creates predictably invalid data', () => {
      const invalidVoter = createInvalidVoter();
      expect(invalidVoter.email).toBe('invalid-email');
      expect(invalidVoter.voterId).toBe('invalid-id');
    });
  });

  describe('createManyVoters', () => {
    it('creates the specified number of voters', () => {
      const voters = createManyVoters(3);
      expect(voters).toHaveLength(3);
    });

    it('creates all valid voters', () => {
      const voters = createManyVoters(3);
      voters.forEach(voter => {
        expect(isVoter(voter)).toBe(true);
        expect(validateVoter(voter)).toHaveLength(0);
      });
    });

    it('applies overrides to all created voters', () => {
      const voters = createManyVoters(2, { firstName: 'Jane' });
      voters.forEach(voter => {
        expect(voter.firstName).toBe('Jane');
      });
    });
  });
}); 