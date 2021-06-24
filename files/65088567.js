    var m3 = document.getElementById('m3')
    var m1 = document.getElementById('m1')
    var m2 = document.getElementById('m2')
        
    var m1Top = 300
    var m1left =50

    var m1TopTemp
    var m1leftTemp

    var m1Verif = false
    var m2Verif = false
    var m3Verif = false

    
    var m2Top = 100
    var m2Transform =-30
    var m2left =150

    var m3Top = 100
    var m3left =450

    var hoverFrame
    var leaveFrame
    function hover() {
        clearInterval(leaveFrame);
        m1Verif=false
        m2Verif=false
        m3Verif=false
        hoverFrame = setInterval(frame, 5);
    }
    function leave() {
        clearInterval(hoverFrame);
        m1Verif=true
        m2Verif=true
        m3Verif=true
        leaveFrame = setInterval(frameReverse, 5);
    }
      function frame() {
        if(m1Top == 100 && m1left==250){
            m1Verif = true
        }else{
            if(m1left!=250){m1left++;}  
            if(m1Top!=100){m1Top--;}  
            m1.style.left = m1left + 'px';
            m1.style.top = m1Top + 'px'; 
        }

        if(m2Top == 100 && m2left == 550 && m2Transform == 0){
            m2Verif=true
        }else{
            if(m2left!=550){m2left++;}  
            if(m2Transform!=0){m2Transform++;} 
            m2.style.left = m2left + 'px';
            m2.style.transform = 'rotate('+m2Transform+'deg)'; 
        }

        if(m3Top == 100 && m3left == 895){
            m3Verif=true
        }else{
            if(m3left!=8950){m3left++;} 
            m3.style.left = m3left + 'px'; 
        }
        if(m1Verif==true && m2Verif == true && m3Verif == true){clearInterval(hoverFrame);}
    }
    
    function frameReverse() {
        if(m1Top == 300 && m1left==50){
            m1Verif = false
        }else{
            if(m1left!=50){m1left--;}  
            if(m1Top!=300){m1Top++;}  
            m1.style.left = m1left + 'px';
            m1.style.top = m1Top + 'px'; 
        }
        if(m2Top == 100 && m2left == 150 && m2Transform == -30){
            m2Verif=false
        }else{
            if(m2left!=150){m2left--;}  
            if(m2Transform!=-30){m2Transform--;} 
            m2.style.left = m2left + 'px';
            m2.style.transform = 'rotate('+m2Transform+'deg)'; 
        }
        if(m3Top == 100 && m3left == 450){
            m3Verif = false
        }else{
            if(m3left!=450){m3left--;} 
            m3.style.left = m3left + 'px'; 
        }
        if(m1Verif == false && m2Verif ==false && m3Verif == false){clearInterval(leaveFrame);}
    }
   .milktea {
      background: url("https://my-test-11.slatic.net/p/89d20ca95994d8a252a6430c7b27e6fc.jpg") no-repeat center center;
      display: table;
      height: auto;
      position: relative;
      width: 100%;
      background-size: cover;
      padding: 0;
      margin: 0;
    }

    .mtitle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: xx-large;
        font-family: brandon-grotesque, sans-serif;
        font-weight: bold;
        font-style: normal;
    }
    .mtitle:hover {
        color:rgba(30, 144, 255,0.7);
        cursor: pointer;
    }
    .m1 {
      position: absolute;
      width: 150px;
      height: auto;
      top: 300px;
      left: 50px;
    }

    .m2 {
      position: absolute;
      width: 250px;
      height: auto;
      top: 100px;
      left: 150px;
      transform: rotate(-30deg);
    }

    .m3 {
      position: absolute;
      width: 250px;
      height: auto;
      top: 100px;
      left: 450px;
    }
    .m3A{
        background-color: red;
        animation-name: example;
        animation-duration: 4s;
    }
    @keyframes m3{
        100%{
            top:102px;
            left: 30%;
        }
    }