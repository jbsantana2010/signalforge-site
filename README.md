This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Lead Form — Environment Variables

The "Request a Demo" form posts to a 3rd-party form backend. Configure the following before deploying:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` | **Yes** | Full URL of your form endpoint, e.g. `https://formspree.io/f/xxxx` or `https://usebasin.com/f/xxxx` |
| `NEXT_PUBLIC_LEAD_FORM_PROVIDER` | No | `formspree` (default) or `basin` |

### Local setup

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your endpoint URL in `.env.local`.
3. Run `npm run dev` and submit the form — check your form provider's dashboard for the submission.

> **If `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` is missing in development**, the form will show an inline error message so you know it's unconfigured. In production it fails silently with a friendly success message to avoid confusing visitors.

### Payload fields sent on every submission

```
name, email, company, website, message,
to_email, lang, page, referrer, userAgent, timestamp
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
