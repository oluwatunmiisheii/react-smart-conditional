export default {
  // Lint and format TypeScript and JavaScript files
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],

  // Format other file types
  '**/*.{json,md,yml}': ['prettier --write'],
};
