<template>
  <div class="sided-table">
    <div>
      <table cellspacing="1" cellpadding="0" border="0" width="700">
        <tr>
          <td v-for="item in tab_list" class="ball-name" ref="tableList">
            <ball-list :todayTime="todayTime" :info="item" :type_index="type_index"  :width="150" ref="ballList" class="ball-list"></ball-list>
          </td>
        </tr>
      </table>
      <div>
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="item in compare" class="ball-name" ref="tableList">
              <ball-list  :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="187" :firstTd="45.5" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div style="padding-top: 10px;">
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="item in totalCompare" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="187" :firstTd="45.5" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="item in longHu" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="250" :firstTd="45.5" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div class="directly-select">
        <div>
          <p class="title">前三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="item in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p class="title">中三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="item in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p class="title">后三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="item in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <tz-money :todayTime="todayTime" :type_index="type_index" @sendMoney="sendMoney" @clearChip="clearChip" ref="tzMoney"></tz-money>
    </div>
    <chuqiulv :type_list="type_list" :num_list="num_list"></chuqiulv>
  </div>
</template>

<script>
  import ballList from '../ball-list/ball-list'
  import tzMoney from '../tz-money/tz-money'
  import chuqiulv from '../chuqiulv/chuqiulv'
  export default {
    props: {
      todayTime: {
        type: Boolean,
        default: true
      },
      type_index: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {
        tab_list: [
          {
            ballname: '',
            data: [
              {
                no: 0,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 1,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 2,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 3,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 4,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              }
            ]
          }
        ],
        ball_list: [
          {
            data: [
              {
                no: '大',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '小',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '单',
                num: 1.94
              }

            ]
          },
          {
            data: [
              {
                no: '双',
                num: 1.94
              }
            ]
          }
        ],
        compare: [
          {
            data: [
              {
                no: '大',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '小',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '单',
                num: 1.94
              }

            ]
          },
          {
            data: [
              {
                no: '双',
                num: 1.94
              }
            ]
          }
        ],
        totalCompare: [
          {
            data: [
              {
                no: '总和大',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '总和小',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '总和单',
                num: 1.94
              }

            ]
          },
          {
            data: [
              {
                no: '总和双',
                num: 1.94
              }
            ]
          }
        ],
        longHu: [
          {
            data: [
              {
                no: '龙',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '虎',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '和',
                num: 1.94
              }

            ]
          }
        ],
        centerTabList: [
          {
            data: [
              {
                no: '豹子',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '顺子',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '对子',
                num: 1.94
              }

            ]
          },
          {
            data: [
              {
                no: '半顺',
                num: 1.94
              }
            ]
          },
          {
            data: [
              {
                no: '杂六',
                num: 1.94
              }
            ]
          }

        ],
        type_list: ["第五球", "大小", "单双", "总和大小", "总和单双", "龙虎"],//出球率列表
        num_list:[
          {ball:0,num:1},
          {ball:1,num:2},
          {ball:2,num:6},
          {ball:3,num:8},
          {ball:4,num:3},
          {ball:5,num:7},
          {ball:6,num:4},
          {ball:7,num:3},
          {ball:8,num:21},
          {ball:9,num:2}
        ]  //0-9出现的次数
      }
    },
    methods: {
      sendMoney(val) {
        this.money = val
        let isChecked = false
        this.$refs.ballList.forEach((el,index) => {
          isChecked = this.$refs.ballList[index].isChecked() || isChecked
        })
        if(isChecked) {
          this.$refs.ballList.forEach((el, index) => {
            this.$refs.ballList[index].inputMoney(this.money)
          })
          this.$refs.tzMoney.reset()
        } else {
          alert('请选择需要填写下注金额的复选框!!!')
        }
      },
      clearChip() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index].clearInput()
        })
      },
    },
    components: {
      ballList,
      tzMoney,
      chuqiulv
    }
  }
</script>

<style scoped>
  .title{
    background-image: url(../../../static/image/bg.jpg);
    line-height: 24px;
    text-align: center;
    color: #4a1a04;
    width:750px;
    font-weight: bold;
  }
</style>
