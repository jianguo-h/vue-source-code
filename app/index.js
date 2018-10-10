if(module.hot) {
  module.hot.accept();
}

new Promise(() => {
  document.write('>>>>>>>>> test');
});