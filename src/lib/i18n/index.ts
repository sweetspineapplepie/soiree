import { writable } from "svelte/store";
import {
  register,
  init,
  locale as $locale,
  getLocaleFromNavigator,
} from "svelte-i18n";
import { derived } from "svelte/store";
import en from "./en";
import id from "./id";

// Register translations (loaded inline for simplicity)
register("en", () => Promise.resolve(en));
register("id", () => Promise.resolve(id));

const STORAGE_KEY = "soiree:locale";

import { browser } from '$app/environment';

// Default strictly to 'en' to ensure SSR and initial client hydration match exactly
export const locale = writable("en");

export const tr = derived(locale, ($l) => ($l === "id" ? id : en));

export function initializeLocale() {
  if (!browser) return;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && (saved === "en" || saved === "id")) {
    locale.set(saved);
    return;
  }
  const navRaw = getLocaleFromNavigator() || "en";
  const nav = String(navRaw).split("-")[0];
  if (nav === "id") {
    locale.set("id");
  }
}

// Initialize svelte-i18n
init({
  fallbackLocale: "en",
  initialLocale: undefined, // we'll set below
});

// Sync our store with svelte-i18n locale
$locale.set("en");
locale.subscribe((v) => {
  if (!v) return;
  $locale.set(v);
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, v);
    } catch (e) {
      // ignore
    }
  }
});

export function setLocale(l: "en" | "id") {
  locale.set(l);
}
