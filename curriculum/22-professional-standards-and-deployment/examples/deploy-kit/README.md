# Deploy kit 🚀

Copy the files you need into the **top folder** of your site. Then swap `example.com` for your own domain.

| File | Which host | What it's for |
|---|---|---|
| `404.html` | All | Your own "page not found" page (GitHub Pages, Netlify and Cloudflare Pages show it automatically) |
| `robots.txt` | All | Tells search robots what not to visit, and where your sitemap is |
| `sitemap.xml` | All | A list of your preferred (canonical) page addresses for search engines |
| `_headers` | Netlify, Cloudflare Pages | Security headers, and how long browsers keep files |
| `vercel.json` | Vercel | Security headers |

> 📝 The `/assets/*` rule in `_headers` tells browsers to keep those files for a long time. That's only safe if a file's name changes whenever its content changes (like `app.3f9a1c.js`). If you overwrite files but keep the same name, remove that rule.
