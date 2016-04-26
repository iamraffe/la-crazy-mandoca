/*

HANDLE VIDEO INPUT

 */

function extractVideoID(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if ( match && match[7].length == 11 ){
      return match[7];
  }else{
      alert("Could not extract video ID.");
  }
}

$(document).on('input', 'input[name="video[url]"]', function(e) {

    var video_id = extractVideoID($('input[name="video[url]"]').val());
    console.log(video_id)
    $(this).toggleClass('hide');
    $("#youtube-preview").toggleClass('hide')
    $("#youtube-preview #video-cover").attr('src', 'http://img.youtube.com/vi/'+video_id+'/hqdefault.jpg');
});

$(document).on('click', '#cancel-video-upload', function(e) {
    $('input[name="video[url]"]').toggleClass('hide').val('');
    $("#youtube-preview").toggleClass('hide');
    // $("#youtube-preview .video-cover").attr('src', '');
});


/*

HANDLE VIDEO UPLOAD

 */


$(document).on("ajax:success", ".video-upload-form", function(e, data, status, xhr){
    window.location.href = "/"
})
$(document).on("ajax:error", ".video-upload-form", function(e, data, status, xhr){
    var response = data.responseJSON;
    var form = $("."+response.type.toLowerCase()+"-upload-form");
    form.find('.form-group').removeClass('has-error');
    form.find('span.help-block').remove();
    $.each(response.errors, function(field, messages) {
        var input;
        input = form.find('input, select, textarea').filter(function() {
          var name;
          name = $(this).attr('name');
          if (name) {
            return name.match(new RegExp(response.field + '\\[' + field + '\\(?'));
          }
        });
        input.closest('.form-group').addClass('has-error');
        input.parent().append('<span class="help-block">' + field.charAt(0).toUpperCase() + field.slice(1) + ": " + $.map(messages, function(m) {
            return m.charAt(0).toUpperCase() + m.slice(1);
          }).join('<br />') + '</span>');
    });
})