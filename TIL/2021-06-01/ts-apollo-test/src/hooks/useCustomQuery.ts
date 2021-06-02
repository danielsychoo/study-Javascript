import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client';
import { Variables } from 'utils/types';

const useCustomQuery = <T>(
  queryName: DocumentNode,
  param?: QueryHookOptions<T, Variables>,
) => {
  const { data, loading, error } = useQuery(queryName, param);

  if (error) {
    console.log(error);
  }

  return { loading, data };
};

export default useCustomQuery;
