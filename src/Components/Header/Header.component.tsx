import { Link } from "wouter";
import "./Header.styles.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">ANN</h1>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/feed" className="nav-link">
              Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Subscribe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="https://github.com/WesleyMcGhee/anime-news-feed"
              className="nav-link"
            >
              Source Code
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export { Header }
