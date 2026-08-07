export type BannerAd = {
  type: "banner";
  key: string;
  width: number;
  height: number;
};

export type NativeAd = {
  type: "native";
  containerId: string;
  scriptSrc: string;
};

export type ScriptAd = {
  type: "script";
  scriptSrc: string;
};

export type SmartlinkAd = {
  type: "smartlink";
  url: string;
};

export type AdConfig = BannerAd | NativeAd | ScriptAd | SmartlinkAd;

export const ADS: Record<string, AdConfig> = {
  "728x90_1": {
    type: "banner",
    key: "ffe3d926777b7b2e35a6a1f9a16912ae",
    width: 728,
    height: 90,
  },
  "160x600_1": {
    type: "banner",
    key: "5f206ca58c81441e279b3a462fff6009",
    width: 160,
    height: 600,
  },
  "320x50_1": {
    type: "banner",
    key: "ecf8690592451a2e3015cef5e38364d5",
    width: 320,
    height: 50,
  },
  "160x300_1": {
    type: "banner",
    key: "393daab276e53fdf6ac1a9c7de5bfc40",
    width: 160,
    height: 300,
  },
  "468x60_1": {
    type: "banner",
    key: "84852c64dddbd71e5444dd527238998e",
    width: 468,
    height: 60,
  },
  "300x250_1": {
    type: "banner",
    key: "99e8c79fdc062122a02b7bf1411a1534",
    width: 300,
    height: 250,
  },
  NativeBanner_1: {
    type: "native",
    containerId: "container-12f8e62d2a3e5a0cb1033e2bef139e53",
    scriptSrc:
      "https://pl30725431.effectivecpmnetwork.com/12f8e62d2a3e5a0cb1033e2bef139e53/invoke.js",
  },
  Popunder_1: {
    type: "script",
    scriptSrc:
      "https://pl30725430.effectivecpmnetwork.com/1b/df/56/1bdf56c7dc3ef8ecfd4bfa8a3d89c666.js",
  },
  SocialBar_1: {
    type: "script",
    scriptSrc:
      "https://pl30725433.effectivecpmnetwork.com/a8/bf/bc/a8bfbca12b3211b61f0349e275e80658.js",
  },
  Smartlink_1: {
    type: "smartlink",
    url: "https://www.effectivecpmnetwork.com/idwfj94y?key=f5dab059d73c9dc5884e8f9dae723cab",
  },
};

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}
