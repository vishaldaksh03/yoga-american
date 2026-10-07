# Surya Yoga Shala — Yoga Center Website

A complete, responsive static website for a yoga center (warm sunset theme).
Pure HTML, CSS and JavaScript — no build step, works on any web host.

## Pages
| File | Contents |
|------|----------|
| `index.html` | Hero with full-screen background video, intro + stats, class styles, benefits, today's classes, teachers, testimonials slider, pricing teaser, gallery strip, latest blog posts, CTA |
| `about.html` | Story, values, timeline, 6 teacher profiles, studio facilities |
| `classes.html` | 6 detailed class styles + interactive weekly schedule (day tabs + style filter) |
| `pricing.html` | Memberships with monthly/yearly toggle, class packs table, FAQ |
| `gallery.html` | Filterable masonry gallery with lightbox (keyboard arrows + Esc) |
| `blog.html` | Featured post, category filter, articles open in a reader modal |
| `contact.html` | Booking form with validation (pre-fills from `?class=` / `?plan=` links), contact info, hours, map |

## Run locally
Open `index.html` in a browser, or serve the folder:

```
python -m http.server 5173
```

## Deploy to GitHub Pages
1. On github.com, create a **public** repository named `yoga-center-website` (leave "Add a README" unticked).
2. On the empty repo page, click **uploading an existing file**, then drag in *everything inside* this folder
   (`assets`, `css`, `js` and all the `.html`, `.md`, `.txt`, `.xml` files — not the folder itself).
   Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**,
   Branch **main**, folder **/ (root)**, and click **Save**.
4. After 1–2 minutes the site is live at `https://YOUR-GITHUB-USERNAME.github.io/yoga-center-website/`.

`404.html` assumes the repository name `yoga-center-website`; if you rename the repo, update its `<base href>`.
Replace `YOUR-GITHUB-USERNAME` in `sitemap.xml` and `robots.txt`.

## Customise
- **Name, address, phone, email** — search for `Surya`, `Ganga Vihar`, `98765 43210` and `suryayogashala.com` across the HTML files.
- **Colours & fonts** — the variables at the top of `css/style.css` (`--saffron`, `--sun`, `--terracotta`, …).
- **Weekly schedule** — the `SCHEDULE` object at the top of `js/main.js`.
- **Blog articles** — the `POSTS` array in `js/main.js`.
- **Hero video** — the `<video>` tag in `index.html`. It currently streams a free Pexels clip
  (https://www.pexels.com/video/woman-doing-yoga-4535162/). For production, download it (or your own
  footage) into an `assets/` folder and point the `<source>` tags at it.
- **Images** — hot-linked from Pexels (free to use). Replace with your own studio photos when ready.

Also included: `404.html` (custom "page not found"), `sitemap.xml`, `robots.txt`, social-sharing
tags on every page and LocalBusiness structured data on the home page.

## Before going live
Open `js/main.js` and fill in the `SITE` settings at the top:

```js
const SITE = {
  formEndpoint: "https://formspree.io/f/yourFormId", // booking + newsletter submissions go here
  whatsapp: "919876543210"                          // shows a WhatsApp chat button on every page
};
```

- **Forms:** while `formEndpoint` is empty the forms run in demo mode (they show success but send nothing).
  A free [Formspree](https://formspree.io) form works out of the box: create a form, paste its URL above,
  and bookings arrive in your email. If sending fails, visitors see an error and can retry.
- **WhatsApp:** when `whatsapp` is set, a chat button appears bottom-left, and the booking confirmation
  offers a pre-filled WhatsApp message.
- Replace `https://www.suryayogashala.com` in `sitemap.xml` and `robots.txt` with your domain.
- Replace the `#` social links in the footer with your real profiles.
- Update the Google Maps embed query in `contact.html` to your real address.
- Update the event dates and prices in the "Upcoming events" section of `index.html`.
