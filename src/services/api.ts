const URL = 'https://api.github.com/users/[query]/repos';

export const getRepos = async (query: string) => {
  const response = await fetch(URL.replace('[query]', query));
  return await response.json();
}
