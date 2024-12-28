const { setWorldConstructor } = require('cucumber');
import {testControllerHolder} from "./testControllerHolder"

function CustomWorld({ parameters }) {
    this.waitForTestController = testControllerHolder.get;
    this.parameters = parameters;
}

setWorldConstructor(CustomWorld);