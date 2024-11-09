import { Voter } from '../voter.interface';

const sampleData = {
  firstNames: ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'James', 'Sofia', 'William', 'Isabella', 'Benjamin'],
  lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'],
  streets: ['Maple Avenue', 'Oak Street', 'Cedar Lane', 'Pine Road', 'Elm Drive'],
  cities: ['Springfield', 'Riverside', 'Georgetown', 'Franklin', 'Clinton'],
  states: ['CA', 'NY', 'TX', 'FL', 'IL']
};

function generateAddress(): string {
  const number = Math.floor(100 + Math.random() * 9900);
  const street = sampleData.streets[Math.floor(Math.random() * sampleData.streets.length)];
  const city = sampleData.cities[Math.floor(Math.random() * sampleData.cities.length)];
  const state = sampleData.states[Math.floor(Math.random() * sampleData.states.length)];
  return `${number} ${street}, ${city}, ${state}`;
}

/**
 * Creates a valid voter instance for testing with realistic data
 */
export function createTestVoter(overrides: Partial<Voter> = {}): Voter {
  const firstName = sampleData.firstNames[Math.floor(Math.random() * sampleData.firstNames.length)];
  const lastName = sampleData.lastNames[Math.floor(Math.random() * sampleData.lastNames.length)];
  
  const today = new Date();
  const minAge = 18;
  const maxAge = 85;
  const birthYear = today.getFullYear() - minAge - Math.floor(Math.random() * (maxAge - minAge));
  const birthDate = new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

  return {
    id: `voter-${Math.random().toString(36).substr(2, 9)}`,
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    dateOfBirth: birthDate,
    address: generateAddress(),
    voterId: `V${String(Math.floor(100000 + Math.random() * 900000)).padStart(6, '0')}`,
    isVerified: false,
    registrationDate: new Date(),
    ...overrides
  };
}

/**
 * Creates an invalid voter instance for testing
 */
export function createInvalidTestVoter(): Partial<Voter> {
  return {
    id: '',
    firstName: '',
    lastName: '',
    email: 'invalid-email',
    dateOfBirth: new Date(), // Current date will fail age validation
    address: '',
    voterId: 'invalid-id',
    isVerified: false,
    registrationDate: new Date()
  };
}

/**
 * Creates multiple valid voter instances for testing
 */
export function createManyTestVoters(count: number, overrides: Partial<Voter> = {}): Voter[] {
  return Array.from({ length: count }, () => createTestVoter(overrides));
} 