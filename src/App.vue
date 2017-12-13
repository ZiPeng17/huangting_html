<template>
  <div id="app">
    <tab @selectText="selectText"></tab>
    <lottery-info :lottery="lottery" :title="title"></lottery-info>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import lotteryInfo from './components/lottery-info/lottery-info'

import '../static/css/reset.css'
export default {
  data(){
    return {
      title: '整合',
      lottery:{
        thisPhase: '20171213005',
        prevPhase: '20171213004',
        endTime: '09:10',
        startTime: '01:20',
      }
    }
  },
  methods:{
    selectText(val) {
      this.title = val
    }
  },
  name: 'app',
  components: {
    Tab,
    lotteryInfo
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
