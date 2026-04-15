import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ka"],

  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/blog": "/blog",
    "/blog/[slug]": "/blog/:slug",
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
