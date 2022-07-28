const os = require("os");
const { moveMessagePortToContext } = require("worker_threads");

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);