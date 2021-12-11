let sentMsg = $('.delivered')
let textMsg = $('#msg')
let sendBtn = $('#send')
let clearBtn = $('#delete')

sendBtn.click(function(){
   let message = textMsg.val()
   sentMsg.text(message)

})
clearBtn.click(function(){
    sentMsg.text('');
    textMsg.val('')
})