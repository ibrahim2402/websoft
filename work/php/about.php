<?php require 'view/header.php'; ?>


    <div>
      <img
        id="duck"
        src="img/duck.png"
        height="70px"
        width="90px"
        style="position:absolute;right:5px"
      />
    </div>

    <section id="homeContent">
      <div class="courseName">
        <h1>KRISTIANSTAD UNIVERSITY</h1>
        <h2>Course Page</h2>
      </div>
    </section>

    <section class="containerHm">
      <div class="slider-container">
        <div>
          <div>
            <div class="slider">
              <div class="webdev" id="last">
                <img
                  src="img/hkrCampus.jpg"
                  alt="web development image"
                />
              </div>
              <div class="webdev" "slide-image">
                <img
                  src="img/web-dev.png"
                  alt="web development image"
                />
              </div>
              <div class="webdev">
                <img
                  src="img/cvImage.jpg"
                  alt="web development image"
                />
              </div>
              <div class="webdev">
                <img
                  src="img/hkrCampus.jpg"
                  alt="web development image"
                />
              </div>
              <div class="webdev" id="first">
                <img
                  src="img/web-dev.png"
                  alt="web development image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <button class="btn" id="prev">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn" id="next">
          <i class="fas fa-chevron-right"></i>
        </button>

        <ul>
          <li class="option " option-index="0"></li>
          <li class="option" option-index="1"></li>
          <li class="option" option-index="2"></li>
        </ul>
      </div>
    </section>

    <section id="info">
      <div class="wrapper">
      <article id="home_column">
           
           <h1 class="page-title">Campus and Quality</h1>
           <p class="white" >
           Kristianstad University (HKR) is a small but at the same 
           time large university in southern Sweden. The university is gathered in one 
           campus situated just 10 minutes from the town centre of Kristianstad.
           Kristianstad University was founded in 1977, but we can trace our roots 
           back to 1835 and the start of the teacher's training. 
           We are proud of our 14,000 students and the diversity they represent. 
           Our keywords are openness, curiosity and respect. Our research is 
           challenge-driven and integrated with our degree programmes.
           </p>
           <p>
           Kristianstad University offer 50 programmes and 300 courses, 
           all of which are distinguished by science, research and great pedagogical 
           quality. The Business Administration programmes, the Study Programme 
           in Oral Health, the Master programme in Psychology and the Food and 
           Meal Sciences programme have received the highest quality possible 
           and has been classified as best in Sweden by the evaluations of 
           the Swedish Higher Education Authority (UKÄ). We are the only 
           Swedish university that offers work integrated education 
           in all our undergraduate programmes. 
           This makes our students well-prepared for the future.
        </p>
         </article>
      </div>
    </section>
    

    
    
  </body>
</html>



<?php require 'view/footer.php'; ?>