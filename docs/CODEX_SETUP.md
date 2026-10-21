# Codex Cloud environment

Repository: khusaaa2-lab/jj
Suggested environment name: Serenity International School
Access: Only me

## Runtime
Use Node.js 22 or newer. This starter has no external dependencies, API keys or required secrets.

## Install and validate
```sh
node --version
npm ci --ignore-scripts
npm run check
```

## Start
```sh
npm run dev
```

Default host is 0.0.0.0 and port is 5173. Confirm an HTTP 200 response at the homepage. Run check before publishing the reusable environment. Publishing the Codex environment does not publish the website to the public internet.

The first follow-up task should implement the agreed website from docs/PROJECT.md. Keep the existing starter as a working baseline.
