import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  maxWorkers: 1,
  coverageReporters: ['json'],
  clearMocks: true,
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['jest-extended']
}

export default config
