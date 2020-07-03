module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      diagnostics: false,
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ]
    },
    transformIgnorePatterns: ['node_modules/']
  },
  moduleNameMapper: {
    '@app(.*)': '<rootDir>/src/app/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  transformIgnorePatterns: ['node_modules/'],
  moduleDirectories: ['node_modules', 'src']
};
