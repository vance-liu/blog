export * from './apollo';

export const delay = (time: any) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
