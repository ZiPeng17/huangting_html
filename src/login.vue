<template>

<form id="form_login" onsubmit="return finalcheck();" name="form_login" method="post" autocomplete="off">
<table  border="0" cellpadding="0" cellspacing="0" style="background-color: #110502">
  <tbody><tr>
    <td valign="top">
      <table width="1066" border="0" align="center" cellpadding="0" cellspacing="0">
      <tbody><tr>
        <td height="314" class="td1_bg">&nbsp;</td>
      </tr>
      <tr>
        <td height="106" background="/static/image/login_2.jpg" align="left">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tbody><tr>
            <td width="408" height="106"></td>
            <td width="211" valign="top"><table width="95%" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td height="35" valign="top"><input type="text" value="" name="loginName" tabindex="1" style="width:194px; height:29px; background-color:#200b04; border:solid 1px #b24b0f; font-size:20px; font-weight: bold; color:#fd9b4b"></td>
              </tr>
              <tr>
                <td height="35" valign="top"><input type="password" value="" tabindex="2" name="loginPwd" style="width:194px; height:29px; background-color:#200b04; border:solid 1px #b24b0f; font-size:20px; font-weight: bold; color:#fd9b4b"></td>
              </tr>
              <tr>
                <td height="30" valign="top"><input type="text" name="ValidateCode" tabindex="3" maxlength="4" onkeypress="digitOnly(event)" style="width:100px; height:29px; background-color:#200b04; border:solid 1px #b24b0f; font-size:20px; font-weight: bold; color:#fd9b4b">
                <a id="chgImg" href="javascript:changeCaptcha();"><img id="ValidateCode" name="ValidateCode" width="86" height="28" border="0" title="看不清楚，換一張" align="absmiddle" src="/public/captcha.php"></a></td>
              </tr>
            </tbody></table></td>
            <td width="447" valign="top"><input class="btn" name="Submit" tabindex="4" onmouseout="this.className='btn'" onmouseover="this.className='btn_m'" value="" type="submit"></td>
          </tr>
          </tbody></table>
        </td>
      </tr>
      <tr>
        <td height="267" background="/static/image/login_3.jpg">        
          <div style="color: #ffffff; padding-top: 70px; text-align: center;">
		    推荐分辩率为1280 × 960及以上。<span>推荐浏览器为 <a href="http://rj.baidu.com/soft/detail/14744.html?ald" target="_blank" style="color:red">谷歌Chrome</a>，<a href="http://rj.baidu.com/soft/detail/23356.html" target="_blank" style="color:red">微软IE9</a>，<a href="http://rj.baidu.com/soft/detail/10365.html" target="_blank" style="color:red">火狐Firefox</a> 以及 <a href="http://rj.baidu.com/soft/detail/12966.html" target="_blank" style="color:red">苹果Safari</a>。</span><br>
		  <br>
	      </div>  
	   </td>
      </tr>
      </tbody></table>  
    </td>
  </tr>
</tbody></table>

</form>
</template>

<style scoped>
  table{
    width: 1066px;
    margin: auto;
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
    body {
	    margin-left: 0px;
	    margin-top: 0px;
	    margin-right: 0px;
	    margin-bottom: 0px;
	    background-color: #110502;
	    overflow:hidden;
		  background-image: url(/static/image/login_topbg.jpg);
		  background-repeat: repeat-x;
    }
    .Fone_Color {font-size: 12px; color: #adc9d9; }
    .btn, .btn_m
    {
        width: 104px;
        height: 87px;
        border: 0px solid #FF9224;
        background-color: #FFFFFF;
        background-image: url( '/static/image/login_but.jpg');
        cursor: hand;
        background-position:0px 0;
    }
    .btn
    {
        background-position: 0px 0;
    }
    .btn_m
    {
		cursor: hand;
        background-position: -104px 0;
    }
    .td1_bg{
      background: url("/static/image/login_1.jpg") no-repeat top center;
    }
</style>
