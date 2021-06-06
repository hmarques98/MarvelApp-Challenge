import { useQuery } from 'react-query';
import axios from '@services/axiosService';
import { log } from '@utils/console';
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
      const response = await axios.get(path);
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
