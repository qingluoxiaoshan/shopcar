$(function () {
    var sum=0,
        price=0;
    $(".check-one").on("click", function () {

        //点击产品底下的数量和价格相对应的改变
        if($(this).prop("checked")){
            sum += $(this).parent().siblings().find(".count-input").val()-0;
            price += Math.round(($(this).parent().siblings(".subtotal").html()-0));
        }else{
            sum -= $(this).parent().siblings().find(".count-input").val()-0;
            price -=  Math.round(($(this).parent().siblings(".subtotal").html()-0));
        }
        $("#selectedTotal").html(sum);
        $("#priceTotal").html(price);

        var flag = true;
        $(".check-one").each(function (i, v) {

            //底下产品全部选中则全选
            if ($(v).prop("checked") === false) {
                $(".check-all").prop("checked", false);
                flag = false;
                return false;
            }
            $(".check-all").prop("checked", flag);
        });
    })
    //点击全选底下产品全部选中
    $(".check-all").on("click", function () {

        $(".check-all").each(function (i,v) {
            console.log($(v));
            console.log( $(v).prop("checked"));

        })
        $(".check").prop("checked", $(".check-all").prop("checked"));
//点击全选的，底部发生相对应的数量和价格改变
            if ($(".check-all").prop("checked")) {
                sum = 0;price=0;
                $(".check-one").each(function (i, v) {
                    sum += $(v).parent().siblings().find(".count-input").val() - 0;
                    price += Math.round(($(this).parent().siblings(".subtotal").html() - 0));
                })
             }else{
                $(".check-one").each(function (i, v) {
                    sum -= $(v).parent().siblings().find(".count-input").val() - 0;
                    price -= Math.round(($(v).parent().siblings(".subtotal").html() - 0));
                })
        }
        $("#selectedTotal").html(sum);
        $("#priceTotal").html(price);
    });
    //点击全部删除
    $("#deleteAll").on("click",function () {
        if(confirm("确定要删除吗？")) {
            $(".check-one").each(function (i, v) {
                if($(v).prop("checked")){
                    $(v).parent().parent().remove();
                }
            })
        }
    })
    //点击删除，则删除对应的产品
    $(".operation").on("click",function () {
        console.log(sum);
        if(confirm("确定要删除吗？")) {
             $(this).parent().remove();
        }
        sum -= $(this).siblings().find(".count-input").val()-0;
        price -=  Math.round(($(this).siblings(".subtotal").html()-0));

        $("#selectedTotal").html(sum);
        $("#priceTotal").html(price);
    })
    //每个产品点击+，对应的产品就会增加且下面会跟随着变化
    var count = 1;
    $(".add").on("click",function () {
        count++;
        console.log($(this).siblings(".count-input").val(count));
        //小计跟着变化
        $(this).parent().siblings(".subtotal").html(count*$(this).parent().siblings(".price").html())
    })

});

