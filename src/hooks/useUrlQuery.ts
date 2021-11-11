import { useLocation } from 'react-router-dom';

export const useUrlQuery = () => new URLSearchParams(useLocation().search);
