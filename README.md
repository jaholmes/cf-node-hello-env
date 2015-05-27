cf-node-hello-env
================================================================================

A simple Hello World node app for Cloud Foundry that outputs various CF env vars based on https://github.com/pmuellr/cf-node-hello


    $ npm install

From cf-node-hello-env dir:

    $ cf push --no-start
    $ cf set-env cf-node-hello-env cfEnv dev

Assuming you've created a Redis and UPS with these names...

    $ cf bind-service cf-node-hello-env cf-arc-redis-2
    $ cf bind-service cf-node-hello-env ups1
    $ cf push

You should see output with correct values...

    $ cf logs cf-node-hello-env --recent

