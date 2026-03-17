import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from './ThemeSwitcher';
export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="/vercel.svg" width={20} height={20} alt="Logo website"></Image>
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/post">Post</Link>
        </div>
        <ThemeSwitcher/>
      </nav>
    </header>
  );
}

