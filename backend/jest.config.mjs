export default {
  roots: ['<rootDir>/src/tests'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: './tsconfig.json' }]
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
