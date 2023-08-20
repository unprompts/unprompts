# Usage Prompts

## Setup

The `intro` and `outro` functions will print a message to begin or end a prompt session, respectively.

```js
import { intro, outro } from 'unprompts';

intro(`create-my-app`);
// Do stuff
outro(`You're all set!`);
```

## Cancellation

The `isCancel` function is a guard that detects when a user cancels a question with `CTRL + C`. You should handle this situation for each prompt, optionally providing a nice cancellation message with the `cancel` utility.

```js
import { isCancel, cancel, text } from 'unprompts';

const value = await text(/* TODO */);

if (isCancel(value)) {
  cancel('Operation cancelled.');
  process.exit(0);
}
```

## Components

## Text

The text component accepts a single line of text.

```js
import { text } from 'unprompts';

const meaning = await text({
  message: 'What is the meaning of life?',
  placeholder: 'Not sure',
  initialValue: '42',
  validate(value) {
    if (value.length === 0) return `Value is required!`;
  },
});
```

## Confirm

The confirm component accepts a yes or no answer. The result is a boolean value of `true` or `false`.

```js
import { confirm } from 'unprompts';

const shouldContinue = await confirm({
  message: 'Do you want to continue?',
});
```

## Select

The select component allows a user to choose one value from a list of options. The result is the `value` prop of a given option.

```js
import { select } from 'unprompts';

const projectType = await select({
  message: 'Pick a project type.',
  options: [
    { value: 'ts', label: 'TypeScript' },
    { value: 'js', label: 'JavaScript' },
    { value: 'coffee', label: 'CoffeeScript', hint: 'oh no' },
  ],
});
```

## Multi-Select

The `multiselect` component allows a user to choose many values from a list of options. The result is an array with all selected `value` props.

```js
import { multiselect } from 'unprompts';

const additionalTools = await multiselect({
  message: 'Select additional tools.',
  options: [
    { value: 'eslint', label: 'ESLint', hint: 'recommended' },
    { value: 'prettier', label: 'Prettier' },
    { value: 'gh-action', label: 'GitHub Action' },
  ],
  required: false,
});
```

## Spinner

The spinner component surfaces a pending action, such as a long-running download or dependency installation.

```js
import { spinner } from 'unprompts';

const s = spinner();
s.start('Installing via npm');
// Do installation here
s.stop('Installed via npm');
```

## Utilities

## Grouping

Grouping prompts together is a great way to keep your code organized. This accepts a JSON object with a name that can be used to reference the group later. The second argument is an optional but has a `onCancel` callback that will be called if the user cancels one of the prompts in the group.

```js
import * as p from 'unprompts';

const group = await p.group(
  {
    name: () => p.text({ message: 'What is your name?' }),
    age: () => p.text({ message: 'What is your age?' }),
    color: ({ results }) =>
      p.multiselect({
        message: `What is your favorite color ${results.name}?`,
        options: [
          { value: 'red', label: 'Red' },
          { value: 'green', label: 'Green' },
          { value: 'blue', label: 'Blue' },
        ],
      }),
  },
  {
    // On Cancel callback that wraps the group
    // So if the user cancels one of the prompts in the group this function will be called
    onCancel: ({ results }) => {
      p.cancel('Operation cancelled.');
      process.exit(0);
    },
  }
);

console.log(group.name, group.age, group.color);
```
