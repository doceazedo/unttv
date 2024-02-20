export const getIdOrLogin = (idOrLogin: string) => {
  const isLogin = isNaN(parseInt(idOrLogin));
  return {
    userId: !isLogin ? idOrLogin : undefined,
    userName: isLogin ? idOrLogin : undefined,
  };
};
