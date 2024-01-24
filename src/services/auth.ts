export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh13j3kh12k113hh21g3f13f2',
        name: 'Luan',
        email: 'luanevangelista@gmail.com',
      });
    }, 2000);
  });
}