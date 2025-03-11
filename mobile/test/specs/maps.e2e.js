const { remote } = require("webdriverio");

const caps = {
    platformName: "iOS",
    "appium:platformVersion": "17.2",  // Atualize para a versão do seu simulador
    "appium:deviceName": "iPhone 15 Pro Max",  // Nome do seu dispositivo/simulador
    "appium:automationName": "XCUITest",
    "appium:bundleId": "com.apple.Maps",  // Apple Maps
    "appium:noReset": true
};

async function testAppleMaps() {
    try {
        const driver = await remote({
            hostname: "localhost",
            port: 4723,
            path: "/",
            capabilities: caps
        });

        console.log("✅ Conectado ao Appium!");

        await driver.pause(5000);

        const searchField = await driver.$('//XCUIElementTypeSearchField');

        if (await searchField.isDisplayed()) {
            console.log("✅ Campo de busca encontrado!");
            await searchField.click();
            await searchField.setValue("Central Park, NY");

            await driver.keys(["Return"]);

            await driver.pause(5000);

            console.log("✅ Busca no Apple Maps concluída!");
        } else {
            console.error("❌ Campo de busca NÃO encontrado!");
        }

        await driver.deleteSession();
    } catch (error) {
        console.error("❌ Erro ao rodar o teste:", error);
    }
}

testAppleMaps();