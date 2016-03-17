
let kafka = require('kafka-node');
let { Client, HighLevelProducer } = kafka;

let client = new Client('192.168.99.100:2181');
let producer = new HighLevelProducer(client, { requireAcks: 1, ackTimeoutMs: 100 });

producer.on('ready', () => {

  producer.createTopics([ 'test' ], false, (err, data) => {
    if(err) return console.log(err);
    else return console.log('Created test topic');
  });

  for(let i = 0; i < 5; i++) {
    producer.send([ { topic: 'test', messages: [ 'Hello World' ]} ], (err) => {
      if(err) console.log(err);
      else console.log('Sent message');
    });
  }

});

producer.on('error', console.log);

