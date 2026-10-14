# Content Guide: how to update your portfolio

This guide is written for you, Jatin, so you can change the website without reading any code.

**The golden rule:** everything you ever need to edit lives in two places only:

| Where | What it holds |
| --- | --- |
| the **`content`** folder | all the words, links and numbers (`.ts` files) |
| the **`public`** folder | all the files: your resume PDF and project screenshots |

You should never need to open anything inside the `src` folder.

### What each file in `content` does

| File | What it controls |
| --- | --- |
| `content/site.ts` | name, email, phone, social links, hero text, section titles, resume file name |
| `content/projects.ts` | all projects |
| `content/experience.ts` | the experience timeline |
| `content/skills.ts` | skill groups |
| `content/education.ts` | education and certifications |
| `content/theme.ts` | the accent color |

### How to read these files (30-second lesson)

- Text always sits **between quotes**: `"like this"`.
- Every item ends with a **comma** after the closing quote or brace.
- A **project / job / skill group** is one block between `{` and `}`.
- A **list** is written between `[` and `]`, with a comma after every item.
- Never delete the quotes, commas, brackets or braces. Only change the words between the quotes.

---

## 1. Adding a new project

**Step 1. Add the screenshot.**

1. Inside the `public/projects` folder, create a new folder named after your project, all lowercase with dashes instead of spaces. Example: `public/projects/weather-app`
2. Put your screenshot(s) inside it. Use simple file names like `home.png`.

**Screenshot sizes**

- **A "More projects" card** (any project that is not featured) shows **one image** (the first one in the list), cropped to a wide shape. Use a **landscape image, 1600 × 1000 pixels**.
- **A featured project** (the big card) can show up to 3 images fanned out like phones. Use **portrait phone screenshots, about 600 × 1200 pixels**.
- Use `.png`, `.jpg` or `.webp`. Keep each file **under 400 KB** (squoosh.app compresses images for free).

**Step 2. Add the project to the list.**

Open `content/projects.ts`. Find the last project block. Right after its closing `},` paste this template, then change the words:

```ts
  {
    slug: "weather-app",
    title: "Weather App",
    kind: "Full-Stack Web App",
    summary: "One or two sentences about what it is and what problem it solves.",
    highlights: [
      "First key point about what you built.",
      "Second key point.",
      "Third key point.",
    ],
    tech: ["React", "Node", "PostgreSQL"],
    images: [
      {
        src: "/projects/weather-app/home.png",
        alt: "Short description of the screenshot",
      },
    ],
    links: [
      { label: "Visit live site", href: "https://example.com" },
      { label: "View code", href: "https://github.com/JatinSatare24/weather-app" },
    ],
  },
```

**What happens automatically**

- A project **without** `featured: true` shows up in a **"More projects"** grid. That section stays hidden until you add one.
- To make a project a big featured card instead, add the line `featured: true,` under `kind`. (Resin Kalaakari already has it.)
- Cards show the **first** link as the main button and the rest as small links.
- Leave `images: [],` empty if you have no screenshot yet. The card will still look fine.
- The "More on GitHub" button is always shown. Its link lives in `content/site.ts` under `moreOnGithub`.

---

## 2. Adding or editing a job in the experience timeline

Open `content/experience.ts`. Jobs are listed **newest first**. To add a job, paste this block **above** the first one (inside the `[ ]` list):

```ts
  {
    role: "Job Title",
    company: "Company Name",
    period: "Jan 2026 – Present",
    summary: "One short line about the role (optional, you can delete this line).",
    highlights: [
      "First achievement.",
      "Second achievement.",
    ],
  },
```

To edit a job, just change the words between the quotes. To remove one, delete its whole block from `{` to `},`.

The bold heading and the paragraph next to the timeline ("From keeping systems alive…") are `experienceIntro` at the top of the same file.

---

## 3. Adding a skill or a certification

**A skill.** Open `content/skills.ts`. Find the group, for example `Frontend`, and add the new skill to its list, with quotes and a comma:

```ts
    items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
```

To add a whole new group, copy one `{ ... },` block, paste it below, and change the title and items.

**A certification.** Open `content/education.ts`. In the `certifications` list, paste:

```ts
  {
    title: "Name of the Certification",
    issuer: "Who issued it",
    detail: "12 hours",
    year: "2026",
    href: "https://link-to-the-certificate",
  },
```

`href` is the link to the certificate. If you have no link, delete that line.
An **education entry** works the same way, in the `education` list in the same file.

---

## 4. Replacing your resume PDF

1. Save your new resume as **`Jatin_Satare_Resume.pdf`**.
2. Put it in the `public/resume` folder and **replace** the old file.

That's it. Both "Download resume" buttons use it.

If you'd like a different file name, put the new file in `public/resume` and change `href` and `downloadName` under `resume` in `content/site.ts` to match.

---

## 5. Updating contact details or social links

Open `content/site.ts`.

- **Email and phone:** find the `contact:` block.

```ts
    email: "jatinsatare@gmail.com",
    phoneDisplay: "+91 93728 63335",   // how it looks on the page
    phoneHref: "tel:+919372863335",    // what happens on tap (no spaces!)
```

- **Social links:** find `export const socials`. Change the `href` links, or add another line (the icon appears automatically for GitHub and LinkedIn; other names show a simple arrow).
- **Your photo (avatar):** replace the file `public/images/avatar.jpg` with a new square photo (at least 200 × 200 pixels), keeping the same name. It appears in the top bar and the hero.
- **Hero text and section titles** (for example the heading above your projects) are also in this file.

**Where messages from the contact form go:** that is not in this file. It is set by the `CONTACT_TO_EMAIL` setting (see section 8).

---

## 6. Changing the accent color (and page width)

Open `content/theme.ts` and change the color code:

```ts
export const theme = {
  accent: "#34d3c0",
};
```

Pick any hex code (search "color picker" online). Some ideas that suit a dark site:

| Color | Code |
| --- | --- |
| Teal (current) | `#34d3c0` |
| Electric blue | `#4da3ff` |
| Amber | `#f5b544` |
| Lime | `#a3e635` |
| Soft violet | `#8b8cf8` |

The buttons, glows, highlights and the share image all update automatically.

**Page width on big screens (optional).** In the same file, `contentWidth` controls how wide the page content is on laptops and desktops:

```ts
  contentWidth: "72rem",
```

Use `"64rem"` for narrower, `"80rem"` for wider, or `"90rem"` for very wide. Phones and tablets always use the full screen, so this only affects large screens. Keeping the content in a centered column (rather than stretching edge to edge) is intentional: long lines of text are harder to read on very wide screens.

---

## 7. Running the site on your computer and previewing changes

**One-time setup:** install **Node.js** (the "LTS" version, 20 or newer) from nodejs.org.

1. Open a terminal **inside the project folder**. On Windows, open the folder in File Explorer, click the address bar, type `cmd` and press Enter.
2. Install the pieces the site needs (only the first time, takes about a minute):
   ```
   npm install
   ```
3. Start the preview:
   ```
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser.

While it's running, every time you save a file the page **updates by itself**. Press `Ctrl + C` in the terminal to stop it.

**Test the production version** (what visitors will really get):

```
npm run build
npm run start
```

If `npm run build` prints an error, fix that first. Netlify would fail on the same error.

---

## 8. Publishing changes (and the contact form key)

### Publishing

Your site updates automatically every time you push to GitHub. In a terminal, inside the project folder:

```
git add .
git commit -m "Describe what you changed"
git push
```

Netlify notices the push and rebuilds. It takes about 1 to 2 minutes. You can watch it under **Deploys** on your Netlify dashboard.

### First-time setup on Netlify

If you haven't connected this project yet:

1. Push this project to a GitHub repository.
2. In Netlify, open your existing site (`jatinsatareportfolio`) → **Site configuration → Build & deploy → Continuous deployment → Link repository**, and pick the new repository. (Or choose **Add new site → Import an existing project** for a brand-new site.)
3. Netlify reads the settings from `netlify.toml` automatically. Leave the defaults and deploy.

### Contact form: one-time setup (the API key)

The form sends email through a free service called **Resend**.

1. Create a free account at **resend.com**. **Use the email address where you want to receive messages** (`jatinsatare@gmail.com`).
2. In Resend, open **API Keys → Create API Key** and copy the key. It starts with `re_`. You only see it once.
3. In Netlify, open your site → **Site configuration → Environment variables → Add a variable**, and add these three:

| Key | Value |
| --- | --- |
| `RESEND_API_KEY` | the key you copied (starts with `re_`) |
| `CONTACT_TO_EMAIL` | `jatinsatare@gmail.com` |
| `CONTACT_FROM_EMAIL` | `Portfolio <onboarding@resend.dev>` |

4. **Redeploy:** Netlify → **Deploys → Trigger deploy → Deploy site**. Variables only take effect on a new deploy.
5. Open your live site and send yourself a test message.

Notes:

- With the free `onboarding@resend.dev` sender, Resend only delivers to **your own Resend account email**, which is why step 1 matters. To send from your own domain later, verify the domain in Resend and change `CONTACT_FROM_EMAIL`.
- To test the form on your own computer, copy the file `.env.example` to a new file named `.env.local`, fill in the three values, and restart `npm run dev`. **Never share the key or put it on GitHub.** `.env.local` is already ignored by git.
- Replies work: when you press Reply in Gmail, it goes to the person who filled in the form.
- Spam protection is built in (a hidden trap field, a minimum fill-in time, and a limit of 4 messages per person per 10 minutes).

### If you get a custom domain later

Change `url` near the top of `content/site.ts` to the new address (for example `"https://jatinsatare.com"`). It is used for Google and for the link-preview image.

---

## If something breaks: the 3 most likely mistakes

### 1. A missing comma, quote or bracket in a content file

**Symptoms:** `npm run dev` shows a red error, or the Netlify deploy fails, and the message mentions a file in `content/` and a line number (for example `Expected ',' ... content/projects.ts:42`).

**Fix:** open that file at that line (or the line just above it) and check:
- every line inside a block ends with a **comma**,
- every `"` has a matching closing `"`,
- every `{` has a `}` and every `[` has a `]`,
- there's a comma between two blocks: `},` then `{`.

Quick undo: in VS Code press `Ctrl + Z` until the error goes away.

### 2. A project image doesn't show

**Symptoms:** the card has an empty space or a broken picture.

**Fix:** check three things.
- The path starts with `/` and does **not** include the word `public`. Correct: `"/projects/weather-app/home.png"`. Wrong: `"public/projects/weather-app/home.png"`.
- The **spelling and capital letters match exactly**. `Home.PNG` and `home.png` are different files online, even if it works on your Windows computer.
- The file is really inside `public/projects/...` and was pushed to GitHub (`git add .` includes it).

### 3. The contact form says "isn't available right now"

**Fix:** the email settings are missing or were added **after** the last deploy.
- In Netlify → **Environment variables**, check that `RESEND_API_KEY` and `CONTACT_TO_EMAIL` exist, with no extra spaces.
- Then trigger a new deploy (**Deploys → Trigger deploy**).
- If messages still don't arrive, check the Resend dashboard → **Emails** for an error, and check your Gmail spam folder.

### Bonus: "I saved a change, but the live site looks the same"

You need to run `git add .`, `git commit` and `git push` (section 8), then wait for the Netlify deploy to finish. Hold `Ctrl + Shift + R` in the browser to refresh without the old cached copy.

---

## Optional: using your own link-preview image

The picture people see when your link is shared (LinkedIn, WhatsApp, Slack) is generated automatically from your name and tagline. To use your own instead: make a **1200 × 630** PNG named `opengraph-image.png`, put it in `src/app`, and delete the two files `opengraph-image.tsx` and `twitter-image.tsx` in the same folder.
