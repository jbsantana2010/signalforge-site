import { siteCopy } from "@/content/siteCopy";

export default function Footer() {
  const { brand, footer } = siteCopy;

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-500">
          {footer.copyright}
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-6 max-w-5xl px-6 text-center space-y-1">
        <p className="text-xs text-neutral-400">
          {footer.parentLine}
        </p>
        <p className="text-xs text-neutral-400">
          {brand.name} &mdash; {brand.tagline}
        </p>
        <p className="text-xs text-neutral-300">
          {footer.contactEmail}{" "}
          <span className="text-neutral-300">{footer.contactEmailNote}</span>
        </p>
      </div>
    </footer>
  );
}
