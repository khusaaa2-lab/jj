import { test, expect } from "@playwright/test";
import { readyCampus, shot } from "./helpers.js";

test("long Russian building names remain readable without overlapping other labels", async ({page}) => {
  await page.addInitScript(()=>localStorage.setItem('serenity:language:v1','ru'));
  await page.goto('/campus');await readyCampus(page);
  const labels=await page.locator('.campus-anchor:not(.compact):not(.offscreen) .campus-pin').evaluateAll(nodes=>nodes.filter(el=>getComputedStyle(el).display!=='none').map(el=>el.getBoundingClientRect().toJSON()));
  expect(labels.length).toBeGreaterThanOrEqual(3);
  for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
    const a=labels[i],b=labels[j];
    expect(a.right<=b.left || b.right<=a.left || a.bottom<=b.top || b.bottom<=a.top).toBe(true);
  }
  await shot(page,'campus-ru-final');
});
