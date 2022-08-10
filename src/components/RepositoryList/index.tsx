import { useState } from "react";
import RepositoryItem from "../RepositoryItem";
import "./RepositoryList.scss";

type Repository = {
  name: string;
  description: string;
  html_url: string;
  id: number;
};

type RepositoryListProps = {
  repositories: Repository[];
};

function RepositoryList({ repositories }: RepositoryListProps) {
  const [search, setSearch] = useState('');

  const filteredRepositories = search.length > 0 ? (
    repositories.filter((repository) => (
      (repository.name).toLowerCase()).includes(search.toLowerCase()
    ))
  ) : (
    repositories
  );

  return (
    <section className="repository-list">
      <div>
        <h1>Repository List</h1>
        <label htmlFor="searchRepo">
          Search repository
          <input
            type="text"
            id="searchRepo"
            value={ search }
            onChange={ ({ target }) => setSearch(target.value) }
          />
        </label>
      </div>
      <ul>
        {
          filteredRepositories.map((repository) => (
            <RepositoryItem
              key={ repository.id }
              repository={ repository }
            />
          ))
        }
      </ul>
    </section>
  )
}

export default RepositoryList;
