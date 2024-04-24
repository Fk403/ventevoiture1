function readURL(input) {
    if (input.files && input.files[0]) {
      var inputFileData = input.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var $fileUpload = $(input).closest('.file-upload'); // Get the parent .file-upload element
        $fileUpload.find('.file-upload-placeholder').hide();
        $fileUpload.find('.file-upload-image').attr('src', e.target.result);
        $fileUpload.find('.file-upload-preview').show();
        $fileUpload.find('.image-title').html(inputFileData.name);
      };
      reader.readAsDataURL(inputFileData);
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    var $fileUpload = $(event.target).closest('.file-upload'); // Get the parent .file-upload element
    var $clone = $fileUpload.find('.file-upload-input').val('').clone(true);
    $fileUpload.find('.file-upload-input').replaceWith($clone);
    $fileUpload.find('.file-upload-placeholder').show();
    $fileUpload.find('.file-upload-preview').hide();
  }
  
  // Style when drag-over
  $('.file-upload-placeholder').bind('dragover', function () {
    $(this).addClass('image-dropping');
  });
  $('.file-upload-placeholder').bind('dragleave', function () {
    $(this).removeClass('image-dropping');
  });