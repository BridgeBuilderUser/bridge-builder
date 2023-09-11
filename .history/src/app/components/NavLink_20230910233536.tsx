export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className="text-blue-500 hover:text-blue-600">{children}</a>
    </Link>
  );
}