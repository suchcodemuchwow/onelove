// For more information, see https://crawlee.dev/
import { PlaywrightCrawler } from "crawlee";

// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
const crawler = new PlaywrightCrawler({
  // Use the requestHandler to process each of the crawled pages.
  requestHandler: async (ctx) => {
    const { request, page } = ctx;
    const title = await page.title();

    ctx.log.info(`Title of ${request.loadedUrl} is '${title}'`);

    await ctx.pushData({ title, url: request.loadedUrl });

    // Extract links from the current page
    // and add them to the crawling queue.
    await ctx.enqueueLinks();
  },
  // Comment this option to scrape the full website.
  maxRequestsPerCrawl: 20,
  // Uncomment this option to see the browser window.
  // headless: false,
});

// Add first URL to the queue and start the crawl.
await crawler.run(["https://suchcodemuchwow.vercel.app"]);
