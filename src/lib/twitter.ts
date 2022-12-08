export const extractTweetId = (url: string) => {
  const match =
    /^https?:\/\/twitter\.com\/[A-Za-z0-9_]+\/status\/(?<id>\d+)/.exec(url);
  return match?.groups?.id ?? null;
};
