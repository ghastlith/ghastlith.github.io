enum Class {
  THIN = "thin",
  UNDERLINE = "underline",
  HIGHLIGHT = "highlight",
  ACCENT = "accent",
  UNSELECTABLE = "unselectable",
}

type Enabled = true;
const enabled: Enabled = true;

interface Classes extends Record<Class, Enabled> {}

const initial = {} as Classes;

/**
 * Css classes defined on the Class enum to be used in unison with class: directive.
 */
export const classes: Classes = Object.values(Class).reduce(toRecord, initial);

/**
 * Accumulate and enable class from enum onto resulting classes record.
 *
 * @param accumulator the current state
 * @param key the current key
 * @returns The updated record with class key enabled.
 */
function toRecord(accumulator: Classes, key: Class): Classes {
  accumulator[key] = enabled;
  return accumulator;
}
