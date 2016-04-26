
var Aruna = {
    init : function() {
        "use strict";
        $('.tags-selector').tagsInput({
            autocomplete:{ selectFirst:true,width:'100px',autoFill:true },
            'interactive':true,
            'defaultText':'Add tag',
            'removeWithBackspace' : true,
            'placeholderColor' : '#afafaf',
            width: "100%"
        });
        $('.tagsinput input')
            .focus(function() {
                $('.tagsinput').css({"border" : "solid 2px #7541cc"});
            })
            .blur(function() {
                $('.tagsinput').css({"border" : "solid 2px #e8e8e8"});
            });
        $(document).on('submit','.form-disabled', function(e){
            e.preventDefault();
        });

        // $('#agreeTerms').on('change', function() {
        //    if($(this).is(":checked")) {
        //        $('#error-button').fadeOut({
        //            duration: 500,
        //            queue : false,
        //            complete : function() {
        //                $('#register-button').fadeIn(500);
        //                $('.registration_form .social-auth-button').removeClass('disabled');
        //                $('.registration_form').removeClass('form-disabled');
        //            }
        //        });
        //    } else {
        //        $('#register-button').fadeOut({
        //            duration: 500,
        //            queue : false,
        //            complete : function() {
        //                 $('#error-button').fadeIn(500);
        //                 $('.registration_form .social-auth-button').addClass('disabled');
        //                 $('.registration_form').addClass('form-disabled');
        //            }
        //        });
        //    }
        // });
        jQuery("img.lazy").lazyload({
            effect : "fadeIn"
        });

        $('.myCombobox').selectBoxIt({
            autoWidth: false
        });
        $('.categoryCombobox').selectBoxIt({
            autoWidth: false
        });
        $('.categoryCombobox').bind({
            "change" : function(ev, obj) {
                console.log(obj);
                var color = $('.categoryComboboxSelectBoxItOptions').find('.selectboxit-focus').attr('rel');
                $('.categoryComboboxSelectBoxIt').css({background : color});
            }
        });
        $('#myTab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
        // this.initFlexsliders();
        $('.has-tooltip').tooltip({
            placement: "bottom",
            animation : "true"
        });
        $('.has-popover').popover({
            placement: "top",
            trigger : "hover"
        });

        jQuery('.social-icons .facebook, .social-icons .googleplus, .social-icons .twitter').on('click', function(e) {
            e.preventDefault();
            var href = jQuery(this).data('href');
            // console.log(href);
            openWindow(href);
        });

        function openWindow(url){
            // console.log(url);
            var width=640;
            var height=460;
            var topPos=window.screen.height/2-(height/2);
            var leftPos=window.screen.width/2-(width/2);
            window.open(url,"Share", "status=1,height=" + height + ",width=" + width + ",top=" + topPos + ",left=" + leftPos + ",resizable=0");
        }
        jQuery('.modal-top-menu button').click(Aruna.switchWindow);
        jQuery('.myCombobox').on("change", Aruna.switchWindowPost);
    },

    switchWindowPost : function() {
        var windowName = jQuery(this).val();
        jQuery('.post-window').not('.'+windowName).fadeOut(0, function() {
            jQuery('.'+windowName).fadeIn(500, function() {
            });
        });
    },
    switchWindow : function() {
        var windowName = jQuery(this).attr('rel');
        jQuery('.modal-window').not('.'+windowName).fadeOut(100, function() {
            jQuery('.modal-top-menu button').removeClass('active-ind');
            jQuery('.'+windowName).fadeIn(100, function() {
                jQuery('.modal-top-menu button[rel="'+windowName+'"]').addClass('active-ind');
            });
        });
    },
    scrollTop : function() {
        jQuery('body, html').animate({
            scrollTop : 0
        }, 500);
    },

};

$(document).on('page:change', function() {
    Aruna.init();
});



Dropzone.autoDiscover = false;
var ready;

ready = function() {
 $("#my-awesome-dropzone").dropzone({ // The camelized version of the ID of the form element

    // The configuration we've talked about above
    autoProcessQueue: false,
    previewsContainer: '.upload-preview',
    uploadMultiple: false,
    parallelUploads: 100,
    maxFiles: 1,
    paramName: "image[media]",
    addRemoveLinks: true,
    clickable: ".file-upload-button", // Define the element that should be used as click trigger to select files.
    createImageThumbnails: false,
    // The setting up of the dropzone
    init: function() {
      var myDropzone = this;
      this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
         myDropzone.processQueue();
        // if(formIsReady()){
        //   myDropzone.processQueue();
        // }
      });
      this.on("addedfile", function(file) {
        $('.upload-wrap').hide();
            // console.log(file);

         var FR= new FileReader();
         FR.onload = function(e) {
             // console.log( e.target.result); //This is the base64 data of file(gif) dropped
             //if you want to display it somewhere in your previewTemplate
             $('.upload-preview img').attr('src',e.target.result); //setting as src of some img tag with class 'my-preview'
         };
         FR.readAsDataURL( file );
      });
      this.on("removedfile", function(file) {
        $('.upload-wrap').show();
        $('.upload-preview img').attr('src','');
      });
      this.on("sending", function() {
      });
      this.on("success", function(file, response) {
        console.log(response)
        window.location.href = "/"
      });
      this.on("complete", function(file, response) {

      });
      this.on("error", function(file, response) {
        var form = $("."+response.type.toLowerCase()+"-upload-form");
        form.find('.form-group').removeClass('has-error');
        form.find('span.help-block').remove();
        $.each(response.errors, function(field, messages) {
            var input;
            input = form.find('input, select, textarea').filter(function() {
              var name;
              name = $(this).attr('name');
              if (name) {
                return name.match(new RegExp('post' + '\\[' + field + '\\(?'));
              }
            });
            input.closest('.form-group').addClass('has-error');
            input.parent().append('<span class="help-block">' + field.charAt(0).toUpperCase() + field.slice(1) + ": " + $.map(messages, function(m) {
                return m.charAt(0).toUpperCase() + m.slice(1);
              }).join('<br />') + '</span>');
        });
      });
      this.on("removedfile", function(file) {
        var id = $(file.previewTemplate).find('.dz-remove').attr('id');
      });
    }
  });
};

function formIsReady(){
  var x = $('input[name=title]').val();
  if (x == null || x == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    return true;
  }
}

$(document).on('page:change', ready);


$(document).on('click', '.login-button, .register-button', Aruna.switchWindow);

$(document).on('click', '.icon-like, .icon-dislike', function(){
    $(this).addClass('animated rubberBand');
});

$(document).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', '.icon-like, .icon-dislike', function(){
    $(this).removeClass('animated rubberBand');
});

$(window).bindWithDelay('scroll', function() {
  return jQuery(function() {
    if ($('#infinite-scrolling').size() > 0) {
      $(window).on('scroll', function() {
        var more_posts_url;
        more_posts_url = $('#infinite-scrolling .next_page a').attr('href');
        if (more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - 60) {
          $('.pagination').html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..."/>');
          $.getScript(more_posts_url, function() {});
        }
      });
    }
  });
}, 100);



