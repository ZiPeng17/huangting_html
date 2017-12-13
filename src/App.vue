<template>
  <div id="app">
    <top-tab @selectTopText="selectTopText"></top-tab>
    <tab @selectText="selectText"></tab>
    <div v-if="show_top_menu.state">
      <today-order v-if="show_top_menu.currIndex === 2"></today-order>
      <bet-detail v-else-if="show_top_menu.currIndex === 3"></bet-detail>
    </div>
    <div v-else>
      <lottery-info :lottery="lottery" :title="title"></lottery-info>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import lotteryInfo from './components/lottery-info/lottery-info'
import topTab from './components/top-tab/top-tab'
import todayOrder from './components/today-order/today-order'
import betDetail from './components/bet-detail/bet-detail'

import '../static/css/reset.css'
export default {
  data(){
    return {
      top_title: '整合',
      title: '整合',
      lottery:{
        thisPhase: '20171213005',
        prevPhase: '20171213004',
        endTime: '09:10',
        startTime: '01:20',
      },
      show_top_menu: {
        state: false,
        currIndex: 2
      }
    }
  },
  methods:{
    selectText(val) {
      this.title = val
      this.show_top_menu.state = false;
    },
    selectTopText(val, num) {
      this.show_top_menu.state = true;
      this.show_top_menu.currIndex = num;
      this.top_title = val
    },
  },
  name: 'app',
  components: {
    Tab,
    lotteryInfo,
    topTab,
    todayOrder,
    betDetail
  }
}
</script>

<style>
#app {
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
</style>
