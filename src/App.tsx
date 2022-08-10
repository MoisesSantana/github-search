import { useRef, useState } from 'react';
import RepositoryList from './components/RepositoryList';
import Header from './components/Header';
import { getRepos } from "./services/api";
import './index.scss';

type Repository = {
  name: string;
  description: string;
  html_url: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await getRepos(inputRef.current.value);
    setRepositories(data);
    setIsLoading(false);
  }

  return (
    <main>
      <Header inputRef={inputRef} handleSubmit={handleSubmit} />
      <>
        { isLoading && <div>Loading...</div> }
        { isLoading || <RepositoryList repositories={repositories} /> }
      </>
    </main>
  )
}

export default App
