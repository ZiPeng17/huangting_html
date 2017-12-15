<template>
    <div class="page">
        <div>
            &nbsp;日期
            <input style="CURSOR: hand" class="inp1" value="2017-12-14" readonly="" size="11">
            &nbsp;－
            <input style="CURSOR: hand" class="inp1" value="2017-12-14" readonly="" size="11">
            <input class="button_a" value="昨天" type="button" >
            <input class="button_a" value="今天" type="button">
            <input class="button_a" value="本周" type="button">
            <input class="button_a" value="上周" type="button">
            <input class="button_a" value="查询" type="button">
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
                    <td>重庆时时彩</td>
                    <td>0</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
                <tr class="t_list_bottom">
                    <td>合计</td>
                    <td>0</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

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

