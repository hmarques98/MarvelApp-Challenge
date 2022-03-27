import { useQuery } from 'react-query';
import { network } from '../services/network';

interface useReactQueryProps {
  queryName: string;
  path: string;
  refetchInterval?: number;
  dependency?: any;
}
const useReactQuery = <T>({
  queryName,
  path,
  refetchInterval,
  dependency,
}: useReactQueryProps) => {
  const { isLoading, error, data, refetch, remove } = useQuery<T, any>(
    [queryName, dependency ?? null],
    async () => {
      const response = await network.get(path);
      const { data } = response.data;

      return data;
    },
    {
      refetchInterval: refetchInterval ?? false,
      enabled: !!dependency,
    },
  );

  return { data, error, isLoading, refetch, remove };
};
export default useReactQuery;
