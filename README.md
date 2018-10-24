# Introduction

This is a i18n implementation to be used with [omi.js](https://github.com/Tencent/omi/blob/master/packages/omi-element-ui/src/omi-element-ui/el-radio/index.js) and is based on [i18next](https://www.i18next.com) internationalization framework.

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/omi-i18n) or [downloaded](https://github.com/i18next/omi-i18n/blob/master/omi-i18n.min.js) from this repo.

```
# npm package
$ npm install omi-i18n
```

# Translating content:

## using t function

For translating basic content you can use the `t` function as:

```js
import { t } from "omi-i18n";

<h1 class="app-title">{t("welcome")}</h1>;
```

For details using it see [i18next translation essentials](https://www.i18next.com/)

## using i18n-text

[Read more](https://github.com/i18next/omi-i18n#i18n-text) at the section web components.

# Web Components

## i18n-provider

It's the most outer element and is responsible to initialize the i18next instance.

Further it will trigger an update on parent and children on successful initialization (when ready to use `t` function).

```js
import { tag, WeElement } from "omi";
import { t } from "omi-i18n";

const catalog = {
  welcome: "Welcome to {{name}} using omi-i18n"
};

@tag("my-app")
class MyApp extends WeElement {
  render(props, data) {
    return (
      <i18n-provider locale="en" catalog={catalog}>
        <p slot="loading">
          <spinner-element />
        </p>
        <h1 class="app-title">{t("welcome", { name: data.name })}</h1>
      </i18n-provider>
    );
  }
}
```

### props

| name | description |
| ------------- | ------------- |
| locale | the language to use (needed for plural handling) |
| catalog | JSON containing all translations for details see [i18next translation essentials](https://www.i18next.com/) |

## i18n-text

i18n text allows you to set translations in an element like:

```js
// via i18n-provider provided catalog
const catalog = {
	"welcome": "Welcome to {{name}} using omi-i18n",
	"getStarted": "To get started, edit <code>src/elements/*/*.*</code> and save to reload."
}

<i18n-text key="welcome" options={{ name: 'omi v4' }} />
// output <span>Welcome to omi v4 using omi-i18n

<i18n-text ele="p" class="app-intro" key="getStarted" sethtml /*css={this.css}*/ />
// output <p class="app-intro">To get started, edit <code>src/elements/*/*.*</code> and save to reload.</p>
```

### props



| name | default | description |
| ------------- | ------------- | ------------- |
| ele | span | the element to render |
| key | undefined | the translation key to lookup |
| options | undefined | t options see [docs](https://www.i18next.com/translation-function/essentials#overview-options) |
| sethtml | false | set the translation text as innerHtml -> allows you to have html in translations |
| css | undefined | pass down a css function to use |
| ...rest | undefined | allows you to pass down any other prop to element eg. pass down the prop `class` to define a class |

---

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://locize.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>
