/** Numeric helpers with sane behaviour on empty input. */

/** Sum, tolerant of an empty array. */
export function sum(values: number[]): number {
  return values.reduce((total, n) => total + n, 0);
}

/** Mean, or 0 when there's nothing to average. */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return sum(values) / values.length;
}

/** Constrain `value` to the inclusive range [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must not exceed max");
  return Math.min(Math.max(value, min), max);
}

/** Percentage of `part` out of `total`, rounded, 0 when total is 0. */
export function percent(part: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((part / total) * 100);
}
