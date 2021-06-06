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
  const { isLoading, error, data, refetch } = useQuery<T, any>(
    queryName,
    async () => {
      const response = await axios.get(path);
      const { data } = response.data;

      return data;
    },
    {
      refetchInterval: refetchInterval ?? false,
    },
  );

  return { data, error, isLoading, refetch };
};
export default useReactQuery;
