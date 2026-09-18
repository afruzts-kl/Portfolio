const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:5178', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Take full page screenshot
  await page.screenshot({ path: '/tmp/portfolio-full.png', fullPage: true });
  
  // Also take viewport screenshot
  await page.screenshot({ path: '/tmp/portfolio-viewport.png' });
  
  // Get page content for inspection
  const html = await page.content();
  console.log("Page loaded successfully");
  console.log("Title:", await page.title());
  
  // Check for CSS issues - look at computed styles
  const bodyStyles = await page.evaluate(() => {
    const body = document.body;
    const styles = window.getComputedStyle(body);
    return {
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    };
  });
  console.log("Body styles:", bodyStyles);
  
  // Check if Tailwind classes are working
  const hasTailwind = await page.evaluate(() => {
    const testDiv = document.createElement('div');
    testDiv.className = 'bg-red-500';
    document.body.appendChild(testDiv);
    const styles = window.getComputedStyle(testDiv);
    const result = styles.backgroundColor;
    testDiv.remove();
    return result;
  });
  console.log("Tailwind test (bg-red-500):", hasTailwind);
  
  // Check for specific elements
  const elements = await page.evaluate(() => {
    return {
      hasHero: !!document.querySelector('[class*="hero"]') || !!document.querySelector('section'),
      hasHeader: !!document.querySelector('header') || !!document.querySelector('[class*="header"]'),
      hasFooter: !!document.querySelector('footer') || !!document.querySelector('[class*="footer"]'),
      sectionCount: document.querySelectorAll('section').length,
    };
  });
  console.log("Elements:", elements);
  
  await browser.close();
})();
