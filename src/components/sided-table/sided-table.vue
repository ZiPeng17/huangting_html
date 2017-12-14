<template>
    <div class="sided-table">
      <div class="span-01">
        <span class="tz_type">投注类型：</span>
        <span @click="select_type(1)"
              :class="['tz_type-btn', type_index === 1 ? 'select-tz_type-btn' : '']"
        >快捷</span>
        <span :class="['tz_type-btn', type_index == 2 ? 'select-tz_type-btn' : '']" @click="select_type(2)">一般</span>
      </div>
      <div>
        <table cellspacing="1" cellpadding="0" border="0">
          <tr align="center">
            <td colspan="4" class="title">总和 - 龙虎</td>
          </tr>
          <tr>
            <td v-for="item in tab_list" class="ball-name" ref="tableList">
              <ball-list :info="item" :type_index="type_index" :thShow="false" :width="180" ref="ballList" class="ball-list"></ball-list>
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
                <ball-list :info="item" :type_index="type_index" :thShow="false" :width="135" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <tz-money @sendMoney="sendMoney" @clearChip="clearChip" ref="tzMoney" :type_index="type_index"></tz-money>
      </div>
    </div>
</template>

<script>
  import ballList from '../ball-list/ball-list'
  import tzMoney from '../tz-money/tz-money'
    export default {
      data() {
        return {
          type_index: 2,
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
        }
      },
      methods: {
        select_type: function (i) {
          this.type_index = i;
        },
        sendMoney(val) {
          this.money = val
          if (this.selectTab.length && this.selectChec.length) {
            this.selectTab.forEach((num) => {
              this.$refs.ballList[num].inputMoney(this.selectChec,this.money)
            })
            this.$refs.tzMoney.reset()
            this.$refs.selectBall.removeClass()
            this.selectTab = []
            this.selectChec = []
          }else {
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
        tzMoney
      }
    }
</script>

<style scoped>
  .left{
    float: left;
  }
  .span-01 {
    display: inline-block;
    padding: 0 0 10px 20px;
    width: 220px;
    color: #4f260d;
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
