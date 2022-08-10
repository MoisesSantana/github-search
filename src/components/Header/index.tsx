import './Header.scss';

interface IHandleSubmit {
  (e: React.FormEvent<HTMLFormElement>): void;
}

type HeaderProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  handleSubmit: IHandleSubmit;
}

function Header({ inputRef, handleSubmit }: HeaderProps) {
  return (
    <header>
      <div>
        <img src="favicon.svg" alt="github" />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="searchUser">
          Search user
          <input
            id="searchUser"
            type="text"
            placeholder="Search"
            ref={inputRef}
          />
        </label>
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  )
}

export default Header;