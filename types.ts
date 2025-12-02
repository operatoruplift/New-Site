import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface DownloadOption {
  id: string;
  label: string;
  url: string;
  version: string;
  type: 'macos' | 'windows' | 'linux';
}

export interface HeroData {
  visionTag: string;
  headline: string;
  subhead: string;
  description: string;
  downloads: {
    macos?: DownloadOption;
    windows: DownloadOption;
    linux?: DownloadOption;
  };
}

export interface TrustedCompany {
  name: string;
  logo: React.ReactNode;
}