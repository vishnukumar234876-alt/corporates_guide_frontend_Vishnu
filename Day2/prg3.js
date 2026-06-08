const config = {
  env: 'dev',
  port: 3000,
  debug: true
};

config.port = 8080; 

console.log(config);

try {
  config = {};
} catch (err) {
  console.log(err.message);
}

const frozenConfig = Object.freeze({
  ...config
});

frozenConfig.port = 9999;

console.log("config:", config);
console.log("frozenConfig:", frozenConfig);