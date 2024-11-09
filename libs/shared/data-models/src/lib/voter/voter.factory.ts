import { Voter } from './voter.interface';

/**
 * Creates a valid voter instance for testing
 */
export function createVoter(overrides: Partial<Voter> = {}): Voter {
  const defaultDate = new Date();
  defaultDate.setFullYear(defaultDate.getFullYear() - 20); // Default to 20 years old

  return {
    id: `voter-${Math.random().toString(36).substr(2, 9)}`,
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe.${Date.now()}@example.com`,
    dateOfBirth: defaultDate,
    address: '123 Main St',
    voterId: `V${Math.floor(100000 + Math.random() * 900000)}`,
    isVerified: false,
    registrationDate: new Date(),
    ...overrides
  };
}

/**
 * Creates an invalid voter instance for testing
 */
export function createInvalidVoter(): Partial<Voter> {
  return {
    id: '',
    firstName: '',
    lastName: '',
    email: 'invalid-email',
    dateOfBirth: new Date(), // Will fail age validation
    address: '',
    voterId: 'invalid-id',
    isVerified: false,
    registrationDate: new Date()
  };
}

/**
 * Creates multiple valid voter instances for testing
 */
export function createManyVoters(count: number, overrides: Partial<Voter> = {}): Voter[] {
  return Array.from({ length: count }, () => createVoter(overrides));
} 