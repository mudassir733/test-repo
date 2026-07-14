/** Small formatting helpers used across the app. */

/** Clamp a string to `max` characters, appending an ellipsis when cut. */
export function truncate(text: string, max: number): string {
  if (max <= 0) return "";
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

/** "3 items" / "1 item" — pluralise a noun against a count. */
export function pluralise(count: number, noun: string, plural?: string): string {
  const word = count === 1 ? noun : (plural ?? `${noun}s`);
  return `${count} ${word}`;
}

/** Human-readable byte size (1536 -> "1.5 KB"). */
export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  const rounded = unit === 0 ? value : Math.round(value * 10) / 10;
  return `${rounded} ${units[unit]}`;
}

/** Title-case a slug: "hello-world" -> "Hello World". */
export function titleFromSlug(slug: string): string {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}
