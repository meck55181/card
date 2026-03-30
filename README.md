This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Card assets

Image paths live in **`lib/config/cardAssets.ts`**. Do not hardcode paths in components; add or change URLs there.

- **Backgrounds:** add PNG/JPG/WebP files under `public/images/card/backgrounds/`, then list their public paths in the `CARD_BACKGROUND_IMAGES` array in `lib/config/cardAssets.ts` (defaults: `bg-1.png`, `bg-2.png`, `bg-3.png`).
- **Slot layers:** replace `public/images/card/insert_front.png` and `public/images/card/insert_back.png` (paths are `INSERT_FRONT_IMAGE` and `INSERT_BACK_IMAGE` in the config file).
- **Key card:** replace `public/images/card/keycard.png` (path is `KEYCARD_IMAGE` in the config file).

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

The home route redirects to `/card`. Edit `app/card/page.tsx` and `components/card/` to change the entrance experience.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
