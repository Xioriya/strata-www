# strata-www

Documentation and landing site for Strata GNU/Linux.

Static HTML, CSS, and JavaScript. No build step, no dependencies, no framework.

## Preview

```
python3 -m http.server 8000 -d .
```

Open `http://localhost:8000`.

## Deploy

Pushes to `main` deploy to GitHub Pages through `.github/workflows/pages.yml`. The workflow copies the four site files into `_site` and publishes that directory.

Live site: https://xioriya.github.io/strata-www/

## Structure

- `index.html` — all tabs and documentation
- `styles.css` — strata theme, layout, responsive rules
- `app.js` — tab routing, keyboard navigation, hash links
- `favicon.svg` — layered strata mark

## Editing

Each tab is a `button` with `role="tab"` and `data-tab="name"`, plus a `section` with `role="tabpanel"` and `id="panel-name"`. Link to a tab with `#name`. No comments in code. Documentation belongs in the page content.

## Related

- Main project: https://github.com/Xioriya/strata
- Live site: https://xioriya.github.io/strata-www/

## License

GPL-2.0.
