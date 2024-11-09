 
export default {
  displayName: 'shared-data-models',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/shared/data-models',
  coveragePathIgnorePatterns: [
    '/__tests__/' // Exclude test utilities from coverage
  ],
};
