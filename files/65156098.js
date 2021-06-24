ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.an-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
      .add({
        targets: '.an-2 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        comp: this,
        delay: (el, i) => 150 * (i+1),
        complete:(anim) => {
          console.log('Completed' + anim);
          this.comp.showOptions();
        }
      });
  }

showOptions(){
   console.log('Show options called.');
}
