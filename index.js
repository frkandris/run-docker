var Dockerode = require('dockerode');
var DockerodeCompose = require('dockerode-compose');

var docker = new Dockerode();
var compose = new DockerodeCompose(docker, './wordpress/docker-compose.yml', 'wordpress');

(async () => {
  await compose.pull();
  var state = await compose.up();
  console.log(state);
})();