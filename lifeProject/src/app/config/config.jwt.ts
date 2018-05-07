export const tokenGetter = (): string => {
    return localStorage.getItem('access_token');
  };
export const config: object = {
    tokenGetter,
    whitelistedDomains: ['localhost:8000'],
    blacklistedRoutes: [],
};
