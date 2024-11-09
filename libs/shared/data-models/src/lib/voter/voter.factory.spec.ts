import { createInvalidTestVoter, createManyTestVoters, createTestVoter } from './__tests__/voter.test-factory';
import { createVoter } from './voter.factory';
import { isVoter } from './voter.interface';
import { validateVoter } from './voter.validation';

describe('Voter Factory', () => {
  describe('createVoter', () => {
    it('should create a voter with provided values', () => {
      const firstName = 'Jane';
      const lastName = 'Smith';
      const email = 'jane.smith@example.com';
      const dateOfBirth = new Date('1990-01-01');
      const address = '123 Test St, City, ST';

      const voter = createVoter(
        firstName,
        lastName,
        email,
        dateOfBirth,
        address
      );

      expect(voter.firstName).toBe(firstName);
      expect(voter.lastName).toBe(lastName);
      expect(voter.email).toBe(email);
      expect(voter.dateOfBirth).toBe(dateOfBirth);
      expect(voter.address).toBe(address);
      expect(voter.id).toBe('');
      expect(voter.voterId).toBe('');
      expect(voter.isVerified).toBe(false);
      expect(voter.registrationDate).toBeInstanceOf(Date);
    });
  });

  // Test factory utility tests
  describe('Test Factory Utilities', () => {
    describe('createTestVoter', () => {
      it('creates valid voter instances', () => {
        const voter = createTestVoter();
        expect(isVoter(voter)).toBe(true);
        expect(validateVoter(voter)).toHaveLength(0);
      });

      it('allows overriding default values', () => {
        const customVoter = createTestVoter({
          firstName: 'Jane',
          lastName: 'Smith'
        });
        expect(customVoter.firstName).toBe('Jane');
        expect(customVoter.lastName).toBe('Smith');
      });

      it('creates unique IDs for each voter', () => {
        const voter1 = createTestVoter();
        const voter2 = createTestVoter();
        expect(voter1.id).not.toBe(voter2.id);
      });
    });

    describe('createInvalidTestVoter', () => {
      it('creates an invalid voter instance', () => {
        const invalidVoter = createInvalidTestVoter();
        const errors = validateVoter(invalidVoter);
        expect(errors.length).toBeGreaterThan(0);
      });

      it('creates predictably invalid data', () => {
        const invalidVoter = createInvalidTestVoter();
        expect(invalidVoter.email).toBe('invalid-email');
        expect(invalidVoter.voterId).toBe('invalid-id');
      });
    });

    describe('createManyTestVoters', () => {
      it('creates the specified number of voters', () => {
        const voters = createManyTestVoters(3);
        expect(voters).toHaveLength(3);
      });

      it('creates all valid voters', () => {
        const voters = createManyTestVoters(3);
        voters.forEach((voter) => {
          expect(isVoter(voter)).toBe(true);
          expect(validateVoter(voter)).toHaveLength(0);
        });
      });

      it('applies overrides to all created voters', () => {
        const voters = createManyTestVoters(2, { firstName: 'Jane' });
        voters.forEach((voter) => {
          expect(voter.firstName).toBe('Jane');
        });
      });
    });
  });
}); 