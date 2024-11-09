import { validateVoter } from './validation';
import { Voter } from './voter.interface';

/**
 * Options for creating a voter
 */
export interface CreateVoterOptions {
  id?: string;
  firstName: string;  // Required
  lastName: string;   // Required
  email: string;      // Required
  dateOfBirth: Date;  // Required
  address: string;    // Required
  voterId?: string;
  isVerified?: boolean;
  registrationDate?: Date;
}

/**
 * Creates a valid voter object with default or custom values
 */
export function createVoter(options: CreateVoterOptions): Voter {
  // Validate required fields first
  if (!options.firstName || !options.lastName || !options.email || 
      !options.dateOfBirth || !options.address) {
    throw new Error('Missing required voter fields');
  }

  const voter: Voter = {
    firstName: options.firstName,
    lastName: options.lastName,
    email: options.email,
    dateOfBirth: options.dateOfBirth,
    address: options.address,
    // Optional fields get defaults
    id: options.id ?? '',
    voterId: options.voterId ?? '',
    isVerified: options.isVerified ?? false,
    registrationDate: options.registrationDate ?? new Date()
  };

  const validationResult = validateVoter(voter);
  if (!validationResult.valid) {
    throw new Error(`Invalid voter data: ${JSON.stringify(validationResult.errors)}`);
  }

  return voter;
}