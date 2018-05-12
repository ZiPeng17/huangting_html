<template>

<form id="form_login" class="body">
<div v-if="show_login">
  <table width="100%" height="100%"  border="0" cellpadding="0" cellspacing="0" style="background-color: #110502">
  <tbody><tr>
    <td valign="top">
      <table width="1066" style="margin:auto;" border="0" align="center" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
        <td height="314" class="td1_bg">&nbsp;</td>
      </tr>
      <tr>
        <td height="106" class="td2_bg" align="left">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tbody><tr>
            <td width="408" height="106"></td>
            <td width="211" valign="top" style="vertical-align: top;"><table width="95%" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td height="35" valign="top"><input type="text" value="" v-model="username" name="loginName" tabindex="1" style="width:194px; height:29px; background-color:#200b04; border:solid 1px #b24b0f; font-size:20px; font-weight: bold; color:#fd9b4b"></td>
              </tr>
              <tr>
                <td height="35" valign="top"><input type="password" value="" v-model="password" tabindex="2" name="loginPwd" style="width:194px; height:29px; background-color:#200b04; border:solid 1px #b24b0f; font-size:20px; font-weight: bold; color:#fd9b4b"></td>
              </tr>
              <tr>
                <td height="30" valign="top"></td>
              </tr>
            </tbody></table></td>
            <td width="447" valign="top"><div class="btn" @click="login"></div></td>
          </tr>
          </tbody></table>
        </td>
      </tr>
      <tr>
        <td height="267" background="/static/image/login_3.jpg">        
          <div style="color: #ffffff; padding-top: 150px; text-align: center;">
		    推荐分辩率为1280 × 960及以上。<span>推荐浏览器为 <a href="http://rj.baidu.com/soft/detail/14744.html?ald" target="_blank" style="color:red">谷歌Chrome</a>，<a href="http://rj.baidu.com/soft/detail/23356.html" target="_blank" style="color:red">微软IE9</a>，<a href="http://rj.baidu.com/soft/detail/10365.html" target="_blank" style="color:red">火狐Firefox</a> 以及 <a href="http://rj.baidu.com/soft/detail/12966.html" target="_blank" style="color:red">苹果Safari</a>。</span><br>
		  <br>
	      </div>  
	   </td>
      </tr>
      </tbody></table>  
    </td>
  </tr>
</tbody>
</table>
</div>
<div v-else>
  <div class="xyBox" style="text-align:left">
    <div class="top"></div>
    <div class="box1">
      <ul>
        <li><span>1、</span><label>使用本公司網站的客戶，請留意閣下所在的國家或居住地的相關法律規定，如有疑問應就相關問題，尋求當地法律意見。</label></li>
        <li><span>2、</span><label>若發生遭駭客入侵破壞行為或不可抗拒之災害導致網站故障或資料損壞、資料丟失等情況，我們將以本公司之後備資料為最後處理依據；為確保各方利益，請各會員投注後列印資料。本公司不會接受沒有列印資料的投訴。</label></li>
        <li><span>3、</span><label>為避免糾紛，各會員在投注之後，務必進入下注狀況檢查及列印資料。若發現任何異常，請立即與代理商聯繫查證，一切投注將以本公司資料庫的資料為准，不得異議。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。</label></li>
        <li><span>4、</span><label>單一注單最高派彩上限為一百萬。</label></li>
        <li><span>5、</span><label>開獎結果以官方公佈的結果為准。</label></li>
        <li><span>6、</span><label>我們將竭力提供準確而可靠的開獎統計等資料，但並不保證資料絕對無誤，統計資料只供參考，並非是對客戶行為的指引，本公司也不接受關於統計數據產生錯誤而引起的相關投訴。</label></li>
        <li><span>7、</span><label>本公司擁有一切判決及註消任何涉嫌以非正常方式下註之權利，在進行更深入調查期間將停止發放與其有關之任何彩金。客戶有責任確保自己的帳戶及密碼保密，如果客戶懷疑自己的資料被盜用，應立即通知本公司，並須更改其個人詳細資料。所有被盜用帳號之損失將由客戶自行負責。在某種特殊情況下，客人之信用額可能會出現透支。</label></li>
        <li>&nbsp;</li>
        <li style="text-align:right;">“皇庭”管理層 敬啟　</li>
        <li style="text-align:center;">
          <div style="padding:0 125px;">
            <div style="float:left;width:10px;">
              <input id="prRead" name="prRead" type="checkbox" v-model="checked" value="" checked="checked">
            </div>我瞭解以及同意下註列明的協定和規則。
          </div>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
    <div class="bottom">
      <input id="btnExit" name="btnExit" type="button" @click="notagree" class="btn">　
      <input type="hidden" id="agree" name="agree" value="yes"> 　　
      <input id="Submit" name="Submit" type="button" @click="agree" class="btn1">
    </div>
    <div class="clear"></div>
  </div>
</div>


</form>
</template>

<script>
export default {
  data() {
    return{
      username: '',
      password: '',
      piccode: '',
      show_login: true,
      checked: true
    }
  },
  methods: {
    login() {
      if (!this.username) {
        alert('请输入用户名');
        return false;
      }
      if (!this.password) {
        alert('请输入密码');
        return false;
      }
      var args = {
        name: this.username.trim(),
        paw: this.password.trim()
      };
      this.$http.post(this.global.base_url + '/Admin/Api/login', args, {emulateJSON:true}).then(res => {
          console.log(res.data);
          if (res.data.code == "000") {
            this.show_login = false;
            this.global.userInfo = res.data.user;
            window.sessionStorage.setItem("userinfo", JSON.stringify(res.data.user));
          } else {
            alert(res.data.msg)
          }
      }, error => {
          console.log(error);
      });
    },
    notagree() {
      this.show_login = true;
    },
    agree() {
      if (!this.checked) {
        alert('请仔细阅读协议和规则');
        return false;
      } else {
        console.log(this.$router);
        /// 路由跳转有问题
        this.$router.push({ path: '/mainpage'});
      }
    }
  }
}
</script>


<style scoped>
table {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  color: -internal-quirk-inherit;
  text-align: start;
  font-variant: normal normal;
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
.body {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  background-color: #110502;
  overflow: auto;
}
.Fone_Color {
  font-size: 12px;
  color: #adc9d9;
}
.btn,
.btn_m {
  width: 104px;
  height: 87px;
  border: 0px solid #ff9224;
  background-color: #ffffff;
  background-image: url("/static/image/login_but.jpg");
  cursor: hand;
  background-position: 0px 0;
}
.btn {
  background-position: 0px 0;
}
.btn_m {
  cursor: hand;
  background-position: -104px 0;
}
.td1_bg {
  background: url("/static/image/login_1.jpg") no-repeat top center;
}
.td2_bg {
  background: url("/static/image/login_2.jpg") no-repeat top center;
  background-size: 100% 100%;
}

.xyBox {
    margin: 3% auto 0px;
    width: 650px;
}
.xyBox .top {
    background: url('/static/image/ptop.jpg') no-repeat;
    width: 650px;
    height: 111px;
    float: left;
}
.xyBox .box1 {
    background: url('/static/image/pbox.jpg') no-repeat;
    padding: 0px 75px;
    width: 500px;
    height: 475px;
    float: left;
}
.xyBox .box1 ul {
    margin: 0px;
    padding: 0px;
    width: 500px;
    float: left;
}
.xyBox .box1 li {
    list-style: none;
    width: 500px;
    color: rgb(238, 192, 169);
    line-height: 18px;
    font-size: 12px;
    margin-bottom: 7px;
    float: left;
}
.xyBox .box1 span {
    width: 20px;
    float: left;
}
.xyBox .box1 label {
    width: 480px;
    float: left;
}
.xyBox .bottom {
    background: url('/static/image/pbottom.jpg') no-repeat;
    width: 650px;
    height: 147px;
    text-align: center;
    float: left;
}
.clear {
  clear:both;
}
.xyBox .bottom .btn {
}
.xyBox .bottom .btn {
    background: url('/static/image/pbtn.jpg') no-repeat;
    border: 0px currentColor;
    border-image: none;
    width: 102px;
    height: 36px;
    cursor: pointer;
    background-position: 0px 0px;
}
.xyBox .bottom .btn1 {
}
.xyBox .bottom .btn1 {
    background: url('/static/image/pbtn.jpg') no-repeat;
    border: 0px currentColor;
    border-image: none;
    width: 102px;
    height: 36px;
    cursor: pointer;
    background-position: -102px 0px;
}
</style>
