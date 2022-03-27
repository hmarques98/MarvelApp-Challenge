import { useInfiniteQuery } from 'react-query'
import { network } from 'src/services/network'

interface UseInfiniteQueryProps {
  queryName: string
  path: string
}
const useInfiniteReactQuery = <T>({
  queryName,
  path,
}: UseInfiniteQueryProps) => {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<T>(
    queryName,
    async ({ pageParam = 1 }) => {
      const res = await network.get(path + '?page=' + pageParam)

      return res.data
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
          return pages.length + 1
        }
      },
      getPreviousPageParam: firstPage => {
        return firstPage.previous
      },
    },
  )

  return {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    status,
    hasNextPage,
  }
}
export default useInfiniteReactQuery
