import { useQuery } from 'react-query';
import axios from '@services/axiosService';
import { log } from '@utils/console';
interface useReactQueryProps {
  queryName: string;
  path: string;
  refetchInterval?: number;
}
const useReactQuery = <T>({
  queryName,
  path,
  refetchInterval,
}: useReactQueryProps) => {
  const { isLoading, error, data, refetch } = useQuery<T>(
    queryName,
    async () => {
      try {
        const res = await axios.get(path);
        const { data } = res.data;
        return data;
      } catch (error) {
        log(error, 'useQuery');
      }
    },
    {
      refetchInterval: refetchInterval ?? false,
      refetchOnWindowFocus: 'always',
      refetchOnMount: 'always',
    },
  );

  return { data, error, isLoading, refetch };
};
export default useReactQuery;
