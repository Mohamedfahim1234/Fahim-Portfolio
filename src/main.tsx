import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Basic global error handler to surface runtime errors in production builds
window.addEventListener("error", (ev) => {
  console.error("Uncaught error:", ev.error || ev.message || ev);
  const root = document.getElementById("root");
  if (root) root.innerHTML = `<pre style="color:crimson; padding:16px;">Client error: ${String(
    ev.error || ev.message || ev
  )}</pre>`;
});

window.addEventListener("unhandledrejection", (ev) => {
  console.error("Unhandled rejection:", ev.reason);
  const root = document.getElementById("root");
  if (root) root.innerHTML = `<pre style="color:crimson; padding:16px;">Unhandled promise rejection: ${String(
    ev.reason
  )}</pre>`;
});

try {
  createRoot(document.getElementById("root")!).render(
    <Router>
      <App />
    </Router>
  );
} catch (err) {
  console.error("Render error:", err);
  const root = document.getElementById("root");
  if (root) root.innerHTML = `<pre style="color:crimson; padding:16px;">Render error: ${String(
    err
  )}</pre>`;
}