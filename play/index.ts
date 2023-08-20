import { cac } from '../src/index';

const cli = cac('pkg-name');

cli
  .version('0.2.2')
  .option('--foo', 'Foo option')
  .option('--bar', 'Bar option')
  .help();


cli.command("").action((options) => {
  console.log('options', options);
});

cli.parse();
