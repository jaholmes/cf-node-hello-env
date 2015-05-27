// adapted from http://nodejs.org/api/synopsis.html

http  = require("http")
cfenv = require("cfenv")

// get environmental information for this app
appEnv   = cfenv.getAppEnv()
instance = appEnv.app.instance_index || 0
if (!appEnv.isLocal) {
    displayUps("ups1")
    displayRedis("cf-arc-redis-2")
    displayEnvVars()
}
// create a server with a simple request handler
server = http.createServer(onRequest)

// start the server on the calculated port and host
server.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url)
})

//-----------------------------------------------
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})

  response.end("Hello World [" + instance + "]\n")
}

function displayUps(name) {
    console.log("ups name used by getService: " + name)
    ups = cfenv.getAppEnv().getService(name)
    console.log("ups object: " + ups)
    console.log("ups.name: " + ups.name)
    console.log("ups.credentials.host: " + ups.credentials.host)
    console.log("ups.credentials.port: " + ups.credentials.port)
}

function displayRedis(name) {
    console.log("redis name used by getService: " + name)
    redis = cfenv.getAppEnv().getService(name)
    console.log("redis object: " + redis)
    console.log("redis.name: " + redis.name)
    console.log("redis.credentials.host: " + redis.credentials.host)
    console.log("redis.credentials.port: " + redis.credentials.port)
    console.log("redis.credentials.password: " + redis.credentials.password)
}

function displayEnvVars() {
    console.log("process.env.cfEnv: " +  process.env.cfEnv)
}