// design-sync preview shim for next/navigation (no Next router in previews).
const noop = () => {};
export const useRouter = () => ({
  push: noop,
  replace: noop,
  prefetch: noop,
  back: noop,
  forward: noop,
  refresh: noop,
});
export const usePathname = () => '/';
export const useSearchParams = () => new URLSearchParams();
export const useParams = () => ({});
export const redirect = noop;
export const permanentRedirect = noop;
export const notFound = noop;
export const useSelectedLayoutSegment = () => null;
export const useSelectedLayoutSegments = () => [];
