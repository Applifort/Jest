import _ from 'lodash';
import { MakeStack } from '../src/stack';

test('makeStack()', () => {
  const stack = new MakeStack();
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
  expect(stack.length()).toBe(0);
});

test('isEmpty()', () => {
  const stack = new MakeStack();
  expect(stack.isEmpty()).toBe(true);
});