import { tag, WeElement } from "omi"
import style from "./_index.css"


@tag("app-intro")
class AppIntro extends WeElement {
	css() {
		return (
			style +
			`
    code{
      color: ${Math.random() > 0.5 ? "red" : "blue"}
    }`
		)
	}

	render(props, data) {
		return (
			<i18n-text ele="p" class="app-intro" key="getStarted" sethtml css={this.css} />
		)
	}
}
