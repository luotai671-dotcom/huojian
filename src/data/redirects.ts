export interface RedirectRule {
  from: string;
  to: string;
  status: number;
}

export const redirects: RedirectRule[] = [
  // 301 Redirect rules for future migrations
];
