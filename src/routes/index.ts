import authRoutes from './auth';

interface IRoute {
  component: React.ReactNode;
  name: string;
  path: string;
  mask?: string | RegExp;
  exact: boolean;
  isPrivate: boolean;
  redirect?: {
    from: string;
    to: string;
  };
  allowedRoles?: string[];
  routes?: IRoute[];
  permissions?: string[];
}

const appRoutes = [...authRoutes] as IRoute[];

const titleRoutes = [
  ...authRoutes,
].map(({ title, mask }) => ({ title, mask }));

export { appRoutes, titleRoutes };
