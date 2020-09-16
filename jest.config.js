module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  silent: false,
}
