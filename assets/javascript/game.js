$(document).ready(function() {

  $("#gameInit").hide();

  //Opens rules popup
    $('[data-popup-open]').on('click', function()  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(200);
        e.preventDefault();
    });
 
  //Closes rules popup
    $('[data-popup-close]').on('click', function()  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(200);
        e.preventDefault();
     });

  //Generates a random number between 19-120
    var targetScore = Math.floor(Math.random() * (120-19)) + 19;

  //Generates random numbers for crystals between 1-12
    var crystals = {
    redScore: Math.floor(Math.random() * (12-1)) + 1,
    greenScore: Math.floor(Math.random() * (12-1)) + 1,
    blueScore: Math.floor(Math.random() * (12-1)) + 1,
    greyScore: Math.floor(Math.random() * (12-1)) + 1,
    purpleScore: Math.floor(Math.random() * (12-1)) + 1,
    
    red: $('#red'),
    green: $('#green'),
    blue: $('#blue'),
    grey: $('#grey'),
    purple: $('#purple'),
  };

  //Adds random target score
    parseInt($('#targetNum').html(targetScore));

  //Sets user's default score at start of game to zero
    parseInt($('#userScore').html(0));

    var score = parseInt($('#userScore').html());

    var wins = 0;
    var losses = 0;

    $('#numWins').html(wins);
    $('#numLosses').html(losses);

  //Event – click on red crystal
    crystals.red.on('click', function(){
      score += crystals.redScore;
      $('#userScore').html(score);
      
      if (score === targetScore) {
        wins ++;
        $('#numWins').html(wins);
        $('img').hide();
        $('#gameInit').show();
        // Brett/Mark/Nate note: I tried to change color of jumbotron to a different color
        // depending on game outcome (green for win, red for lose) then reset it
        // using toggleClass but I couldn't get it to work that way (it works how it's set up now, 
        // but it just seems that there's a simpler way to do it. Any ideas? 
        // jumbotron turns green if user wins
        // $('.jumbotron').toggleClass('jumbo-win');
        $('.jumbotron').css("background", "#33FFC4");
        alert('You did it!');
      } else if (score > targetScore) {
        $('#endMsg').show();
        losses ++;
        $('#numLosses').html(losses);
        $('img').hide();
        $('#gameInit').show();
        // Jumbotron turns red if user loses
        // $('.jumbotron')toggleClass('jumbo-lose');
        $('.jumbotron').css("background", "#FF6A6A");
        alert('Oh, too bad! You lost.');
    }
  });

    //Event – click on green crystal
      crystals.green.on('click', function(){
        score += crystals.greenScore;
        $('#userScore').html(score);
        
        if (score === targetScore) {
          wins ++;
          $('#numWins').html(wins);
          $('img').hide();
          $('#gameInit').show();
          $('.jumbotron').css("background", "#33FFC4");
          // $('.jumbotron').toggleClass('jumbo-win');
          alert('You did it! Victory is yours!');
        } else if (score > targetScore) {
          losses ++;
          $('#numLosses').html(losses);
          $('img').hide();
          $('#gameInit').show();
          $('.jumbotron').css("background", "#FF6A6A");
          // Jumbotron turns red if user loses
          // $('.jumbotron')toggleClass('jumbo-lose');
          alert('Outsmarted by a crystal.');
        }
  });

    //Event – click on blue crystal
      crystals.blue.on('click', function(){
        score += crystals.blueScore;
        $('#userScore').html(score);
        
        if (score === targetScore) {
          wins ++;
          $('#numWins').html(wins);
          $('img').hide();
          $('#gameInit').show();
          $('.jumbotron').css("background", "#33FFC4");
          // $('.jumbotron').toggleClass('jumbo-win');
          alert('You won! Hurrah!');
        } else if (score > targetScore) {
          losses ++;
          $('#numLosses').html(losses);
          $('img').hide();
          $("#gameInit").show();
          $('.jumbotron').css("background", "#FF6A6A");
          // Jumbotron turns red if user loses
          // $('.jumbotron')toggleClass('jumbo-lose');
          alert('The space crystals got the better of you, this time.');
        }
  });

  //Event – click on grey crystal
    crystals.grey.on('click', function(){
      score += crystals.greyScore;
      $('#userScore').html(score);
      
      if (score === targetScore) {
        wins ++;
        $('#numWins').html(wins);
        $('img').hide();
        $('#gameInit').show();
        $('.jumbotron').css("background", "#33FFC4");
        // $('.jumbotron').toggleClass('jumbo-win');
        alert('You are one with the space crystals.');
      } else if (score > targetScore) {
        losses ++;
        $('#numLosses').html(losses);
        $('img').hide();
        $('#gameInit').show();
        $('.jumbotron').css("background", "#FF6A6A");
        // Jumbotron turns red if user loses
        // $('.jumbotron')toggleClass('jumbo-lose');
        alert('Oh, no! You lost another round of Space Crystal. Will you give up?');
      }
  });

  //Event – click on purple crystal
    crystals.purple.on('click', function(){
      score += crystals.purpleScore;
      $('#userScore').html(score);
      
      if (score === targetScore) {
        wins ++;
        $('#numWins').html(wins);
        $('img').hide();
        $('#game-Init').show();
        $('.jumbotron').css("background", "#33FFC4");
        // $('.jumbotron').toggleClass('jumbo-win');
        alert('Well DONE.');
      } else if (score > targetScore) {
        losses ++;
        $('#numLosses').html(losses);
        $('img').hide();
        $('#gameInit').show();
        $('.jumbotron').css("background", "#FF6A6A");
        // Jumbotron turns red if user loses
        // $('.jumbotron')toggleClass('jumbo-lose');
        alert('Oh, too bad! You lost. That elusive crystal got away.');
      }
  });

  $('#gameInit').on('click', function(){
    
    //Generates a random number between 19-120
      targetScore = Math.floor(Math.random() * (120-19)) + 19;
  
    //Generates random numbers for crystals between 1-12
      crystals = {
        redScore: Math.floor(Math.random() * (12-1)) + 1,
        greenScore: Math.floor(Math.random() * (12-1)) + 1,
        blueScore: Math.floor(Math.random() * (12-1)) + 1,
        greyScore: Math.floor(Math.random() * (12-1)) + 1,
        purpleScore: Math.floor(Math.random() * (12-1)) + 1,
        
        red: $('#red'),
        green: $('#green'),
        blue: $('#blue'),
        grey: $('#grey'),
        purple: $('#purple'),
      };

    //Adds a random target score
      parseInt($('#targetNum').html(targetScore));

    //Sets default score for user to zero
      parseInt($('#userScore').html(0));

      score = parseInt($('#userScore').html());

    //Reset jumbotron color to default color
      $('.jumbotron').css("background", "#bcf2ff");

      $('img').show();
      $('#gameInit').hide();
    });

  });


  // $("#number-to-guess").text(targetNumber);

  // var counter = 0;

  // // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // // We begin by expanding our array to include four options.
  // var numberOptions = [10, 5, 3, 7];

  // // Next we create a for loop to create crystals for every numberOption.
  // for (var i = 0; i < numberOptions.length; i++) {

  //   // For each iteration, we will create an imageCrystal
  //   var imageCrystal = $("<img>");

  //   // First each crystal will be given the class ".crystal-image".
  //   // This will allow the CSS to take effect.
  //   imageCrystal.addClass("crystal-image");

  //   // Each imageCrystal will be given a src link to the crystal image
  //   // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  //   // Each imageCrystal will be given a data attribute called data-crystalValue.
  //   // This data attribute will be set equal to the array value.
  //   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  //   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
  // }

  // // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //   counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //   alert("New score: " + counter);

  //   if (counter === targetNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= targetNumber) {
  //     alert("You lose!!");
  //   }

  // });
