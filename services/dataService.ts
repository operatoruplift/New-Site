import { HeroData } from '../types';

const MOCK_DATA: HeroData = {
  visionTag: "VISION",
  headline: "Get Your Own Agent Wallet",
  subhead: "Run your AI Agents in a secured Enviornment and connect them with your Agentic Vault",
  description: "Download an open-source platform where locally-run agents collaborate through shared context with unlimited personal memory.",
  downloads: {
    // macos: {
    //   id: "macos",
    //   label: "Download for macOS",
    //   url: "#",
    //   version: "v2.1.0 (Universal)",
    //   type: "macos"
    // },
    windows: {
      id: "windows ",
      label: "Download for Windows",
      url: "#",
      version: "v0.0.1-beta (x64)",
      type: "windows"
    },
    // linux: {
    //   id: "linux",
    //   label: "Download for Linux",
    //   url: "#",
    //   version: "v2.1.0 (.deb/rpm)",
    //   type: "linux"
    // }
  }
};

export const fetchHeroData = async (): Promise<HeroData> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 100); 
  });
};