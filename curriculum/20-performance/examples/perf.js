// Report LCP with the PerformanceObserver API (Chromium and Firefox support largest-contentful-paint).
const report = document.querySelector("#lcp-report");
if ("PerformanceObserver" in window && PerformanceObserver.supportedEntryTypes?.includes("largest-contentful-paint")) {
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const last = entries[entries.length - 1];
    report.textContent = `LCP: ${Math.round(last.startTime)} ms (element: ${last.element?.tagName.toLowerCase() ?? "unknown"})`;
  }).observe({ type: "largest-contentful-paint", buffered: true });
} else {
  report.textContent = "LCP: not supported in this browser. Use Lighthouse instead.";
}
