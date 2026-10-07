# Cedar & Sun Yoga — Yoga Studio Website (US demo)

A complete, responsive static website for a fictional yoga studio in South Austin, Texas (warm sunset theme).
Pure HTML, CSS and JavaScript — no build step, works on any web host.

> **Demo content.** Cedar & Sun Yoga is not a real business. The studio name, address, phone number
> (a reserved 555 number), email, teachers, reviews, prices and events are all made up for portfolio use.

## Pages
| File | Contents |
|------|----------|
| `index.html` | Hero with full-screen background video, intro + stats, class styles, benefits, today's classes, teachers, events, testimonials slider, pricing teaser, gallery strip, latest blog posts, CTA |
| `about.html` | Story, values, timeline, 6 teacher profiles, studio facilities |
| `classes.html` | 6 detailed class styles + interactive weekly schedule (day tabs + style filter) |
| `pricing.html` | Memberships in USD with monthly/yearly toggle, drop-in & class-pack table, FAQ |
| `gallery.html` | Filterable masonry gallery with lightbox (keyboard arrows + Esc) |
| `blog.html` | Featured post, category filter, articles open in a reader modal |
| `contact.html` | Booking form with validation (US phone numbers; pre-fills from `?class=` / `?plan=` links), contact info, hours, map |

## Run locally
Open `index.html` in a browser, or serve the folder:

```
python -m http.server 5173
```

## Deploy to GitHub Pages
1. On github.com, create a **public** repository (leave "Add a README" unticked).
2. On the empty repo page, click **uploading an existing file**, then drag in *everything inside* this folder
   (`assets`, `css`, `js` and all the `.html`, `.md`, `.txt`, `.xml` files — not the folder itself).
   Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**,
   Branch **main**, folder **/ (root)**, and click **Save**.
4. After 1–2 minutes the site is live at `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/`.

Replace `YOUR-GITHUB-USERNAME` and `YOUR-REPO-NAME` in `sitemap.xml` and `robots.txt`.
`404.html` works out the repository folder by itself, so it needs no changes.

## Customize
- **Name, address, phone, email** — search for `Cedar &amp; Sun`, `Marigold Lane`, `555-0147` and
  `cedarandsunyoga.com` across the HTML files (and the structured data at the top of `index.html`).
- **Colors & fonts** — the variables at the top of `css/style.css` (`--saffron`, `--sun`, `--terracotta`, …).
- **Weekly schedule** — the `SCHEDULE` object at the top of `js/main.js`.
- **Blog articles** — the `POSTS` array in `js/main.js`.
- **Prices** — `pricing.html` (the `data-monthly` / `data-yearly` attributes drive the billing toggle) and the
  pricing teaser in `index.html`.
- **Hero video** — `assets/video/` (a free Pexels clip: https://www.pexels.com/video/woman-doing-yoga-4535162/).
- **Images** — `assets/img/`, free-to-use photos from Pexels. Replace with real studio photos when ready.

Also included: `404.html` (custom "page not found"), `sitemap.xml`, `robots.txt`, social-sharing
tags on every page and LocalBusiness structured data on the home page.

## Before going live for a real studio
Open `js/main.js` and fill in the `SITE` settings at the top:

```js
const SITE = {
  formEndpoint: "https://formspree.io/f/yourFormId", // booking + newsletter submissions go here
  sms: "15125550147"                                 // shows a "Text us" button on every page
};
```

- **Forms:** while `formEndpoint` is empty the forms run in demo mode (they show success but send nothing).
  A free [Formspree](https://formspree.io) form works out of the box: create a form, paste its URL above,
  and bookings arrive by email. If sending fails, visitors see an error and can retry.
- **Text us:** when `sms` is set, a text-message button appears bottom-left, and the booking confirmation
  offers a pre-filled text. Set it to `""` to hide both.
- Replace the `#` social links in the footer with real profiles, and link real Privacy, Terms and
  Accessibility pages.
- Update the Google Maps embed query in `contact.html` to the real address.
- Update the event dates and prices in the "Upcoming events" section of `index.html`.
