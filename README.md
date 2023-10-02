This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## project install

```
npx create-next-app@latest --experimental-app
```

## desc

nextjs 컴포넌트는 서버 컴포넌트, 클라이언트 컴포넌트로 나뉨.
기본적으로 서버 컴포넌트이며, 맨위에 `use client` 를 넣고 만들면 클라이언트 컴포넌트로 동작함.

- 서버 컴포넌트는 html에 자바스크립트 기능을 넣을 수 없음. 예를 들면, 이밴트 리스너. useState, useEffect 사용불가
- 클라이언트 컴포넌트는 모두 다 사용가능

1. 서버 컴포넌트는 로딩 속도가 빠르고 검색엔진 노출에 이점이 있음. - 첫 로딩시 사용하고 그 후 컴포넌트 단위는 클라이언트 컴포넌트를 사용하면 될 듯함.
2. 페이지는 서버 컴포넌트, 그 안에 기능은 클라이언트 고고
# next-13-study
