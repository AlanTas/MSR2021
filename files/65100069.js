var bannerImages= $(".slider_image");
var position= 0;
var numberOfImages= bannerImages.length;
function NextImage(){
    if(position+1 >= brojSlika){
        bannerImages.eq(position).css('display', "none");
        position= 0;
        bannerImages.eq(position).css('display', "block");
    }
    else{
        bannerImages.eq(position).css('display', "none");
        position+= 1;
        bannerImages.eq(position).css('display', "block");
    }
}
