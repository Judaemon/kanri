import { QueryClient, queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export async function getTeams() {
  const response = await fetch('test');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export const teamQuery = () =>
  queryOptions({
    queryKey: ['teams'],
    queryFn: async () => {
      const teams = await getTeams()
      if (!teams) {
        throw new Response('', {
          status: 404,
          statusText: 'Not Found',
        })
      }

      return teams
    },
  })

export const teamLoader =
  (queryClient: QueryClient) =>
  async () => {
    await queryClient.ensureQueryData(teamQuery());

    return null;
  };

export const Teams = () => {
  document.title = 'Kanri - Teams';
  
  const { data:teams } = useSuspenseQuery(teamQuery())

  console.log(teams);
  
  return (
    <div>
      <h1>Teams</h1>
    </div>
  );
};
