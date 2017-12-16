<template>
    <div class="sided-table">
      <div>
        <table cellspacing="1" cellpadding="0" border="0">
          <tr align="center">
            <td colspan="4" class="title">总和 - 龙虎</td>
          </tr>
          <tr>
            <td v-for="item in tab_list" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="180" :firstTd="50" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
        <div>
          <div class="left type">
            <span class="first">类型</span>
            <span>大</span>
            <span>小</span>
            <span>单</span>
            <span>双</span>
          </div>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="item in ball_list" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="135" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <tz-money :todayTime="todayTime" :type_index="type_index" @sendMoney="sendMoney" @clearChip="clearChip" @resetTdOnSelected="resetTdOnSelected" ref="tzMoney"></tz-money>
      </div>
      <chuqiulv :type_list="type_list"></chuqiulv>
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
          tab_list: [  //表格数据
            {
              ballname: '',
              data: [
                {
                  no: '总和大',
                  num: 1.94
                },
                {
                  no: '龙',
                  num: 1.94
                }
              ]
            },
            {
              ballname: '',
              data: [
                {
                  no: '总和小',
                  num: 1.94
                },
                {
                  no: '虎',
                  num: 1.94
                }
              ]
            },
            {
              ballname: '',
              data: [
                {
                  no: '总和单',
                  num: 1.94
                },
                {
                  no: '和',
                  num: 1.94
                }
              ]
            },
            {
              ballname: '',
              data: [
                {
                  no: '总和双',
                  num: 1.94
                }
              ]
            }
          ],
          ball_list: [  //表格数据
            {
              ballname: '第一球',
              data: [
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                }
              ]
            },
            {
              ballname: '第二球',
              data: [
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                }
              ]
            },
            {
              ballname: '第三球',
              data: [
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                }
              ]
            },
            {
              ballname: '第四球',
              data: [
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                }
              ]
            },
            {
              ballname: '第五球',
              data: [
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                },
                {
                  num: 1.94
                }
              ]
            }
          ],
          type_list: ["1球大小", "1球单双", "2球大小", "2球单双", "3球大小", "3球单双", "4球大小", "4球单双", "5球大小", "5球单双", "总和大小", "总和单双", "龙虎"],
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
        resetTdOnSelected() {
          this.$refs.ballList.forEach((el,index) => {
            this.$refs.ballList[index].resetSelected()
          })
        }
      },
      components: {
        ballList,
        tzMoney,
        chuqiulv
      }
    }
</script>

<style scoped>
  .left{
    float: left;
  }
  .title{
    background-image: url(../../../static/image/bg.jpg);
    line-height: 24px;
    text-align: center;
    color: #4a1a04;
    font-weight: bold;
  }
  .type span {
    display: block;
    text-align: center;
    line-height: 25.8px;
    width:48px;
    height:25.8px;
    background-color: #fdf8f2;
    border-bottom:1px solid  #e9ba84;
  }
  .type .first {
    font-weight:bold;
    background-image: url(../../../static/image/bg.jpg);
  }
</style>
