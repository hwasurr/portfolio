module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
