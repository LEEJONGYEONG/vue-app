import { createApp } from 'vue'
import app from './App.vue'
import testHome from './views/TestHome.vue'
import noticeList from './views/JY_P_NoticeList.vue'
import routers from './routers/routers.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(app).mount('#app')
app.use(routers)
testHome.use(routers)
noticeList.use(routers)
