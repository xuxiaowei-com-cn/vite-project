import { createApp } from 'vue'
import './style.css'

/*防止 ElMessageBox 样式无效*/
/*防止 ElMessageBox 的样式在 Table 之下*/
import 'element-plus/es/components/message-box/style/css';

import App from './App.vue'

createApp(App).mount('#app')
