import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\$(.*)': '<rootDir>/../../$1',
    'src/(.*)': '<rootDir>/src/$1'
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  maxWorkers: 1,
  coverageReporters: ['json'],
  clearMocks: true,
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['jest-extended']
}

export default config
