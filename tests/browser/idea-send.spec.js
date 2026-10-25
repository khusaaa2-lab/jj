import {test,expect} from '@playwright/test';

test('decorative Send and implicit Enter leave storage, URL, feedback and network untouched in RU/EN',async({page})=>{
  await page.goto('/project');
  for(const [language,label] of [['ru','Отправить'],['en','Send']]){
    await page.locator(`[data-language=${language}]`).click();
    await page.locator('[name=title]').fill('An idea to copy later');
    await page.locator('[name=description]').fill('A garden where students can learn about plants together.');
    const state=()=>page.evaluate(()=>({storage:JSON.stringify(localStorage),url:location.href,status:document.querySelector('#idea-status').textContent,toast:document.querySelector('#notice').textContent,dialogs:document.querySelectorAll('dialog[open]').length}));
    const before=await state(),requests=[];const observe=request=>requests.push(request.url());page.on('request',observe);
    const send=page.locator('#idea-send');await expect(send).toHaveAttribute('type','button');await expect(send).toContainText(label);
    await send.click();await page.locator('[name=title]').press('Enter');await page.waitForTimeout(100);
    expect(await state()).toEqual(before);expect(requests).toEqual([]);page.off('request',observe);
    await expect(page.locator('[data-copy-idea]')).toBeVisible();
  }
});
