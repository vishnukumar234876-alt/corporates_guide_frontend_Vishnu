const defaultSettings = {
  theme: 'light',
  language: 'en',
  fontSize: 14,
  notifications: true,
  autoSave: false,
};

const userPrefs = {
  theme: 'dark',
  fontSize: 18,
  autoSave: true,
};

function mergeSettings(defaults, overrides) {
  return {
    ...defaults,
    ...overrides,
    lastUpdated: new Date().toISOString()
  };
}

const merged = mergeSettings(defaultSettings, userPrefs);

console.log(merged);
console.log(defaultSettings);
console.log(userPrefs);