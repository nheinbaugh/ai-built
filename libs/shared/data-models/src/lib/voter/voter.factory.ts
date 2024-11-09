import { Voter } from './voter.interface';

/**
 * Creates a new voter record with required fields
 */
export function createVoter(
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: Date,
  address: string
): Voter {
  return {
    id: '', // This should probably be handled by the backend
    firstName,
    lastName,
    email,
    dateOfBirth,
    address,
    voterId: '', // This should probably be handled by the backend
    isVerified: false,
    registrationDate: new Date()
  };
} 