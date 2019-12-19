import reverse from '../../src';
import _ from 'lodash';
import without from '../../src/without';
import { gt } from '../../src/functions';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('_.without', () => {
    expect(_.without([4, 3, 5, 1], 3, 5)).toEqual([4, 1]);
    expect(_.without([1, 1, 2, 2, 4, 4, 4], 4, 2)).toEqual([1, 1]);
});

test('without', () => {
  expect(without([4, 3, 5, 1], 3, 5)).toEqual([4, 1]);
  expect(without([1, 1, 2, 2, 4, 4, 4], 4, 2)).toEqual([1, 1]);
});

test('gt', () => {
  expect(gt(1, 0)).toBeTruthy();
  expect(gt(0, -5)).toBeTruthy();
});