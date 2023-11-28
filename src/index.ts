import "./index.css";
import { PostHog } from "posthog-node";

const POSTHOG_KEY = "phc_9Tyn6okdZz8WGrwv4B5dfOU5pEwox04bwRd0Nt1Wdlw";
const params = new URLSearchParams(window.location.search);
const uuid = params.has("uuid") ? params.get("uuid") : "UNKNOWN";
const client = new PostHog(POSTHOG_KEY, { host: "https://eu.posthog.com" });
client.capture({ distinctId: uuid, event: "uninstall" });
client.shutdownAsync();

setTimeout(() => {
  location.replace("https://i.getdifree.com/uninstall-survey");
}, 100);
