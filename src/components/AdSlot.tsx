"use client";

import { useEffect, useRef } from "react";
import { ADS, type BannerAd } from "@/lib/ads";

type AdSlotProps = {
  label: string;
  id: string;
  width: number | string;
  height: number | string;
  color?: string;
  className?: string;
};

const loadedScripts = new Set<string>();
let bannerChain: Promise<void> = Promise.resolve();

function loadScriptOnce(src: string, attrs: Record<string, string> = {}) {
  if (loadedScripts.has(src) || document.querySelector(`script[src="${src}"]`)) {
    loadedScripts.add(src);
    return;
  }

  const script = document.createElement("script");
  script.src = src;
  for (const [key, value] of Object.entries(attrs)) {
    script.setAttribute(key, value);
  }
  document.body.appendChild(script);
  loadedScripts.add(src);
}

function loadBanner(container: HTMLElement, ad: BannerAd) {
  bannerChain = bannerChain.then(
    () =>
      new Promise<void>((resolve) => {
        if (!container.isConnected) {
          resolve();
          return;
        }

        container.replaceChildren();

        window.atOptions = {
          key: ad.key,
          format: "iframe",
          height: ad.height,
          width: ad.width,
          params: {},
        };

        const script = document.createElement("script");
        script.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        container.appendChild(script);

        // Don't block the queue forever if the network hangs.
        window.setTimeout(resolve, 2500);
      }),
  );

  return bannerChain;
}

export default function AdSlot({
  label,
  id,
  width,
  height,
  className = "",
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ad = ADS[id];

  useEffect(() => {
    if (!ad) return;

    if (ad.type === "script") {
      loadScriptOnce(ad.scriptSrc);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    if (ad.type === "banner") {
      void loadBanner(container, ad);
      return () => {
        container.replaceChildren();
      };
    }

    if (ad.type === "native") {
      container.replaceChildren();

      const mount = document.createElement("div");
      mount.id = ad.containerId;
      container.appendChild(mount);

      document
        .querySelectorAll(`script[src="${ad.scriptSrc}"]`)
        .forEach((node) => node.remove());

      const script = document.createElement("script");
      script.src = ad.scriptSrc;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      container.appendChild(script);

      return () => {
        container.replaceChildren();
      };
    }
  }, [ad, id]);

  if (!ad) {
    return (
      <div
        className={`ad-slot ad-slot--empty ${className}`}
        style={{ width, height }}
        data-ad-id={id}
      >
        <span className="ad-slot__label">{label}</span>
      </div>
    );
  }

  if (ad.type === "smartlink") {
    return (
      <a
        className={`ad-slot ad-slot--smartlink ${className}`}
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          width,
          height,
          minWidth: typeof width === "number" ? width : undefined,
          minHeight: typeof height === "number" ? height : undefined,
        }}
        data-ad-id={id}
      >
        <span className="ad-slot__smartlink-label">Sponsored</span>
        <span className="ad-slot__smartlink-cta">View offer →</span>
      </a>
    );
  }

  if (ad.type === "script") {
    return (
      <div
        className={`ad-slot ad-slot--script ${className}`}
        data-ad-id={id}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`ad-slot ad-slot--live ${className}`}
      style={{
        width,
        height,
        minWidth: typeof width === "number" ? width : undefined,
        minHeight: typeof height === "number" ? height : undefined,
      }}
      data-ad-id={id}
      aria-label={label}
    />
  );
}
