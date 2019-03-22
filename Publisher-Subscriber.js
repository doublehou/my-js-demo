//实现发布者
function Publisher() {
  //存放所有的订阅者
  this.subscribers = [];
  //添加订阅者，且仅订阅1次
  this.addSubscriber = function(subscriber) {
    let isExist = this.subscribers.some(item => item == subscriber);
    if (!isExist) {
      this.subscribers.push(subscriber);
    }
    return this;
  };
  //发布消息
  this.deliver = function(data) {
    this.subscribers.forEach(fn => fn(data));
    return this;
  };
}
//构建订阅者
let subscriberA = function(data) {
  console.log(`我是订阅者A, data: ${data}`);
};
let subscriberB = function(data) {
  console.log(`我是订阅者B, data: ${data}`);
};
let publisher = new Publisher();
//添加订阅者
publisher.addSubscriber(subscriberA);
publisher.addSubscriber(subscriberB);
publisher.deliver("第一条信息");
