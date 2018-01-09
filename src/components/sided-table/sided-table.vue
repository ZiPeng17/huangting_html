<template>
    <div class="sided-table">
      <div>
        <table cellspacing="1" cellpadding="0" border="0">
          <tr align="center">
            <td colspan="4" class="title">总和 - 龙虎</td>
          </tr>
          <tr>
            <td v-for="(item, index) in tab_list" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :sonIndex="'tab_list'+index" :info="item" @selectNumChange="selectNumChange" :type_index="type_index" :thShow="false" :width="180" :firstTd="50" ref="ballList" class="ball-list"></ball-list>
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
              <td v-for="(item, index) in ball_list" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :sonIndex="'ball_list'+index" :info="item" @selectNumChange="selectNumChange" :type_index="type_index" :thShow="false" :width="135" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <tz-money 
          :todayTime="todayTime" 
          :type_index="type_index" 
          @bet="bet" 
          @sendMoney="sendMoney" 
          @clearChip="clearChip" 
          @sendSelected="sendSelected"
          @resetTdOnSelected="resetTdOnSelected" ref="tzMoney"></tz-money>
      </div>
      <!-- <chuqiulv :type_list="type_list"></chuqiulv> -->
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
                  num: 9.158
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
                  num: 1.94,
                  no: '大'
                },
                {
                  num: 1.94,
                  no: '小'
                },
                {
                  num: 1.94,
                  no: '单'
                },
                {
                  num: 1.94,
                  no: '双'
                }
              ]
            },
            {
              ballname: '第二球',
              data: [
                {
                  num: 1.94,
                  no: '大'
                },
                {
                  num: 1.94,
                  no: '小'
                },
                {
                  num: 1.94,
                  no: '单'
                },
                {
                  num: 1.94,
                  no: '双'
                }
              ]
            },
            {
              ballname: '第三球',
              data: [
                {
                  num: 1.94,
                  no: '大'
                },
                {
                  num: 1.94,
                  no: '小'
                },
                {
                  num: 1.94,
                  no: '单'
                },
                {
                  num: 1.94,
                  no: '双'
                }
              ]
            },
            {
              ballname: '第四球',
              data: [
                {
                  num: 1.94,
                  no: '大'
                },
                {
                  num: 1.94,
                  no: '小'
                },
                {
                  num: 1.94,
                  no: '单'
                },
                {
                  num: 1.94,
                  no: '双'
                }
              ]
            },
            {
              ballname: '第五球',
              data: [
                {
                  num: 1.94,
                  no: '大'
                },
                {
                  num: 1.94,
                  no: '小'
                },
                {
                  num: 1.94,
                  no: '单'
                },
                {
                  num: 1.94,
                  no: '双'
                }
              ]
            }
          ],
          type_list: ["1球大小", "1球单双", "2球大小", "2球单双", "3球大小", "3球单双", "4球大小", "4球单双", "5球大小", "5球单双", "总和大小", "总和单双", "龙虎"],
          args: {}
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
        sendSelected() {
          let xz = []
          let ballLists = this.$refs.ballList
          for(let k = 0; k < ballLists.length; k++) {
            let obj = ballLists[k].getChecked()
            if(obj.data.length) {
              for(let i=0;i<obj.data.length;i++) {
                if(!this.inputReg.test(obj.data[i].price)) {
                  alert('输入金额('+obj.data[i].price+')有误，下注金额需是2-50000之间的整数！！！')
                  return
                }
              }
              xz.push({
                name: obj.ballname ? obj.ballname : '' ,
                data:obj.data
              })
            }
          }
          if(!xz.length) {
            alert('请填写下注金额！！！')
            return
          }
          let args = {
            user: this.global.userInfo.id
          };
          console.log(xz);
          xz.forEach((item)=> {
            console.log(typeof item.name);
            if (item.name === '') {
              item.name = '总和-龙虎和'
            }
            if(item.name == '第一球') {
              args['one'] = arg_str(item)
            } else if(item.name == '第二球') {
              args['tow'] = arg_str(item)
            } else if(item.name == '第三球') {
              args['three'] = arg_str(item)
            } else if(item.name == '第四球') {
              args['four'] = arg_str(item)
            } else if(item.name == '第五球') {
              args['five'] = arg_str(item)
            } else if(item.name == '总和-龙虎和') {
              args['sum'] = arg_str(item)
            } else if(typeof item.name != 'string') {
              if (this.radioChecked == '前三') {
                args['frontS'] = arg_str(item)
              } else if(this.radioChecked == '中三') {
                args['mediumS'] = arg_str(item)
              } else if(this.radioChecked == '后三') {
                args['postS'] = arg_str(item)
              }
            }
            function arg_str (_item) {
              let str = '';
              _item.data.forEach((res)=> {
                str += res.num + '-' + res.price + ','
              })
              return str.substr(0, str.length-1)
            }
          })
          console.log(args);
          this.$http.post(this.global.base_url + '/Admin/Api/grtfrom', args, {emulateJSON:true}).then(res => {
              console.log(res.data);
              this.session(res.data.money);
              alert(res.data.res)
          }, error => {
              console.log(error);
              alert('服务器错误或网络异常，请稍后重试');
          });
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
          this.args = {}; //重置
        },
        selectNumChange(obj) {
          let args = this.args;
          if (obj.witch.indexOf('tab_list') > -1) {
            obj.option = '总和-龙虎和'
          }
          if(obj.option == '第一球') {
            args['one'] = obj.arr
          } else if(obj.option == '第二球') {
            args['tow'] = obj.arr
          } else if(obj.option == '第三球') {
            args['three'] = obj.arr
          } else if(obj.option == '第四球') {
            args['four'] = obj.arr
          } else if(obj.option == '第五球') {
            args['five'] = obj.arr
          } else if(obj.option == '总和-龙虎和') {
            args['sum'] = obj.arr
          } else if (obj.option == '前三') {
            args['frontS'] = obj.arr
          } else if(obj.option == '中三') {
            args['mediumS'] = obj.arr
          } else if(obj.option == '后三') {
            args['postS'] = obj.arr
          }
          this.args = args;
        },
        bet(val) {
        if (this.inputReg.test(val)) {
          if (Object.keys(this.args).length > 0) {
            var args = this.args; //这里需要对象的深克隆才能解决此问题（this.args）会变
            for(let key in args) {
              args[key] = arg_str(args[key])
            }
            args['user'] = this.global.userInfo.id;
            this.$http.post(this.global.base_url + '/Admin/Api/grtfrom', args, {emulateJSON:true}).then(res => {
                this.resetTdOnSelected();
                console.log(res.data);
                this.session(res.data.money);
                alert(res.data.res)
            }, error => {
                this.resetTdOnSelected();
                console.log(error);
                alert('服务器错误或网络异常，请稍后重试');
            });
            function arg_str (_item) {
              let str = '';
              _item.forEach((res)=> {
                str += res + '-' + val + ','
              })
              return str.substr(0, str.length-1)
            }
          } else {
            alert('请至少选择一种玩法');
          }
        } else {
          alert('输入金额('+val+')有误，下注金额需是2-50000之间的整数！！！');
        }
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
