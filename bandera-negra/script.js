 var canvas = $('#canvas');
  var imgurID = window.location.href.split('#')[1];
      var bandera = new Image();
      bandera.src = 'bandera-negra.jpg';
  if(imgurID != null){
    $("#upload-btn").hide();
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = imgOnLoad;
    img.src = "http://i.imgur.com/"+imgurID+".png";
  }


$( "#upload-btn" ).on( "click", function() { $("#upload-input").click(); });
$('#upload-input').change(function(e) {
      var file = e.target.files[0],
          imageType = /image.*/;

      if (!file.type.match(imageType))
          return;

      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
  });

  function imgOnLoad(){

    $("#upload-btn").hide();
    var res = this.height/this.width;
    var scale = Math.min.apply(Math, [$(window).width(), $(window).height(), this.height, this.width]);
    var width = canvas[0].width =    scale;
    var height = canvas[0].height =  scale*res;
    var context = canvas[0].getContext('2d');
    context.drawImage(this, 0, 0,width,height);
    context.globalAlpha = 0.7;
    context.drawImage(bandera, 0, 0, width,height);
var imgPixels = context.getImageData(0, 0, width, height);
     
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }
    context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    var img = new Image();
    img.src = canvas[0].toDataURL();

    $("#container").append(img);
    $(".cuadrada").css("display","none");
    $(".donload").append('<a style="margin:0 auto 2% auto;" class="pure-button pure-button-primary" href="' + img.src + '" download="bandera-negra.jpg">Descargar</a>');
    $("#download").css("display","block");
    $(".text-explicativo").css("display","block");

  }
  function fileOnload(e) {
      var img = new Image();
      img.onload = imgOnLoad;
      img.src = e.target.result;
  }