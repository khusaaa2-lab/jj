import test from 'node:test';
import assert from 'node:assert/strict';
import {bindIdeaForm} from '../src/idea-form.js';
import {projectPage} from '../src/pages.js';
import {setLanguage} from '../src/i18n.js';

test('Send has no action, form submission is cancelled, and the separate copy button remains wired',()=>{
  const form=new EventTarget(),send=new EventTarget(),copy=new EventTarget();
  form.querySelector=selector=>{assert.equal(selector,'[data-copy-idea]');return copy;};
  let copied=0;bindIdeaForm(form,()=>copied++);
  send.dispatchEvent(new Event('click'));form.dispatchEvent(new Event('click'));
  const submit=new Event('submit',{cancelable:true});assert.equal(form.dispatchEvent(submit),false);assert.equal(submit.defaultPrevented,true);assert.equal(copied,0);
  copy.dispatchEvent(new Event('click'));assert.equal(copied,1);
  const oldDocument=globalThis.document;globalThis.document={documentElement:{}};
  try{
    for(const [language,label] of [['ru','Отправить'],['en','Send']]){
      setLanguage(language);const html=projectPage().match(/<form id="idea-form"[\s\S]*?<\/form>/)[0];
      const button=html.match(/<button[^>]*id="idea-send"[^>]*>[\s\S]*?<\/button>/)[0];
      assert.match(button,/type="button"/);assert.ok(button.includes(label));assert.doesNotMatch(button,/\bonclick|\bdata-/);
      assert.doesNotMatch(html,/type="submit"|action=|onsubmit=/);assert.match(html,/type="button" data-copy-idea/);
    }
  }finally{globalThis.document=oldDocument;}
});
