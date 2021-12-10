import { useLocation } from 'react-router-dom';

const useUrlQuery = () => new URLSearchParams(useLocation().search);

export default useUrlQuery;
