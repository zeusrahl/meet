import puppeteer from 'puppeteer';
jest.setTimeout(30000);

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitForSelector('.event');
  })

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).not.toBeNull();
    const className = await eventDetails.getProperty('className').then((e) => e.jsonValue());
    expect(className.split(' ')).toContain('hide');
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-details-btn');
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).not.toBeNull();
    const className = await eventDetails.getProperty('className').then((e) => e.jsonValue());
    expect(className.split(' ')).toContain('show');
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .show-details-btn');
    await page.click('.event .hide-details-btn');
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).not.toBeNull();
    const className = await eventDetails.getProperty('className').then((e) => e.jsonValue());
    expect(className.split(' ')).toContain('hide');
  });
})