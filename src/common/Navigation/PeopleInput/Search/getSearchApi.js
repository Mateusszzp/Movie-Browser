export const getSearchApi = async (page, query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=fef5caf4726934d4be6d4893838ad041&language=en-US&query=${query}&page=${page}&include_adult=false`);

  if (!response.ok) {
    throw Error(response.statusText)
  }

  return await response.json();
}