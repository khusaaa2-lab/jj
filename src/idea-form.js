// Send is deliberately decorative. Only the separate copy control has an action.
export function bindIdeaForm(form, onCopy) {
  form.addEventListener('submit', event => event.preventDefault());
  form.querySelector('[data-copy-idea]').addEventListener('click', onCopy);
}
