$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrgHrm.feature");
formatter.feature({
  "line": 1,
  "name": "check OrangeHrm home page functionality",
  "description": "",
  "id": "check-orangehrm-home-page-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "user is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "orghrm.user_is_on_login_page()"
});
formatter.result({
  "duration": 4160978500,
  "status": "passed"
});
formatter.match({
  "location": "orghrm.user_enters_username_and_password()"
});
formatter.result({
  "duration": 2570720100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-IAVF1BP9\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 102.0.5005.27 (df4a85108ffa..., userDataDir: C:\\Users\\Ranjith\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:58992}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 33c3b92ef6d953490795ad57ef478c53\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat Stepdefinitions.orghrm.user_enters_username_and_password(orghrm.java:28)\r\n\tat ✽.When user enters username and password(OrgHrm.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "orghrm.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "check logout link",
  "description": "",
  "id": "check-orangehrm-home-page-functionality;check-logout-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user click on welcome link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "logout link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "orghrm.user_click_on_welcome_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.logout_link_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "user is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "orghrm.user_is_on_login_page()"
});
formatter.result({
  "duration": 2955603900,
  "status": "passed"
});
formatter.match({
  "location": "orghrm.user_enters_username_and_password()"
});
formatter.result({
  "duration": 3495329200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-IAVF1BP9\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 102.0.5005.27 (df4a85108ffa..., userDataDir: C:\\Users\\Ranjith\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59012}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dbcc93fdf7f61bc90601df9092c9b02b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat Stepdefinitions.orghrm.user_enters_username_and_password(orghrm.java:28)\r\n\tat ✽.When user enters username and password(OrgHrm.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "orghrm.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "verify quick launch toolbar is present",
  "description": "",
  "id": "check-orangehrm-home-page-functionality;verify-quick-launch-toolbar-is-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user clicks on dashboard link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "quick launch toolbar is present",
  "keyword": "Then "
});
formatter.match({
  "location": "orghrm.user_clicks_on_dashboard_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.quick_launch_toolbar_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "verify the employee details",
  "description": "",
  "id": "check-orangehrm-home-page-functionality;verify-the-employee-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user clicks on PIM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter \"\u003cEmployeeName\u003e\" and \"\u003cId\u003e\" and \"\u003cSupervisor\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user select the employee details with dropdowns",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on search",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "check-orangehrm-home-page-functionality;verify-the-employee-details;",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "Id",
        "Supervisor"
      ],
      "line": 28,
      "id": "check-orangehrm-home-page-functionality;verify-the-employee-details;;1"
    },
    {
      "cells": [
        "Peter",
        "0007",
        "John Smith"
      ],
      "line": 29,
      "id": "check-orangehrm-home-page-functionality;verify-the-employee-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "user is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "orghrm.user_is_on_login_page()"
});
formatter.result({
  "duration": 2728204900,
  "status": "passed"
});
formatter.match({
  "location": "orghrm.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1769372500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-IAVF1BP9\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 102.0.5005.27 (df4a85108ffa..., userDataDir: C:\\Users\\Ranjith\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59030}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d2c2d58967d3e4c9573a81b8c88dc387\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat Stepdefinitions.orghrm.user_enters_username_and_password(orghrm.java:28)\r\n\tat ✽.When user enters username and password(OrgHrm.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "orghrm.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "verify the employee details",
  "description": "",
  "id": "check-orangehrm-home-page-functionality;verify-the-employee-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user clicks on PIM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter \"Peter\" and \"0007\" and \"John Smith\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user select the employee details with dropdowns",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on search",
  "keyword": "And "
});
formatter.match({
  "location": "orghrm.user_clicks_on_PIM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 12
    },
    {
      "val": "0007",
      "offset": 24
    },
    {
      "val": "John Smith",
      "offset": 35
    }
  ],
  "location": "orghrm.user_enter_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.user_select_the_employee_details_with_dropdowns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "orghrm.click_on_search()"
});
formatter.result({
  "status": "skipped"
});
});