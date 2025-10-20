import App from './App.vue?raw'
import styles from '../../../basics/examples/styles.css?raw'
import IconCss from './icon.css?raw'

const files = {
  'src/icon.css': {
    code: IconCss,
    readOnly: false,
    active: true,
  },
  'src/App.vue': {
    code: App,
  },
  'src/styles.css': {
    code:styles,
    hidden: true
  },
}

export default files
