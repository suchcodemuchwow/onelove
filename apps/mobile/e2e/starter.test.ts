import { by, device, element, expect } from "detox";

describe("Onelove mobile app", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should show hello world text", async () => {
    const el = element(by.id("welcome"));
    await expect(el).toHaveText("Hello World! 👋");
  });
});
