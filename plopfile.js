export default function (plop) {
  // create your generators here
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'gameId',
        message: 'Game id',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'static/games/{{gameId}}/{{gameId}}.gear.yaml',
        templateFile: 'templates/gear.hbs',
      },
      {
        type: 'add',
        path: 'static/games/{{gameId}}/{{gameId}}.game.yaml',
        templateFile: 'templates/game.hbs',
      },
    ],
  });
}
