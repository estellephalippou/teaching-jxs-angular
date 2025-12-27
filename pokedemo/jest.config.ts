import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|js|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'svg'],
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/out-tsc/']
};

export default config;
