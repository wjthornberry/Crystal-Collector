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

  //Red crystal
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

    //Green crystal
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

    //Blue crystal
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

  //Grey crystal
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

  //Purple crystal
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