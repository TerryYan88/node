const xhr = new XMLHttpRequest();
xhr.open('GET','https://captcha.fengkongcloud.com/ca/v1/register?organization=ltA7kUoBFCTVmRodXoKD&sdkver=1.1.3&appId=default&data=%7B%7D&channel=DEFAULT&lang=zh-cn&model=slide&rversion=1.0.3&callback=sm_1623831906399');
xhr.send();
xhr.onload = function (){
    console.log(JSON.parse(xhr.responseText));
}