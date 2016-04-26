
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

        $('#agreeTerms').on('change', function() {
           if($(this).is(":checked")) {
               $('#error-button').fadeOut({
                   duration: 500,
                   queue : false,
                   complete : function() {
                       $('#register-button').fadeIn(500);
                       $('.registration_form .social-auth-button').removeClass('disabled');
                       $('.registration_form').removeClass('form-disabled');
                   }
               });
           } else {
               $('#register-button').fadeOut({
                   duration: 500,
                   queue : false,
                   complete : function() {
                        $('#error-button').fadeIn(500);
                        $('.registration_form .social-auth-button').addClass('disabled');
                        $('.registration_form').addClass('form-disabled');
                   }
               });
           }
        });
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
        // $('#postModal').on('shown.bs.modal', function () {
        //     $(".post-window .window-left").not('.small-padding').mCustomScrollbar({
        //         scrollInertia : 0,
        //         scrollButtons:{
        //             enable: false
        //         },
        //         advanced:{
        //             updateOnBrowserResize: true,
        //             updateOnContentResize: true
        //         }
        //     });
        // });
        // $(".top-ten .drop-down").mCustomScrollbar({
        //     scrollInertia : 0,
        //     scrollButtons:{
        //         enable: false
        //     },
        //     advanced:{
        //         updateOnBrowserResize: true,
        //         updateOnContentResize: true
        //     }
        // });
        // $(".slider-numbers").mCustomScrollbar({
        //     scrollInertia : 0,
        //     scrollButtons:{
        //         enable: false
        //     },
        //     advanced:{
        //         updateOnBrowserResize: true,
        //         updateOnContentResize: true
        //     }
        // });
        // $(".slider-selector").mCustomScrollbar({
        //     scrollInertia : 0,
        //     scrollButtons:{
        //         enable: false
        //     },
        //     advanced:{
        //         updateOnBrowserResize: true,
        //         updateOnContentResize: true
        //     }
        // });
        // $('.left-aside .sidebar-content').mCustomScrollbar({
        //     scrollInertia : 0,
        //     scrollButtons:{
        //         enable: false
        //     },
        //     advanced:{
        //         updateOnBrowserResize: true,
        //         updateOnContentResize: true
        //     }
        // });

        // $('.top-ten').on('mouseenter', function() {
        //         $('.top-ten .drop-down').fadeIn({ duration: 400, queue : false });
        //     }).on('mouseleave', function() {
        //         $('.top-ten .drop-down').fadeOut({ duration: 400, queue : false });
        //     });

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

        // var uploadButton = $('<button/>')
        //     .addClass('btn btn-primary')
        //     .prop('disabled', true)
        //     .text('Processing...')
        //     .on('click', function () {
        //         var $this = $(this),
        //             data = $this.data();
        //         $this
        //             .off('click')
        //             .text('Abort')
        //             .on('click', function () {
        //                 $this.remove();
        //                 data.abort();
        //             });
        //         data.submit().always(function () {
        //             $this.remove();
        //         });
        //     });
        // $('.fileupload-init').fileupload({
        //     url: '/server/php/',
        //     dataType: 'json',
        //     autoUpload: false,
        //     acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        //     maxFileSize: 5000000, // 5 MB
        //     // Enable image resizing, except for Android and Opera,
        //     // which actually support image resizing, but fail to
        //     // send Blob objects via XHR requests:
        //     disableImageResize: /Android(?!.*Chrome)|Opera/
        //         .test(window.navigator.userAgent),
        //     previewMaxWidth: 265,
        //     previewMaxHeight: 265,
        //     previewCrop: true
        // }).on('fileuploadadd', function (e, data) {
        //         data.context = $('<div/>').appendTo('#'+$(e.target).attr('rel'));
        //         $.each(data.files, function (index, file) {
        //             var node = $('<p/>');
        //             if (!index) {
        //                 node
        //                     .append('<br>')
        //                     .append(uploadButton.clone(true).data(data));
        //             }
        //             node.appendTo(data.context);
        //         });
        //     }).on('fileuploadprocessalways', function (e, data) {
        //         var index = data.index,
        //             file = data.files[index],
        //             node = $(data.context.children()[index]);
        //         if (file.preview) {
        //             node
        //                 .prepend('<br>')
        //                 .prepend(file.preview);
        //         }
        //         if (file.error) {
        //             node
        //                 .append('<br>')
        //                 .append($('<span class="text-danger"/>').text(file.error));
        //         }
        //         if (index + 1 === data.files.length) {
        //             data.context.find('button')
        //                 .text('Upload')
        //                 .prop('disabled', !!data.files.error);
        //         }
        //     }).on('fileuploadprogressall', function (e, data) {
        //         var progress = parseInt(data.loaded / data.total * 100, 10);
        //         $('#progress .progress-bar').css(
        //             'width',
        //             progress + '%'
        //         );
        //     }).on('fileuploaddone', function (e, data) {
        //         $.each(data.result.files, function (index, file) {
        //             if (file.url) {
        //                 var link = $('<a>')
        //                     .attr('target', '_blank')
        //                     .prop('href', file.url);
        //                 $(data.context.children()[index])
        //                     .wrap(link);
        //             } else if (file.error) {
        //                 var error = $('<span class="text-danger"/>').text(file.error);
        //                 $(data.context.children()[index])
        //                     .append('<br>')
        //                     .append(error);
        //             }
        //         });
        //     }).on('fileuploadfail', function (e, data) {
        //         $.each(data.files, function (index, file) {
        //             var error = $('<span class="text-danger"/>').text('File upload failed.');
        //             $(data.context.children()[index])
        //                 .append('<br>')
        //                 .append(error);
        //         });
        //     }).prop('disabled', !$.support.fileInput)
        //     .parent().addClass($.support.fileInput ? undefined : 'disabled');

        jQuery('.modal-top-menu button').click(Aruna.switchWindow);
        jQuery('.myCombobox').on("change", Aruna.switchWindowPost);
        // jQuery(window).on("scroll", function() {
        //     jQuery('.main-post').not('.post-page').each(Aruna.stickyButtons);
        // });
       // jQuery('input, textarea').placeholder();
        // jQuery('.scroll-top').on('click', Aruna.scrollTop);
        // this.slidePostCreator();
        // this.resizeLeftSidebar();
        // $(window).scroll(this.moveLeftSidebar);
        // $('.inception-menu .sub-navigation a').on("click", Aruna.switchLeftSidebarWindow);
    },
    // showScrollTop : function() {
    //     var windowH = $(window).height();
    //     var scrollTop = $(window).scrollTop();
    //     if( scrollTop >= (1.2 * windowH) ) {
    //         jQuery('.scroll-top').fadeIn({duration: 500, queue : false});
    //     } else {
    //         jQuery('.scroll-top').fadeOut({duration: 500, queue : false});
    //     }
    // },
    // switchLeftSidebarWindow : function(e) {
    //     var el = $(this);
    //     var window = el.attr('rel');
    //     $('.sidebar-content').not('.'+window).fadeOut(200);
    //     $('.'+window).fadeIn(400, function() {
    //         $('.'+window).mCustomScrollbar("update");
    //     });
    //     e.preventDefault();
    // },
    // moveLeftSidebar : function() {
    //     var move = $(window).scrollTop();
    //     var maxTop = $(document).height() - ($(window).height() + $('footer').outerHeight() + 10);
    //     if(move < 0) {
    //         move = 0;
    //     }
    //     if(move >= maxTop) {
    //         move = maxTop;
    //     }
    //     $('.left-aside').css({ top : move+"px"});
    //     $('.left-aside .sidebar-content').each(function(){
    //         $(this).mCustomScrollbar("update");
    //     });
    // },
    // resizeLeftSidebar : function() {
    //     var windowH = $(window).height();
    //     var headerH = $('header').height();
    //     var menuH = $('.left-aside .top-menu').height();
    //     $('.left-aside .sidebar-content').height((windowH - headerH - menuH));
    //     $('.left-aside .sidebar-content').each(function(){
    //         $(this).mCustomScrollbar("update");
    //     });
    // },
    // slidePostCreator : function() {
    //   $('.slider-numbers a').on('click', function(e) {
    //       var el = $(this);
    //       var window = el.attr('rel');
    //       $('.slider-numbers a.active').removeClass('active');
    //       $('.slider-selector-window').not('.'+window).fadeOut(300);
    //       $('.'+window).fadeIn(400);
    //       el.addClass("active");
    //       e.preventDefault();
    //   });
    // },
    // stickyButtons : function() {
    //     Aruna.showScrollTop();
    //     var el = jQuery(this);
    //     if(el.outerHeight() > 700) {
    //         var articleTop = el.find('.article-top');
    //         var viewportTop =  jQuery(window).scrollTop() + jQuery('header').outerHeight();
    //         var buttonsH = articleTop.outerHeight();
    //         var elPos = {};
    //         elPos.top = el.offset().top;
    //         elPos.bottom = el.outerHeight() + elPos.top;

    //         var top = 0;
    //         if(elPos.top < viewportTop && elPos.bottom > viewportTop) {
    //             top = Math.abs(elPos.top - viewportTop);
    //             var maxTop = el.outerHeight() - buttonsH;
    //             if(top > maxTop) {
    //                 top = maxTop;
    //             }
    //             articleTop.addClass('move');
    //         } else {
    //             articleTop.removeClass('move');
    //         }
    //         articleTop.css({
    //             top: top+"px"
    //         });
    //     }
    // },
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
    // initFlexsliders : function() {
    //     jQuery('.post-slider').flexslider({
    //         'controlNav': false,
    //         'directionNav' : false,
    //         "touch": true,
    //         "animation": "slide",
    //         "animationLoop": true,
    //         "slideshow" : false,
    //         start : function(ev) {
    //             var slideTotal = ev.find('li:not(".clone") img').length;
    //             var slideCurrent = ev.find('li:not(".clone").flex-active-slide').index();
    //             jQuery('.slider-controls-wrap .counters .total').text(slideTotal);
    //             jQuery('.slider-controls-wrap .counters .current').text(slideCurrent);
    //         },
    //         after : function(ev) {
    //             var slideCurrent = ev.find('li:not(".clone").flex-active-slide').index();
    //             jQuery('.slider-controls-wrap .counters .current').text(slideCurrent);
    //             jQuery('.slider-controls-wrap h1.visible-title').removeClass('visible-title');
    //             jQuery('.slider-controls-wrap h1[rel="'+slideCurrent+'"]').addClass('visible-title');
    //         }
    //     });

    //     // Aruna.createSliderButton('.post-slider', '.slider-controls-wrap .next', 'next');
    //     // Aruna.createSliderButton('.post-slider', '.slider-controls-wrap .prev', 'prev');

    //     jQuery('.headlines-slider').flexslider({
    //         'controlNav': false,
    //         'directionNav' : false,
    //         "touch": true,
    //         "animation": "slide",
    //         "animationLoop": true,
    //         "slideshow" : false
    //     });

    //     Aruna.createSliderButton('.headlines-slider', '.headline-controls .next', 'next');
    //     Aruna.createSliderButton('.headlines-slider', '.headline-controls .prev', 'prev');
    // },
    // createSliderButton : function(slider, button, action) {
    //     jQuery(button).click(function() {
    //         jQuery(slider).flexslider(action);
    //         return false;
    //     });
    // }
};

$(document).on('page:change', function() {
    Aruna.init();
});
// $(window).resize(function() {
//    Aruna.resizeLeftSidebar();
// });


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

// $(document).ready(ready);
$(document).on('page:change', ready);

// $('.post-submit').on('click', function(e){
//     // $('form').submit();
// });

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



