<template>
    <div class="page">
        <div>
            <select style="CURSOR: hand" onchange="ReportType(0,this)">
                <option class="font_b" value="3" selected="">重庆时时彩</option>
            </select>
            <span> — 今日账单</span>
        </div>
        <table class="t_list" border="0" cellspacing="1" cellpadding="0">
            <tbody>
                <tr>
                    <td class="t_list_caption" width="96">期号</td>
                    <td class="t_list_caption" width="130">开奖时间</td>
                    <td class="t_list_caption" width="100">下注(有效)金额</td>
                    <td class="t_list_caption" width="100">结果</td>
                    <td class="t_list_caption" width="80">退水</td>
                    <td class="t_list_caption" width="105">退水后结果</td>
                </tr>
                <tr class="t_list_tr_1" v-for="n in data">
                    <td>{{n.p_num}}</td>
                    <td>{{n.time}}</td>
                    <td class="f_right">{{n.money}}&nbsp;</td>
                    <td class="f_right">{{n.have ? n.have : "0.00"}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
                <tr class="t_list_bottom">
                    <td colspan="2">合计</td>
                    <td>{{total_money}}</td>
                    <td class="f_right">{{total_win.toFixed(2)}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
export default {
  data() {
      return {
          data: [],
          total_money: 0,
          total_win: 0
      }
  },
  created() {
    this.$http.post( this.global.base_url + '/Admin/Api/getbetlist', {user: this.global.userInfo.id, page:this.curr_page}, {emulateJSON:true}).then(res => {
        // console.log(res);
        if (res.data.code == "000") {
            this.data = res.data.msg;
            for (var i in this.data) {
                this.total_money += parseFloat(this.data[i].money);
                this.total_win += parseFloat(this.data[i].have ? this.data[i].have : 0);
            }
        } else {
            alert(res.data.msg)
        }
    }, error => {
        console.log(error);
    });
  }
}
</script>


<style scoped>
    .page {
        padding: 20px;
    }
</style>

