/**
 * string ?
 *
 */

type ClassNameParams =
  | string
  | undefined
  | null
  | {
      [key: string]: boolean;
    };

export const classnames = (...rest: ClassNameParams[]): string => {
  const classes = rest.reduce<string[]>((accumulator, currentValue) => {
    const isValid = currentValue ?? false;
    if (!isValid) return accumulator;

    if (typeof currentValue === 'string') accumulator.push(currentValue);

    if (typeof currentValue !== 'object') return accumulator;
    for (const key in currentValue) {
      const value = currentValue[key];

      if (value) {
        accumulator.push(key);
      }
    }

    return accumulator;
  }, []);

  return classes.join(' ');
};
