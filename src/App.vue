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
      <lottery-info :todayTime="todayTime" :lottery="lottery" :title="title" @todayTime="todayTime"></lottery-info>
      <div v-if="currentIndex === 0">
        <total-table :todayTime="todayTime"></total-table>
      </div>
      <div v-else-if="currentIndex === 1">
        <sided-table :todayTime="todayTime"></sided-table>
      </div>
      <div v-else-if="currentIndex === 2">
        <one-to-five :todayTime="todayTime"></one-to-five>
      </div>
      <div v-else-if="currentIndex === 3">
        <first-ball :todayTime="todayTime"></first-ball>
      </div>
      <div v-else-if="currentIndex === 4">
        <second-ball :todayTime="todayTime"></second-ball>
      </div>
      <div v-else-if="currentIndex === 5">
        <three-ball :todayTime="todayTime"></three-ball>
      </div>
      <div v-else-if="currentIndex === 6">
        <four-ball :todayTime="todayTime"></four-ball>
      </div>
      <div v-else-if="currentIndex === 7">
        <five-ball :todayTime="todayTime"></five-ball>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import lotteryInfo from './components/lottery-info/lottery-info'
import totalTable from './components/total-table/total-table'
import sidedTable from './components/sided-table/sided-table'
import oneToFive from './components/one-to-five/one-to-five'
import firstBall from './components/first-ball/first-ball'
import secondBall from './components/second-ball/second-ball'
import threeBall from './components/three-ball/three-ball'
import fourBall from './components/four-ball/four-ball'
import fiveBall from './components/five-ball/five-ball'
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
        sealingTime: 600,
        endTime: '09:10',
        startTime: '01:20',
      },
      currentIndex : 0,
      show_top_menu: {
        state: false,
        currIndex: 2
      },
      todayTime: false   //当前的时间是否开盘  false代表今天已经封盘   开盘时间07 ---  16  点
    }
  },
  created() {
    this.beginTime()
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
    beginTime() {
      let date = new Date()
      let hour = date.getHours()
      if(hour >= 7 || hour <= 16) {
        this.todayTime = true
      }else {
        this.todayTime = true
      }
    }
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
    oneToFive,
    firstBall,
    secondBall,
    threeBall,
    fourBall,
    fiveBall,
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
