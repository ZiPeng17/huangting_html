<template>
  <div class="total-table">
    <div class="span-01">
      <span class="tz_type">投注类型：</span><span @click="select_type(1)"
                                              :class="['tz_type-btn', type_index === 1 ? 'select-tz_type-btn' : '']">快捷</span><span
      :class="['tz_type-btn', type_index == 2 ? 'select-tz_type-btn' : '']" @click="select_type(2)">一般</span>
    </div>
    <div class="clearfix table-wrapper">
      <table cellspacing="1" cellpadding="0" border="0">
        <tr>
          <td v-for="item in tab_list" class="ball-name" ref="tableList">
            <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" ref="ballList" class="ball-list"></ball-list>
          </td>
        </tr>
      </table>
    </div>
    <select-ball @selectThisBall="selectThisBall" @selectThisNum="selectThisNum" :type_index="type_index" ref="selectBall"></select-ball>
    <!--下注-->
    <tz-money @sendMoney="sendMoney" @clearChip="clearChip" ref="tzMoney" :type_index="type_index"></tz-money>
    <!-- 出球率 -->
    <chuqiulv :type_list="type_list"></chuqiulv>
  </div>
</template>

<script>
  import ballList from '../ball-list/ball-list'
  import selectBall from '../select-ball/select-ball'
  import tzMoney from '../tz-money/tz-money'
  import chuqiulv from '../chuqiulv/chuqiulv'
  export default {
    props: {
      todayTime: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        type_index: 2,
        tab_list: [  //表格数据
          {
            ballname: '第一球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第二球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第三球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第四球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第五球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
        ],
        tab_list_num: {  //表格数据
          ballname: '总和-龙虎和',
          data: [{
            no: '总和大',
            num: 1.94
          },
            {
              no: '总和小',
              num: 1.94
            },
            {
              no: '总和单',
              num: 1.94
            },
            {
              no: '总和双',
              num: 1.94
            },
            {
              no: '龙',
              num: 1.94
            },
            {
              no: '虎',
              num: 1.94
            },
            {
              no: '和',
              num: 1.94
            }
          ]
        },
        tab_list_radio: {  //表格数据
          ballname: '',
          data: [
            {
              no: '豹子',
              num: 1.94
            },
            {
              no: '顺子',
              num: 1.94
            },
            {
              no: '对子',
              num: 1.94
            },
            {
              no: '半顺',
              num: 1.94
            },
            {
              no: '杂六',
              num: 1.94
            }
          ]

        },
        type_list: ["1球大小", "1球单双", "2球大小", "2球单双", "3球大小", "3球单双", "4球大小", "4球单双", "5球大小", "5球单双", "总和大小", "总和单双", "龙虎"],//出球率列表
        selectBall: -1,   //选择第几个球下标
        selectNum: -1,    // 选择的数字下标
        selectTab: [],    // 选中的球列表集合
        selectChec: [],   //选中的数字列表集合
        money: ''        //下注金额
      }
    },
    methods: {
      select_type: function (i) {
        this.type_index = i;
      },

      selectThisBall(arr) {
        this.selectTab = arr
      },
      selectThisNum(arr) {
        this.selectChec = arr
      },
      sendMoney(val) {
        this.money = val
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index].inputMoney(this.money)
        })
        this.$refs.tzMoney.reset()
        this.$refs.selectBall.removeClass()
        this.selectTab = []
        this.selectChec = []
      },
      clearChip() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index].clearInput()
        })
      },
      _check() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index]._checkInit()
        })
        if (this.selectTab.length && this.selectChec.length) {
          this.selectTab.forEach((num) => {
            this.$refs.ballList[num].selectChecked(this.selectChec,this.money)
          })
        }
      }
    },
    watch: {
      selectChec() {
        this._check()
      },
      selectTab() {
        this._check()
      },
      type_index(val) {
        if (val === 2) {
          this._check()
        }
      }
    },
    components: {
      ballList,
      selectBall,
      tzMoney,
      chuqiulv
    }
  }
</script>

<style scoped>
  .ball-name {
    background-image: url(../../../static/image/bg.jpg);
    line-height: 24px;
    text-align: center;
    color: #4a1a04;
    font-weight: bold;
  }

  .right {
    float: left;
  }

  .span-01 {
    display: inline-block;
    padding: 0 0 10px 20px;
    width: 220px;
    color: #4f260d;
  }

  .left {
    float: left;
  }
  .table-wrapper{

  }
  .tz_type {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    color: #501e02;
    margin-right: 7px;
  }

  .tz_type-btn {
    display: inline-block;
    border: 1px solid #cacaca;
    background: #fff;
    border-radius: 2px;
    padding: 0 4px;
    margin-right: 6px;
    cursor: pointer;
  }

  .select-tz_type-btn {
    background: #fffec2;
    border: 1px solid #d8a467;
    color: #CF0000;
    font-weight: 700;
  }
</style>

