$(document).ready(function() {
  
    // this the parent of container
    $.get("https://smileschool-api.hbtn.info/quotes",function (data) {
        let dataLength = data.length;
        console.log(data[0])
        for(let i = 0; i < dataLength;i++) {
          $('.carousel-inner').append(`
                <div class="carousel-item ${i === 0 ? 'active' : ""}">
  <div class="row mx-auto align-items-center">
    <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
      <img src=${data[i].pic_url} class="d-block align-self-center" alt="" />
    </div>
    <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
      <div class="quote-text">
        <p class="text-white">
        ${data[i].text}
        </p>
        <h4 class="text-white font-weight-bold">
        ${data[i].name}
        </h4>
        <span class="text-white">
        ${data[i].title}
        </span>
      </div>
    </div>
  </div>
</div>
`)
}
        $('.loader').hide()
        $('#carouselExampleControls').removeClass("d-none")
    })
  })

