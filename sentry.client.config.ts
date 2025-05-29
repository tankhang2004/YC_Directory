// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // dsn: "https://a764d6aa1d66b9258b4cb094becdcb8e@o4507537249927168.ingest.de.sentry.io/4507537257922640",
  dsn: "https://d6339c9c6b28de949d481656ec7ce2a3@o4509404806250496.ingest.us.sentry.io/4509404812476416",
  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    // Sentry.feedbackIntegration({
    //   // Additional SDK configuration goes in here, for example:
    //   colorScheme: "system",
    //   options: {
    //     position: "bottom-right",
    //   },
    // }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
