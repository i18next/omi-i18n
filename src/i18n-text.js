import { h, define, WeElement } from "omi"

import i18next from "i18next";

class FormattedText extends WeElement {
  static pure = true

  css() {
    if (this.props.css) return this.props.css();
  }

	installed() {
		if (this.props.sethtml) this.host.innerHTML = i18next.t(this.props.key, this.props.options);
	}

	render(props, data) {
    const { ele, key, options, sethtml, css, ...rest } = props;

		return h(
      ele || 'span',
      rest,
      sethtml ? undefined : i18next.t(key, options)
    )
	}
}

define('i18n-text', FormattedText)