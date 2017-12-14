<template>
  <div id="app">
    <top-tab @selectTopText="selectTopText"></top-tab>
    <tab @selectText="selectText"></tab>
    <div v-if="show_top_menu.state">
      <today-order v-if="show_top_menu.currIndex === 2"></today-order>
      <bet-detail v-else-if="show_top_menu.currIndex === 3"></bet-detail>
      <jsTable v-else-if="show_top_menu.currIndex === 4"></jsTable>
      <history-lottery v-else-if="show_top_menu.currIndex === 5"></history-lottery>
      <rule v-else-if="show_top_menu.currIndex === 6"></rule>
    </div>
    <div v-else>
      <lottery-info :lottery="lottery" :title="title"></lottery-info>
      <div v-if="currentIndex === 0">
        <total-table></total-table>
      </div>
      <div v-else-if="currentIndex === 1">
        <sided-table></sided-table>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import lotteryInfo from './components/lottery-info/lottery-info'
import totalTable from './components/total-table/total-table'
import sidedTable from './components/sided-table/sided-table'
import topTab from './components/top-tab/top-tab'
import todayOrder from './components/today-order/today-order'
import betDetail from './components/bet-detail/bet-detail'
import jsTable from './components/jsTable/jsTable'
import historyLottery from './components/history-lottery/history-lottery'
import rule from './components/rule/rule'

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
      currentIndex : 0,
      show_top_menu: {
        state: false,
        currIndex: 2
      }
    }
  },
  methods:{
    selectText(val,index) {
      this.title = val
      this.currentIndex = index
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
    betDetail,
    totalTable,
    sidedTable,
    jsTable,
    historyLottery,
    rule
  }
}
</script>

<style>
#app {
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
