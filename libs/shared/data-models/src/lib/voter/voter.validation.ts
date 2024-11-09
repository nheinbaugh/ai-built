import { Voter } from "./voter.interface";

/**
 * Validates voter age (must be 18 or older)
 */
export function validateVoterAge(dateOfBirth: Date): boolean {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    return age - 1 >= 18;
  }
  
  return age >= 18;
}

/**
 * Validates email format
 */
export function validateVoterEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates voter ID format (V followed by 6 digits)
 */
export function validateVoterId(voterId: string): boolean {
  const voterIdRegex = /^V\d{6}$/;
  return voterIdRegex.test(voterId);
}

/**
 * Validates all required voter fields are present and valid
 * Returns array of validation errors, empty array if valid
 */
export function validateVoter(voter: Partial<Voter>): string[] {
  const errors: string[] = [];

  // Required field validation
  const required = ['id', 'firstName', 'lastName', 'email', 'dateOfBirth', 'address', 'voterId'] as const;
  for (const field of required) {
    if (!voter[field]) {
      errors.push(`${field} is required`);
    }
  }

  // Age validation
  if (voter.dateOfBirth && !validateVoterAge(voter.dateOfBirth)) {
    errors.push('Voter must be at least 18 years old');
  }

  // Email validation
  if (voter.email && !validateVoterEmail(voter.email)) {
    errors.push('Invalid email format');
  }

  // VoterId validation
  if (voter.voterId && !validateVoterId(voter.voterId)) {
    errors.push('Invalid voter ID format. Must be V followed by 6 digits');
  }

  return errors;
} 