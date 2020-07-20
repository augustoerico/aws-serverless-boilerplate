// https://jestjs.io/docs/en/configuration.html

module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleDirectories: ['node_modules', 'src/'],
    reporters: ['default', 'jest-junit'],
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.[tj]s', '**/*.spec.[tj]s'],
};