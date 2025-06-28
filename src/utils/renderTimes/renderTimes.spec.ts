import { describe, expect, it } from 'vitest';

import { renderTimes } from './renderTimes.ts';

describe('renderTimes', () => {
  it('should render components the specified number of times', () => {
    const result = renderTimes(3, index => `Item ${index}`);

    expect(result).toHaveLength(3);
    expect(result).toEqual(['Item 0', 'Item 1', 'Item 2']);
  });

  it('should return empty array when count is 0', () => {
    const result = renderTimes(0, index => `Item ${index}`);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('should handle negative count by returning empty array', () => {
    const result = renderTimes(-1, index => `Item ${index}`);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('should call renderFunction with correct index for each iteration', () => {
    const indices: number[] = [];
    renderTimes(4, index => {
      indices.push(index);
      return index;
    });

    expect(indices).toEqual([0, 1, 2, 3]);
  });

  it('should work with React components', () => {
    const result = renderTimes(2, index => ({
      type: 'div',
      key: index.toString(),
      props: { children: `Component ${index}` },
    }));

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      type: 'div',
      key: '0',
      props: {
        children: 'Component 0',
      },
    });
    expect(result[1]).toEqual({
      type: 'div',
      key: '1',
      props: {
        children: 'Component 1',
      },
    });
  });

  it('should work with different return types', () => {
    const numberResult = renderTimes(3, index => index * 2);

    expect(numberResult).toEqual([0, 2, 4]);

    const booleanResult = renderTimes(2, index => index % 2 === 0);

    expect(booleanResult).toEqual([true, false]);

    const nullResult = renderTimes(2, () => null);

    expect(nullResult).toEqual([null, null]);
  });
});
