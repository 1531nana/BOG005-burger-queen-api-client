module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest",
        "\\.(jpg|jpeg|png|svg)$": "babel-jest"
      }
}

