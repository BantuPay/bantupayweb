// design-sync preview shim for next-intl/server (no server request context in
// previews). Async server components that use these still can't mount
// client-side — this only keeps the bundle from importing `server-only` and
// throwing at load, which would poison every component's global.
export async function getTranslations() {
  const t = (k) => k;
  t.raw = () => [];
  t.rich = (k) => k;
  t.markup = (k) => k;
  t.has = () => false;
  return t;
}
export async function getMessages() {
  return {};
}
export async function getLocale() {
  return 'en';
}
export async function getNow() {
  return new Date();
}
export async function getTimeZone() {
  return 'UTC';
}
export function setRequestLocale() {}
export function unstable_setRequestLocale() {}
