import { tag, WeElement } from "omi"
import logo from "./logo.svg"
import style from "./_index.css"
import "../app-intro"

import { t, i18n } from "omi-i18n";

const catalog = {
	"welcome": "Welcome to {{name}} using omi-i18n",
	"getStarted": "To get started, edit <code>src/elements/*/*.*</code> and save to reload."
}

@tag("my-app")
class MyApp extends WeElement {
	static get data() {
		return { name: "" }
	}

	clickHandler = () => {
		this.store.rename("Omi V4.0")
	};

	css() {
		return style
	}

	render(props, data) {
		return (
			<i18n-provider locale="en" catalog={catalog}>
				<p slot="loading">
					<img
						src={logo}
						class="app-logo"
						alt="logo"
					/>
				</p>
				<div class="app">
					<header class="app-header">
						<img
							src={logo}
							onClick={this.clickHandler}
							class="app-logo"
							alt="logo"
						/>
						<h1 class="app-title">{t('welcome', { name: data.name })}</h1>
					</header>
					<app-intro />
				</div>
			</i18n-provider>
		)
	}
}
