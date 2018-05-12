<template>
    <div class="page">
        <div>
            &nbsp;日期
            <input style="CURSOR: hand" class="inp1" id="start_date" :value="start_date" readonly="" size="11">
            &nbsp;－
            <input style="CURSOR: hand" class="inp1" id="end_date" :value="end_date" readonly="" size="11">
            <input class="button_a" value="昨天" @click="yesterday" type="button" >
            <input class="button_a" value="今天" @click="today" type="button">
            <input class="button_a" value="本周" @click="toweek" type="button">
            <input class="button_a" value="上周" @click="prevweek" type="button">
            <input class="button_a" value="查询" @click="submit" type="button">
        </div>
        <table class="t_list" border="0" cellspacing="1" cellpadding="0">
            <tbody>
                <tr>
                    <td class="t_list_caption" width="96">游戏类别</td>
                    <td class="t_list_caption" width="65">注单数</td>
                    <td class="t_list_caption" width="100">下注金额</td>
                    <td class="t_list_caption" width="100">有效金额</td>
                    <td class="t_list_caption" width="100">结果</td>
                    <td class="t_list_caption" width="80">退水</td>
                    <td class="t_list_caption" width="105">退水后结果</td>
                </tr>
                <tr class="t_list_tr_1">
                    <td>极速时时彩</td>
                    <td>{{detail.num}}</td>
                    <td class="f_right">{{detail.money}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">{{detail.res}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
                <tr class="t_list_bottom">
                    <td>合计</td>
                    <td>{{detail.num}}</td>
                    <td class="f_right">{{detail.money}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">{{detail.res}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
import laydate from 'layui-laydate'
import 'layui-laydate/dist/theme/default/laydate.css'
export default {
    data() {
        return{
            start_date: new Date(),
            end_date: new Date(),
            detail: {}
        }
    },
  created() {
    this.today()
    this.submit()
  },
  mounted() {
      laydate.render({ 
        elem: '#start_date', //或 elem: document.getElementById('test')、elem: lay('#test') 等
        format: 'yyyy-MM-dd'
    });
      laydate.render({ 
        elem: '#end_date', //或 elem: document.getElementById('test')、elem: lay('#test') 等
        format: 'yyyy-MM-dd'
    });
  },
  methods: {
      yesterday() {
        this.start_date  = this.filter(new Date(new Date().getTime() - 24*60*60*1000));
        this.end_date  = this.filter(new Date());
      },
      today() {
        this.start_date = this.end_date = this.filter(new Date())
      },
      toweek() {
        this.start_date  = this.filter(new Date(new Date().getTime() - 7*24*60*60*1000));
        this.end_date  = this.filter(new Date());
      },
      prevweek() {
        this.start_date  = this.filter(new Date(new Date().getTime() - 14*24*60*60*1000));
        this.end_date  = this.filter(new Date(new Date().getTime() - 7*24*60*60*1000));
      },
      filter(date) {
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var str = date.getFullYear() + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day)
          return str;
      },
      submit() {
        // 调接口
        this.$http.post(this.global.base_url + '/Admin/Api/betlist', {user: this.global.userInfo.id, starttime: this.start_date, endtime: this.end_date}, {emulateJSON:true}).then(res => {
            // console.log(res.data);
            if (res.data.code == "000") {
            this.detail = res.data.res
            } else {
            alert(res.data.msg)
            }
        }, error => {
            console.log(error);
        });
      }
  }
}
</script>


<style scoped>
    .page {
        padding: 20px;
    }
    .button_a {
        cursor: pointer;
        padding: 3px 8px;
    }
    .inp1 {
        border: 1px solid #b0b0b0;
        cursor: pointer;
    }
    td {
        cursor: default;
    }
</style>

