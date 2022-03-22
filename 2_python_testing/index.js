var Dockerode = require('dockerode');
var DockerodeCompose = require('dockerode-compose');

var docker = new Dockerode();
var compose = new DockerodeCompose(docker, './2_python_testing/docker-compose.test.yml', 'test');

(async () => {
  
  console.time('pull');
    await compose.pull();
  console.timeEnd('pull');

  console.time('up');
    var state = await compose.up();
    // console.log(state);
  console.timeEnd('up');

})();