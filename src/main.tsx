import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function injectAnalyticsScript() {
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!analyticsEndpoint || !websiteId) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}

injectAnalyticsScript();

createRoot(document.getElementById("root")!).render(<App />);
