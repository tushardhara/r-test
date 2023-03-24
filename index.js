const Redis = require('ioredis');
const client = new Redis({
    host: 'redis-master.rehook-redis.svc',
    port: 6379,
    password: 'dSO7HOi7aY',
    keyPrefix: "rehook:"
});

client.ping((error, result) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Redis connection is working:", result);
  }
});