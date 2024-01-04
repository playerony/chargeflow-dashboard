module.exports = {
  "*.{ts,tsx,js,jsx}": ["npx @biomejs/biome lint --apply", "npx @biomejs/biome format --write"],
  "*.{ts,tsx}": [() => "npx tsc --skipLibCheck --noEmit"],
  "package.json": ["npx prettier-package-json --write"],
};
