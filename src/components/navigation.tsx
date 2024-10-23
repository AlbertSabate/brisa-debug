import { navigate } from "brisa";

export default function Nav() {

  function onNavigate(page: string) {
    navigate(page)
  }

  return (
    <nav>
      <div class="nav-content">
        <a
          class="logo"
          href="https://brisa.build"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/brisa.svg" alt="Brisa Framework logo" width="30" />
          Brisa
        </a>
        <ul>
          <li>
            <a href="/">Home link</a>
            <button type="button" onClick={() => onNavigate('/')}>Home navigate</button>
          </li>
          <li>
            <a href="/empty">Empty link</a>
            <button type="button" onClick={() => onNavigate('/empty')}>Empty navigate</button>
          </li>
          <li>
            <a href="/about">About link</a>
            <button type="button" onClick={() => onNavigate('/about')}>About navigate</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
