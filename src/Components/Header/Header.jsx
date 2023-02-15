export default function Header({ setDark }) {
  return (
    <header>
      <h1>Ari's Bird Sanctuary</h1>
      <label class="switch">
        <input
          type="checkbox"
          className="default-checkbox"
          onClick={(e) => setDark(e.target.checked)}
        />
        <span class="slider"></span>
      </label>
    </header>
  );
}
