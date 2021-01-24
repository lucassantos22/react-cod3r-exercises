const {Builder, By} = require('selenium-webdriver');

(async function nav() {
  const driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('sobre')).click();
    await driver.findElement(By.id('Sobre'));
    await driver.findElement(By.id('dashboard')).click();
    await driver.findElement(By.className('nav-item'));
    console.log('Teste de navegação passou!')
  }catch (error){
    console.log(error);
  }finally {
    await driver.quit();
  }
})();