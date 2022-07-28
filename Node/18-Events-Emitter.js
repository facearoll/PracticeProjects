const eventEmitter = require("events");
const { EventEmitter } = require("stream");

const customEmmiter = new EventEmitter()

customEmmiter.on("response", ()  =>{
    console.log("data recieved");
})

customEmmiter.on("response", ()  =>{
    console.log("Some other logic here");
})


customEmmiter.emit("response")