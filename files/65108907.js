if (current) {
    const currentIndex = progress.indexOf(current);
    if (currentIndex < progress.length) {
      next = progress[currentIndex+1];
    }
    current.classList.remove('active');
    current.classList.add('passed');
    
    if (!next) {
     $('.progress-container div').addClass('passed');
      return;
   }
  } 
