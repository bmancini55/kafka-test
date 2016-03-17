
let kafka = require('kafka-node');
let { Client, HighLevelConsumer } = kafka;

let client = new Client('192.168.99.100:2181');
let consumer = new HighLevelConsumer(client,
  [{ topic: 'test' }],
  {
    groupId: 'test-group',
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024*1024
  });

consumer.on('message', (msg) => {
  console.log(msg);
});

consumer.on('error', console.log);