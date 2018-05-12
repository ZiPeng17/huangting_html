<template>
  <div id="app">
    <div class="fixed-top">
      <top-tab @selectTopText="selectTopText" :state="show_top_menu.state"></top-tab>
      <tab @selectText="selectText"></tab>
    </div>
    <div class="fixed-bottom"></div>
    <div class="clear" style="min-width:1250px;">
      <div class="page-left lsection">
        <table border="0" cellpadding="0" cellspacing="1" class="t_list" width="210">
          <tbody>
            <tr><td class="t_list_caption" colspan="2">请检视您的账户</td> </tr>
            <tr>
              <td class="t_td_caption_1" width="64">帐户名称</td>
              <td class="t_td_text" width="146">{{userInfo.name}}</td>
            </tr>
            <tr>
              <td class="t_td_caption_1">开放赌盘</td>
              <td class="t_td_text">D盘</td>
            </tr>
            <tr>
              <td class="t_td_caption_1">交收货币</td>
              <td class="t_td_text">RMB(人民币)</td>
            </tr>
            <!-- <tr>
              <td class="t_td_caption_1">信用额度</td>
              <td class="t_td_text">1</td>
            </tr> -->
            <tr>
              <td class="t_td_caption_1">可用金额</td>
              <td class="t_td_text" id="user_money">{{userInfo.money}}</td>
            </tr>
            <!-- <tr>
              <td class="t_td_caption_1">已用金额</td>
              <td class="t_td_text">0.0</td>
            </tr> -->
          </tbody>
        </table>

        <div class="tab-box">
          <table class="t_list" border="0" cellspacing="1" cellpadding="0" width="210">
            <tbody>
              <tr>
                <td class="t_list_caption tjj1" colspan="6">最近十二期开奖走势</td>
              </tr>
              <tr>
                <td class="t_list_caption" colspan="6">
                  <span class="clrBtn" @click="click_left_tab(1)">号码</span>
                  <span class="clrBtn" @click="click_left_tab(2)">大小</span>
                  <span class="clrBtn" @click="click_left_tab(3)">单双</span>
                </td>
              </tr>
              <tr class="t_list_caption tjj2">
                <td>期号</td>
                <td>万</td>
                <td>千</td>
                <td>佰</td>
                <td>拾</td>
                <td>个</td>
              </tr>
              <tr class="tr_linw" v-for="it in row_data">
                <td class="jiqh">{{it.no}}</td>
                <td class="No_" v-for="item in it.numbers">{{item}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="page-left rsection">
        <div v-if="show_top_menu.state">
          <today-order v-if="show_top_menu.currIndex === 2"></today-order>
          <bet-detail v-else-if="show_top_menu.currIndex === 3"></bet-detail>
          <jsTable v-else-if="show_top_menu.currIndex === 4"></jsTable>
          <history-lottery v-else-if="show_top_menu.currIndex === 5"></history-lottery>
          <rule v-else-if="show_top_menu.currIndex === 6"></rule>
        </div>
        <div v-else class="app-content">
          <!-- <rank-list></rank-list> -->
          <lottery-info v-if="lottery.code" :todayTime="todayTime" :lottery="lottery" :title="title" @timeOver="timeOver" @timeBegin="timeBegin" @select_type="select_type"></lottery-info>
          <div v-if="currentIndex === 0">
            <total-table :todayTime="flag" :type_index="type_index"></total-table>
          </div>
          <div v-else-if="currentIndex === 1">
            <sided-table :todayTime="flag" :type_index="type_index"></sided-table>
          </div>
          <div v-else-if="currentIndex === 2">
            <one-to-five :todayTime="flag" :type_index="type_index"></one-to-five>
          </div>
          <div v-else-if="currentIndex === 3">
            <first-ball :todayTime="flag" :type_index="type_index"></first-ball>
          </div>
          <div v-else-if="currentIndex === 4">
            <second-ball :todayTime="flag" :type_index="type_index"></second-ball>
          </div>
          <div v-else-if="currentIndex === 5">
            <three-ball :todayTime="flag" :type_index="type_index"></three-ball>
          </div>
          <div v-else-if="currentIndex === 6">
            <four-ball :todayTime="flag" :type_index="type_index"></four-ball>
          </div>
          <div v-else-if="currentIndex === 7">
            <five-ball :todayTime="flag" :type_index="type_index"></five-ball>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "./components/tab/tab";
import rankList from "./components/rank-list/rank-list";
import lotteryInfo from "./components/lottery-info/lottery-info";
import totalTable from "./components/total-table/total-table";
import sidedTable from "./components/sided-table/sided-table";
import oneToFive from "./components/one-to-five/one-to-five";
import firstBall from "./components/first-ball/first-ball";
import secondBall from "./components/second-ball/second-ball";
import threeBall from "./components/three-ball/three-ball";
import fourBall from "./components/four-ball/four-ball";
import fiveBall from "./components/five-ball/five-ball";
import topTab from "./components/top-tab/top-tab";
import todayOrder from "./components/today-order/today-order";
import betDetail from "./components/bet-detail/bet-detail";
import jsTable from "./components/jsTable/jsTable";
import historyLottery from "./components/history-lottery/history-lottery";
import rule from "./components/rule/rule";

import "../static/css/reset.css";
export default {
  data() {
    return {
      top_title: "整合",
      title: "整合",
      lottery: {},
      currentIndex: 0,
      type_index: 2,
      show_top_menu: {
        state: false,
        currIndex: 2
      },
      todayTime: true, //当前的时间是否开盘  false代表封盘状态   开盘时间07 ---  16  点
      timeFlag: true, //封盘倒计时结束开始封盘  true 代表开盘状态  false代表封盘状态
      lotter_data: [],
      row_data: []
    };
  },
  created() {
    this.beginTime();
    if (!this.global.userInfo.id) {
      console.log(1111);
      var _user = window.sessionStorage.getItem("userinfo");
      if (_user) {
        var user = JSON.parse(_user);
        console.log(2222);
        if (user) {
          this.global.userInfo = user;
        } else {
          this.$router.back(-1);
        }
      } else {
        this.$router.back(-1);
      }
    }
    this.$http.post(this.global.base_url + '/Admin/Api/Getlist').then(res => {
      // console.log(res.data);
      this.lotter_data = res.data;
      this.switch_data(1);
    }, error => {
      console.log(error);
    });
    this.get_lottery_data()
  },
  computed: {
    flag() {
      return this.todayTime && this.timeFlag;
    },
    userInfo() {
      return this.global.userInfo
    }
  },
  methods: {
    get_lottery_data() {
      this.$http.post(this.global.base_url + '/Admin/Api/getperlist', {user: this.global.userInfo.id}, {emulateJSON:true}).then(res => {
        // console.log(res.data);
        if (res.data.code == '000') {
          this.lottery = res.data
        } else {
          alert(res.data.msg)
        }
      }, error => {
        console.log(error);
      });
    },
    select_type(i) {
      this.type_index = i;
    },
    selectText(val, index) {
      this.title = val;
      this.currentIndex = index;
      this.show_top_menu.state = false;
    },
    selectTopText(val, num) {
      this.show_top_menu.state = true;
      this.show_top_menu.currIndex = num;
      this.top_title = val;
    },
    timeOver(bool) {
      this.timeFlag = bool;
    },
    timeBegin(bool) {
      this.timeFlag = bool;
      location.reload() // 刷新整个网页
    },
    beginTime() {
      let date = new Date();
      let hour = date.getHours();
      if (hour >= 7 && hour <= 16) {
        //定时刷的时间范围
        this.todayTime = true;
      } else {
        this.todayTime = true;
      }
    },
    click_left_tab(num) {
      this.switch_data(num);
    },
    switch_data(num) {
      this.row_data = [];
      this.lotter_data.forEach(e => {
        let no = e.num.substr(-3);
        if (num === 1) {
          this.row_data.push({ no, numbers: [e.five, e.four, e.three, e.tow, e.one]});
        } else if (num === 2) {
          this.row_data.push({ no, numbers: [size(e.five), size(e.four), size(e.three), size(e.tow), size(e.one)]});
          function size (n) {
            let no = parseInt(n);
            return no > 4 ? '大' : '小'
          }
        } else {
          this.row_data.push({ no, numbers: [size(e.five), size(e.four), size(e.three), size(e.tow), size(e.one)]});
          function size (n) {
            let no = parseInt(n);
            return no % 2 === 0 ? '双' : '单'
          }
        }

      });
    }
  },
  name: "app",
  components: {
    Tab,
    rankList,
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
};
</script>

<style>
#app {
  padding-top: 112px;
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.tab-box {
  height: 291px;
  overflow-y: scroll;
}
.fixed-top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 300;
}
.fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 26px;
  width: 100%;
  background: url('/static/image/down_b.jpg') repeat-x;
  z-index: 300;
}
.app-content {
  padding: 0 0 50px 10px;
}
.clrBtn {
  font-size: 12px;
  padding: 0 5px;
  line-height: 1;
  font-family: Verdana, "����", Arial,Sans;
  color: #511e02;
  background: #fdf8f2;
  font-weight: 400;
  border: 1px solid #632707;
  border-radius: 2px;
  cursor: default;
}
.tr_linw {
  height: 20px;
  line-height: 17px;
  text-align: center;
  background: #ffffff;
  font-weight: bold;
}
.t_td_caption_1 {
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: #fdf8f2;
}
.t_td_text {
  height: 25px;
  line-height: 25px;
  text-indent: 4px;
  background-color: #FFFFFF;
}
.jiqh {
  color: #f60;
}
.clear {
  zoom:1;
}
.clear::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.page-left {
  float:left;
}
.lsection {
  padding: 10px;
  background: url('/static/image/l_backdrop.jpg') repeat-y;
  overflow-y: scroll;
}
.rsection {
  overflow-y: scroll;
}
</style>
