/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Client } from 'twitter-api-sdk';

const client = new Client(process.env.TWITTER_BEARER_TOKEN!);

interface PostTweetProps {
  tweetBody: string;
}

export async function PostTweet({ tweetBody }: PostTweetProps) {
  await client.tweets.createTweet({
    text: tweetBody,
  });
}
