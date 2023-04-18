/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/website/'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/website/'],
};

export default jestConfig;
