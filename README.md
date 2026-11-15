# Piyush Garg portfolio recreation

Static recreation of https://www.piyushgarg.dev/ captured November 15, 2026.

## Preview

Run `python3 -m http.server 4173 --directory dist`, then open http://localhost:4173.

The four pages, stylesheet, fonts, and portrait are served locally. Public course, product, social, and video links retain their original destinations. Activity and statistics are a captured snapshot, not live feeds. Guestbook submissions persist only in the visitor's browser; no GitHub login or remote posting is performed. Original guestbook entries are a static snapshot.

`dist/` is the deployable website. `clone.py` records the extraction process; it requires Beautiful Soup and the four reference HTML files under `/tmp` fetched during creation. Edit the HTML/CSS/JS in `dist/` directly for ongoing changes.
