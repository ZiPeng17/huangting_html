<template>
  <div class="sided-table">
    <div>
      <table cellspacing="1" cellpadding="0" border="0" width="700">
        <tr>
          <td v-for="(item,index) in tab_list" class="ball-name" ref="tableList">
            <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :width="150" @selectNumChange="selectNumChange" :sonIndex="'tab_list'+index" ref="ballList" class="ball-list"></ball-list>
          </td>
        </tr>
      </table>
      <div>
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="(item,index) in compare" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="187" :firstTd="45.5" @selectNumChange="selectNumChange" :sonIndex="'compare'+index" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div style="padding-top: 10px;">
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="(item,index) in totalCompare" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="187" :firstTd="45.5" @selectNumChange="selectNumChange" :sonIndex="'longHu'" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <table cellspacing="1" cellpadding="0" border="0" width="751">
          <tr>
            <td v-for="(item,index) in longHu" class="ball-name" ref="tableList">
              <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="250" :firstTd="45.5" @selectNumChange="selectNumChange" :sonIndex="'longHu'" ref="ballList" class="ball-list"></ball-list>
            </td>
          </tr>
        </table>
      </div>
      <div class="directly-select">
        <div>
          <p class="title">前三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="(item,index) in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" @selectNumChange="selectNumChange" :sonIndex="'centerTabList1'" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p class="title">中三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="(item,index) in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" @selectNumChange="selectNumChange" :sonIndex="'centerTabList2'" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p class="title">后三</p>
          <table cellspacing="1" cellpadding="0" border="0">
            <tr>
              <td v-for="(item,index) in centerTabList" class="ball-name" ref="tableList">
                <ball-list :todayTime="todayTime" :info="item" :type_index="type_index" :thShow="false" :width="150" @selectNumChange="selectNumChange" :sonIndex="'centerTabList3'" ref="ballList" class="ball-list"></ball-list>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <tz-money 
        :todayTime="todayTime" 
        :type_index="type_index" 
        @sendMoney="sendMoney" 
        @clearChip="clearChip" 
        @sendSelected="sendSelected"
        @resetTdOnSelected="resetTdOnSelected" 
        @bet="bet" ref="tzMoney"></tz-money>
    </div>
    <!-- <chuqiulv :type_list="type_list" :num_list="num_list"></chuqiulv> -->
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
                num: 9.697
              },
              {
                no: 5,
                num: 9.697
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 1,
                num: 9.697
              },
              {
                no: 6,
                num: 9.697
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 2,
                num: 9.697
              },
              {
                no: 7,
                num: 9.697
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 3,
                num: 9.697
              },
              {
                no: 8,
                num: 9.697
              }
            ]
          },
          {
            ballname: '',
            data: [
              {
                no: 4,
                num: 9.697
              },
              {
                no: 9,
                num: 9.697
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
                num: 9.158
              }

            ]
          }
        ],
        centerTabList: [
          {
            data: [
              {
                no: '豹子',
                num: 69.9
              }
            ]
          },
          {
            data: [
              {
                no: '顺子',
                num: 12.9
              }
            ]
          },
          {
            data: [
              {
                no: '对子',
                num: 2.1
              }

            ]
          },
          {
            data: [
              {
                no: '半顺',
                num: 1.4
              }
            ]
          },
          {
            data: [
              {
                no: '杂六',
                num: 1.9
              }
            ]
          }

        ],
        type_list: ["第3球", "大小", "单双", "总和大小", "总和单双", "龙虎"],//出球率列表
        num_list:[
          {ball:0,num:5},
          {ball:1,num:2},
          {ball:2,num:5},
          {ball:3,num:4},
          {ball:4,num:5},
          {ball:5,num:7},
          {ball:6,num:1},
          {ball:7,num:5},
          {ball:8,num:2},
          {ball:9,num:8}
        ],  //0-9出现的次数
        args: {}
      }
    },
    methods: {
      select_type: function (i) {
        this.type_index = i;
      },
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
        // 重置
        this.args = {}
      },
      selectNumChange(obj) {
        Array.prototype.unique3 = function(){
          var res = [];
          var json = {};
          for(var i = 0; i < this.length; i++){
            if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
            }
          }
          return res;
        }
        console.log(obj.witch);
        let args = this.args;
        if (obj.witch) {
          if (obj.witch == 'longHu') {
            args['sum'] = ((args['sum'] || []).concat(obj.arr)).unique3()
          } else if (obj.witch == 'centerTabList1') {
            args['frontS'] = ((args['frontS'] || []).concat(obj.arr)).unique3()
          } else if (obj.witch == 'centerTabList2') {
            args['mediumS'] = ((args['mediumS'] || []).concat(obj.arr)).unique3()
          } else if (obj.witch == 'centerTabList3') {
            args['postS'] = ((args['postS'] || []).concat(obj.arr)).unique3()
          } else {
            args['three'] = ((args['three'] || []).concat(obj.arr)).unique3()
          }
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
              sonIndex: obj.sonIndex ? obj.sonIndex : '' ,
              data:obj.data
            })
          }
        }
        if(!xz.length) {
          alert('请填写下注金额！！！')
          return
        }
        let args = {};
        console.log(xz);
        xz.forEach((item)=> {
          if (item.sonIndex == 'longHu') {
            if (args['sum']) {
              args['sum'] += arg_str(item.data);
            } else {
              args['sum'] = '';
              args['sum'] += arg_str(item.data);
            } 
          } else if (item.sonIndex == 'centerTabList1') {
            if (args['frontS']) {
              args['frontS'] += arg_str(item.data);
            } else {
              args['frontS'] = '';
              args['frontS'] += arg_str(item.data);
            } 
          } else if (item.sonIndex == 'centerTabList2') {
            if (args['mediumS']) {
              args['mediumS'] += arg_str(item.data);
            } else {
              args['mediumS'] = '';
              args['mediumS'] += arg_str(item.data);
            } 
          } else if (item.sonIndex == 'centerTabList3') {
            if (args['postS']) {
              args['postS'] += arg_str(item.data);
            } else {
              args['postS'] = '';
              args['postS'] += arg_str(item.data);
            } 
          } else {
            if (args['three']) {
              args['three'] += arg_str(item.data);
            } else {
              args['three'] = '';
              args['three'] += arg_str(item.data);
            } 
          }
        })
        function arg_str (_item) {
          let str = '';
          _item.forEach((res)=> {
            str += res.num + '-' + res.price + ','
          })
          return str
        }
        for (let k in args) {
          args[k] = args[k].substr(0, args[k].length-1)
        }
        args['user'] = this.global.userInfo.id;
        this.$http.post(this.global.base_url + '/Admin/Api/grtfrom', args, {emulateJSON:true}).then(res => {
            console.log(res.data);
            this.session(res.data.money);
            alert(res.data.res)
        }, error => {
            console.log(error);
            alert('服务器错误或网络异常，请稍后重试');
        });
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
