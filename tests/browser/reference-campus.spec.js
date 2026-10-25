import {test,expect} from '@playwright/test';
import {readyCampus,shot,noOverflow,noGL} from './helpers.js';

test('actual mesh renderer orbits, focuses the library and keeps all roofs closed',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/campus');await readyCampus(page);
  const host=page.locator('#campus-scene'),viewport=page.locator('.reference-viewport');
  const before=await host.evaluate(e=>e.serenity.diagnostics());
  expect(before.imagePlanes).toBe(0);expect(before.videoPlanes).toBe(0);expect(before.triangles).toBeGreaterThan(10000);
  await viewport.focus();await page.keyboard.press('ArrowRight');
  expect((await host.evaluate(e=>e.serenity.diagnostics())).camera).not.toEqual(before.camera);
  await page.keyboard.press('Home');
  await page.locator('[data-campus-place=library]').click();
  await expect(page.locator('#place-panel h2')).toContainText('Mountain Library');
  const after=await host.evaluate(e=>e.serenity.diagnostics());expect(after.roofs).toEqual(before.roofs);
  await shot(page,'browser-3d-library');
  for(const width of [360,390,768,1280,1440]){
    await page.setViewportSize({width,height:900});await noOverflow(page);
    await expect(page.locator('[data-enter-interior]')).toBeVisible();
  }
});
test('upper clock face is selected through the canvas raycaster',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/campus');await readyCampus(page);
  // Runtime exposes exact screen coordinates for QA without modifying selection.
  const point=await page.locator('#campus-scene').evaluate(host=>host.serenity.project([-28,25.4,-.36]));
  const canvas=await page.locator('.reference-viewport').boundingBox();
  await page.mouse.click(canvas.x+point.x,canvas.y+point.y);
  await expect(page.locator('#place-panel')).toContainText('Main');
});
test('persistent fallback explains WebGL failure after toast, translates and follows interior mode',async({page})=>{
  await noGL(page);await page.goto('/campus');
  const status=page.locator('#campus-render-status'),mode=page.locator('#campus-mode-note');
  await expect(status).toContainText('3D is unavailable');await expect(page.locator('.photo-map')).toBeVisible();
  await page.waitForTimeout(5500);await expect(status).toBeVisible();await expect(mode).toContainText('2D map');
  await page.locator('[data-select=library]').click();await page.locator('[data-enter-interior]').click();
  await expect(page.locator('.panorama-container')).toHaveAttribute('data-loaded','true');await expect(mode).toContainText('Room panorama');
  await page.locator('.room-hotspots button').first().click();await page.locator('[data-back-campus]').first().click();
  await expect(mode).toContainText('2D map');await expect(page.locator('#place-panel')).toContainText('Library');
  await page.locator('[data-language=ru]').click();await expect(status).toContainText('3D недоступно');await expect(mode).toContainText('2D-карта');
  await page.locator('[data-view=map]').click();await expect(status).toBeHidden();
});
test('manually selected map has no WebGL warning, including on mobile',async({page})=>{
  await noGL(page);await page.setViewportSize({width:390,height:844});await page.goto('/campus?view=map');
  await expect(page.locator('.photo-map')).toBeVisible();await expect(page.locator('#campus-render-status')).toBeHidden();
  await expect(page.locator('#campus-mode-note')).toContainText('2D map');await noOverflow(page);await shot(page,'manual-map-mobile');
});
test('context loss keeps the selected building and opens the independent fallback',async({page})=>{
  await page.goto('/campus');await readyCampus(page);await page.locator('[data-select=library]').click();
  await page.locator('.reference-viewport').evaluate(canvas=>canvas.dispatchEvent(new Event('webglcontextlost',{cancelable:true})));
  await expect(page.locator('#campus-render-status')).toBeVisible();await expect(page.locator('.photo-map')).toBeVisible();
  await expect(page.locator('#place-panel')).toContainText('Library');await expect(page.locator('.reference-viewport')).toHaveCount(0);
});
