$(document).ready(function(){
  // const $carousel = $(".carousel");
  // const $wrapper = $(".carousel__slides-wrapper");
  // const $slide = $(".carousel__slide");
  // const $arr = $slide.length;
  // $wrapper.css("width", $arr * 100 + "vw");
  // let $pos = 0;
  // $wrapper.click(function(){
  //   if ($pos > 5)
  //     console.log("pose")
  //   else
  //     $pos += 1;
  //     console.log("Лох " + $pos + " уровня")

  //   $wrapper.css("transform", "translateX(-" + $pos * 100 + "vw)");
  // });
  // for(let i = 0, i <= $arr, i++)

  const $wrap = $(".carousel__slides-wrapper");
  const $next = $(".carousel__button--next");
  const $prev = $(".carousel__button--prev");
  let posa = 0;

  // Каждые 5 секунд пролистывается слайдер
  interval = setInterval(function(){length = $(".carousel__slide").length - 1;if (posa < length) {posa += 1;} else if (posa >= length) {posa += -length;};$wrap.css("transform", "translateX(-" + posa * 100 + "vw");console.log(posa);}, 10000);


  $next.click(function(){
    length = $(".carousel__slide").length - 1;

    if (posa < length) {
      posa += 1;
    } else if (posa >= length) {
      posa += -length;
    };

    $wrap.css("transform", "translateX(-" + posa * 100 + "vw");
    console.log(posa);
  });
  $prev.click(function(){
    length = $(".carousel__slide").length - 1;
    if (posa < 1) {
      posa += length;
    } else if (posa > 0) {
      posa += -1;
    };

    $wrap.css("transform", "translateX(-" + posa * 100 + "vw");
    console.log(posa);

  });
  $wrap.click(function(){
    console.log(posa);
    console.log(length);
  });

});
