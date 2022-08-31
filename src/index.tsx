// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-empty-function

if (module.hot) {
  module.hot.accept('./Root.tsx', function() {
    console.log('Accepting the updated printMe module!');
  })
}