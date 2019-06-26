(function(d,f,s){
    s=d.createElement('script');
    // jQuery
    s.src='//j.mp/2qitMS8';
    // jQuery onload event
    s.onload=function(){
        f(window,d,jQuery.noConflict(!0));
    };
    // load jQuery
    d.body.appendChild(s);
})(document,function(w,d,$){
    // submit button id (custom)
    const SUBMIT_BUTTON='button_mfconfirm';
    // form validation rules (custom)
    const rules={
        '姓':{
            customValidator:function() {
                return $('[name="姓"]').val().length != 0 && $('[name="名"]').val().length != 0;
            },
            customValidatorArgs:[],
        },
        '名':{
            customValidator:function() {
                return $('[name="姓"]').val().length != 0 && $('[name="名"]').val().length != 0;
            },
            customValidatorArgs:[],
        },
        'セイ':{
            customValidator:function() {
                return $('[name="セイ"]').val().length != 0 && $('[name="メイ"]').val().length != 0;
            },
            customValidatorArgs:[],
        },
        'メイ':{
            customValidator:function() {
                return $('[name="セイ"]').val().length != 0 && $('[name="メイ"]').val().length != 0;
            },
            customValidatorArgs:[],
        },
        'email':{
            required:true,
            pattern:'[\\w.\\-+]+@(?:[\\w-]+\\.)+[\\w-]+$'
        },
        'confirm_email':{
            required:true,
            equalTo:'email',
            pattern:'[\\w.\\-+]+@(?:[\\w-]+\\.)+[\\w-]+$'
        },
        '電話番号':{
            required:true,
            pattern:'^\\+?[\\d-]+\\d$'
        },
        '区分':{
            required:true,
            invalidAreaClass:'mf_rows'
        },
        '業種':{
            required:true,
            invalidAreaClass:'mf_rows'
        },
        '年齢確認':{
            required:true,
            invalidAreaClass:'mf_checkwrap'
        },
        '個人情報確認':{
            required:true,
            invalidAreaClass:'mf_checkwrap'
        },
    };
    // invalid messages (custom)
    const messages={
        'name':{
            required:'必須項目です。入力をお願いします。',
            maxLength:'5文字以内で入力してください。',
            displayArea:''
        },
        'email':{
            required:'必須項目です。入力をお願いします。',
            pattern:'Eメールの形式で入力して下さい。',
            displayArea:''
        }
    };
    // form validation methods
    const validator={
        required:function(v){
            return !!v;
        },
        maxLength:function(v,l){
            return v.length<=l;
        },
        pattern:function(v,p){
            return (new RegExp(p)).test(v);
        },
        equalTo:function(v,s){
            return v===s;
        }
    };
    // sanitaizing methods
    const sanitaize={
        encode:function(s){
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        },
        decode:function(s){
            return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
        }
    };
    // exec validation
    const validation=function(k){
        rules[k]['valid']=!0;
        let o=$('[name="'+k+'"]').eq(0);
        let e=rules[k].invalidAreaClass?o.closest('.'+rules[k].invalidAreaClass).eq(0):o;
        if(['radio','checkbox'].includes(o.attr('type'))) o=$('[name="'+k+'"]:checked');
        if(rules[k].required) rules[k].valid&=validator.required(o.val());
        if(rules[k].maxLength) rules[k].valid&=validator.maxLength(o.val(),rules[k].maxLength);
        if(rules[k].pattern) rules[k].valid&=validator.pattern(o.val(),rules[k].pattern);
        if(rules[k].equalTo) rules[k].valid&=validator.equalTo(o.val(),$('[name="'+rules[k].equalTo+'"]').val());
        if(rules[k].customValidator) rules[k].valid&=rules[k].customValidator.apply(rules[k].customValidatorArgs);
        if(rules[k].valid) e.removeClass('mf_error');
        else e.addClass('mf_error');
    };
    // add validation in blur event
    Object.keys(rules).forEach(function(k){
        $('[name="'+k+'"]').on('blur change',function(){
            validation(k);
        });
    });
    // add submit event
    $('.'+SUBMIT_BUTTON).on('click',function(){
        const result =  Object.keys(rules).map(function(k){
            validation(k);
            return k;
        }).every(function(k){
            console.log(rules[k])
            return rules[k]['valid'] === 1
        })

        if (result){
            window.location.href = '../input-netlify/confirm-s.html';
        }
    });
});