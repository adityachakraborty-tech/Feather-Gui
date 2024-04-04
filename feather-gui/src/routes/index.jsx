// third party
import { useRoutes } from 'react-router-dom';

// project import
import AuthRoutes from './AuthRoutes.jsx';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthRoutes]);
}
