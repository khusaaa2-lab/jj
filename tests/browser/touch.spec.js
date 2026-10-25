import { test, expect } from '@playwright/test';
import { readyCampus, shot } from './helpers.js';

test('real touch orbits and pinches; the page scrolls outside the map', async ({browser}) => {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
  const page=await context.newPage();await page.goto('/campus');await readyCampus(page);
  const viewport=page.locator('.reference-viewport'),host=page.locator('#campus-scene'),client=await context.newCDPSession(page);
  const b=await viewport.boundingBox(),y=b.y+b.height*.65;
  const before=await host.getAttribute('data-camera');
  await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:185,y}]});
  for(let i=1;i<=8;i++)await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{id:1,x:185-i*9,y}]});
  await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await expect(host).not.toHaveAttribute('data-camera',before);
  const zoom=Number(await host.getAttribute('data-zoom'));
  const points=n=>[{id:1,x:130-n,y},{id:2,x:230+n,y:y+5}];
  await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:points(0)});
  for(let i=1;i<=7;i++)await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:points(i*6)});
  await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  expect(Number(await host.getAttribute('data-zoom'))).toBeGreaterThan(zoom);
  await expect(page.locator('.explorer')).toHaveAttribute('data-mode','overview');
  await shot(page,'campus-mobile-touch');
  const outside=await page.locator('.directory-top').boundingBox();
  await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:150,y:outside.y+20}]});
  for(let i=1;i<=8;i++) { await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:150,y:outside.y+20-i*22}]});await page.waitForTimeout(20); }
  await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await expect.poll(()=>page.evaluate(()=>scrollY)).toBeGreaterThan(50);
  await context.close();
});
