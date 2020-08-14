$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `<div class="message-detail" data-message-id=${message.id}>
                    <div class="message-detail__name-date">
                      <p class="member-name">
                        ${message.user_name}
                      </p>
                      <p class="date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message-detail__message">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
    return html;
    } else {
      let html = `<div class="message-detail" data-message-id=${message.id}>
                    <div class="message-detail__name-date">
                      <p class="member-name">
                        ${message.user_name}
                      </p>
                      <p class="date">
                        ${message.created_at}
                      </p>
                    </div>
                    <div class="message-detail__message">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    return html;
    }
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let url = $(this).attr('action');
    let formData = new FormData(this);
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $(".send").prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $(".send").prop('disabled', false);
    })
  });
});