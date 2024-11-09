/**
 * Represents a registered voter in the system
 */
export interface Voter {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  address: string;
  voterId: string;
  isVerified: boolean;
  registrationDate: Date;
}

/**
 * Type guard to verify if an unknown object is a Voter
 */
export function isVoter(obj: unknown): obj is Voter {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'firstName' in obj &&
    'lastName' in obj &&
    'email' in obj &&
    'dateOfBirth' in obj &&
    'address' in obj &&
    'voterId' in obj &&
    'isVerified' in obj &&
    'registrationDate' in obj &&
    obj.dateOfBirth instanceof Date &&
    obj.registrationDate instanceof Date
  );
} 