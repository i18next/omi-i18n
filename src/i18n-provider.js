import { define, WeElement } from "omi";
import i18next from "i18next";

class I18nProvider extends WeElement {
  static get data() {
		return { ready: false };
  }

  static pure = true

  install() {
    const { locale, catalog } = this.props;

    if (i18next.isInitialized) return;

    i18next.init({
      lng: locale,
      resources: {
        [locale]: {
          translation: catalog
        }
      }
    }, () => {
      this.data.ready = true;

      function handleRecursiveUpdate(parentNode) {
        parentNode.childNodes.forEach((node) => {
          node.update && node.update();
          handleRecursiveUpdate(node);
        })
      }

      if (this.parentNode && this.parentNode.host) {
        this.parentNode.host.update && this.parentNode.host.update();
        handleRecursiveUpdate(this);
      } else {
        this.parentNode.update && this.parentNode.update();
        handleRecursiveUpdate(this);
      }
    });
  }


	render(props) {
    if (!this.data.ready) {
      return <slot name="loading"></slot>
    }
		return (
			<slot></slot>
		);
	}
}

define('i18n-provider', I18nProvider)
