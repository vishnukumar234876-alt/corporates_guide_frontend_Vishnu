function logger(level, ...messages) {
  console.log(`[${level}] ${messages.join(' | ')}`);
}

logger('INFO', 'Server started', 'Port: 3000');
logger('WARN', 'Memory usage high');
logger('ERROR', 'DB connection failed', 'Retry in 5s', 'Attempt 1/3');

function multiAdd(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(multiAdd(1, 2, 3));
console.log(multiAdd(10, 20, 30, 40));