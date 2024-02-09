import isFunction from 'is-function';

export function repeat(
  action: string | Function,
  times: number,
  delay: number = 1
) {
  if (isFunction(action)) {
    for (let i = 0; i < times; i++) {
      setTimeout(action, i * delay);
    }
  } else {
    if ('string' !== typeof action)
      throw new TypeError(
        `Expected a "string" but got ${typeof action} instead.`
      );

    for (let i = 0; i < times; i++) {
      setTimeout(() => eval(action), i * delay);
    }
  }
}
