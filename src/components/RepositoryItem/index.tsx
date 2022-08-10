import "./RepositoryItem.scss";

type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li className="repository-item">
      <strong>{ repository.name }</strong>
      <p>{ repository.description }</p>
      <a href={repository.html_url} target="_blank">
        Access Repository
      </a>
    </li>
  );
}

export default RepositoryItem;
