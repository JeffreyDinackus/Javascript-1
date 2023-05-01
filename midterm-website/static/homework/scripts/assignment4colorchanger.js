    const body = document.body;

    body.addEventListener('click', (e) => {
      console.log('clicked body');
      let x = 0;
      x = Math.floor(Math.random() * 21);
      if (x == 1) {
        document.body.style.backgroundColor = '#0099ff';
        document.getElementById('colorName').innerHTML =
          'This color is #0099ff, rgb(0, 153, 255), hsl(204, 100%, 50%)';
      } else if (x == 2) {
        document.body.style.backgroundColor = '#800000';
        document.getElementById('colorName').innerHTML =
          'This color is Maroon #800000 rgb(128, 0, 0) hsl(0, 100%, 25%)';
      } else if (x == 3) {
        document.body.style.backgroundColor = '#ff00ff';
        document.getElementById('colorName').innerHTML =
          'This color is Fuchsia #ff00ff rgb(255, 0, 255) hsl(300, 100%, 50%)';
      } else if (x == 4) {
        document.body.style.backgroundColor = '#00ffff';
        document.getElementById('colorName').innerHTML =
          'This color is Aqua #00ffff rgb(0, 255, 255) hsl(180, 100%, 50%)';
      } else if (x == 5) {
        document.body.style.backgroundColor = '#cc9900';
        document.getElementById('colorName').innerHTML =
          'This color is #cc9900 rgb(204, 153, 0) hsl(45, 100%, 40%)';
      } else if (x == 6) {
        document.body.style.backgroundColor = '#ff9900';
        document.getElementById('colorName').innerHTML =
          'This color is #ff9900 rgb(255, 153, 0) hsl(36, 100%, 50%)';
      } else if (x == 7) {
        document.body.style.backgroundColor = '#6600ff';
        document.getElementById('colorName').innerHTML =
          'This color is #6600ff rgb(102, 0, 255) hsl(264, 100%, 50%)';
      } else if (x == 8) {
        document.body.style.backgroundColor = '#33cc33';
        document.getElementById('colorName').innerHTML =
          'This color is #33cc33 rgb(51, 204, 51) hsl(120, 60%, 50%)';
      } else if (x == 9) {
        document.body.style.backgroundColor = '#660066';
        document.getElementById('colorName').innerHTML =
          'This color is #660066 rgb(102, 0, 102) hsl(300, 100%, 20%)';
      } else if (x == 10) {
        document.body.style.backgroundColor = '#66ff33';
        document.getElementById('colorName').innerHTML =
          'This color is #66ff33 rgb(102, 255, 51) hsl(105, 100%, 60%)';
      } else if (x == 11) {
        document.body.style.backgroundColor = '#0000ff';
        document.getElementById('colorName').innerHTML =
          'This color is Blue #0000ff rgb(0, 0, 255) hsl(240, 100%, 50%)';
      } else if (x == 12) {
        document.body.style.backgroundColor = '#ffffff';
        document.getElementById('colorName').innerHTML =
          'This color is White #ffffff rgb(255, 255, 255) hsl(0, 0%, 100%)';
      } else if (x == 13) {
        document.body.style.backgroundColor = '#336699';
        document.getElementById('colorName').innerHTML =
          'This color is #336699 rgb(51, 102, 153) hsl(210, 50%, 40%)';
      } else if (x == 14) {
        document.body.style.backgroundColor = '#ffff00';
        document.getElementById('colorName').innerHTML =
          'This color is Yellow #ffff00 rgb(255, 255, 0) hsl(60, 100%, 50%)';
      } else if (x == 15) {
        document.body.style.backgroundColor = '#666699';
        document.getElementById('colorName').innerHTML =
          'This color is #666699 rgb(102, 102, 153) hsl(240, 20%, 50%)';
      } else if (x == 16) {
        document.body.style.backgroundColor = '#ff9500';
        document.getElementById('colorName').innerHTML =
          'This color is #ff9500 rgb(255, 149, 0) hsl(35, 100%, 50%)';
      } else if (x == 17) {
        document.body.style.backgroundColor = '#99ccff';
        document.getElementById('colorName').innerHTML =
          'This color is #99ccff rgb(153, 204, 255) hsl(210, 100%, 80%)';
      } else if (x == 18) {
        document.body.style.backgroundColor = '#F8DA98';
        document.getElementById('colorName').innerHTML =
          'This color is Rachel #F8DA98 rgb(248, 218, 152) hsl(45, 100%, 80%)';
      } else if (x == 19) {
        document.body.style.backgroundColor = '#66ff99';
        document.getElementById('colorName').innerHTML =
          'This color is #66ff99 rgb(102, 255, 153) hsl(140, 100%, 70%)';
      } else if (x == 20) {
        document.body.style.backgroundColor = '#cc00cc';
        document.getElementById('colorName').innerHTML =
          'This color is #cc00cc rgb(204, 0, 204) hsl(300, 100%, 40%)';
      }
    });
    document.body.onkeyup = function (e) {
      let x = 0;
      x = Math.floor(Math.random() * 21);
      //this checks if the keys pressed are the space bar, enter, or q. if they are, it will change the color of the background to a random color.
      if (
        e.key == ' ' ||
        e.code == 'Space' ||
        e.keyCode == 32 ||
        e.key == 'q' ||
        e.key == 'Q' ||
        e.key == '81' ||
        e.key == 'Enter' ||
        e.key == 'enter' ||
        e.key == '13'
      ) {
        //A lot of these colors are not named colors. also 20 colors was kind of a lot, maybe make it less in the future. people will get the idea with only 5 colors and not so much grind to get it done.
        console.log(x);
        if (x == 1) {
          document.body.style.backgroundColor = '#0099ff';
          document.getElementById('colorName').innerHTML =
            'This color is #0099ff, rgb(0, 153, 255), hsl(204, 100%, 50%)';
        } else if (x == 2) {
          document.body.style.backgroundColor = '#800000';
          document.getElementById('colorName').innerHTML =
            'This color is Maroon #800000 rgb(128, 0, 0) hsl(0, 100%, 25%)';
        } else if (x == 3) {
          document.body.style.backgroundColor = '#ff00ff';
          document.getElementById('colorName').innerHTML =
            'This color is Fuchsia #ff00ff rgb(255, 0, 255) hsl(300, 100%, 50%)';
        } else if (x == 4) {
          document.body.style.backgroundColor = '#00ffff';
          document.getElementById('colorName').innerHTML =
            'This color is Aqua #00ffff rgb(0, 255, 255) hsl(180, 100%, 50%)';
        } else if (x == 5) {
          document.body.style.backgroundColor = '#cc9900';
          document.getElementById('colorName').innerHTML =
            'This color is #cc9900 rgb(204, 153, 0) hsl(45, 100%, 40%)';
        } else if (x == 6) {
          document.body.style.backgroundColor = '#ff9900';
          document.getElementById('colorName').innerHTML =
            'This color is #ff9900 rgb(255, 153, 0) hsl(36, 100%, 50%)';
        } else if (x == 7) {
          document.body.style.backgroundColor = '#6600ff';
          document.getElementById('colorName').innerHTML =
            'This color is #6600ff rgb(102, 0, 255) hsl(264, 100%, 50%)';
        } else if (x == 8) {
          document.body.style.backgroundColor = '#33cc33';
          document.getElementById('colorName').innerHTML =
            'This color is #33cc33 rgb(51, 204, 51) hsl(120, 60%, 50%)';
        } else if (x == 9) {
          document.body.style.backgroundColor = '#660066';
          document.getElementById('colorName').innerHTML =
            'This color is #660066 rgb(102, 0, 102) hsl(300, 100%, 20%)';
        } else if (x == 10) {
          document.body.style.backgroundColor = '#66ff33';
          document.getElementById('colorName').innerHTML =
            'This color is #66ff33 rgb(102, 255, 51) hsl(105, 100%, 60%)';
        } else if (x == 11) {
          document.body.style.backgroundColor = '#0000ff';
          document.getElementById('colorName').innerHTML =
            'This color is Blue #0000ff rgb(0, 0, 255) hsl(240, 100%, 50%)';
        } else if (x == 12) {
          document.body.style.backgroundColor = '#ffffff';
          document.getElementById('colorName').innerHTML =
            'This color is White #ffffff rgb(255, 255, 255) hsl(0, 0%, 100%)';
        } else if (x == 13) {
          document.body.style.backgroundColor = '#336699';
          document.getElementById('colorName').innerHTML =
            'This color is #336699 rgb(51, 102, 153) hsl(210, 50%, 40%)';
        } else if (x == 14) {
          document.body.style.backgroundColor = '#ffff00';
          document.getElementById('colorName').innerHTML =
            'This color is Yellow #ffff00 rgb(255, 255, 0) hsl(60, 100%, 50%)';
        } else if (x == 15) {
          document.body.style.backgroundColor = '#666699';
          document.getElementById('colorName').innerHTML =
            'This color is #666699 rgb(102, 102, 153) hsl(240, 20%, 50%)';
        } else if (x == 16) {
          document.body.style.backgroundColor = '#ff9500';
          document.getElementById('colorName').innerHTML =
            'This color is #ff9500 rgb(255, 149, 0) hsl(35, 100%, 50%)';
        } else if (x == 17) {
          document.body.style.backgroundColor = '#99ccff';
          document.getElementById('colorName').innerHTML =
            'This color is #99ccff rgb(153, 204, 255) hsl(210, 100%, 80%)';
        } else if (x == 18) {
          document.body.style.backgroundColor = '#F8DA98';
          document.getElementById('colorName').innerHTML =
            'This color is Rachel #F8DA98 rgb(248, 218, 152) hsl(45, 100%, 80%)';
        } else if (x == 19) {
          document.body.style.backgroundColor = '#66ff99';
          document.getElementById('colorName').innerHTML =
            'This color is #66ff99 rgb(102, 255, 153) hsl(140, 100%, 70%)';
        } else if (x == 20) {
          document.body.style.backgroundColor = '#cc00cc';
          document.getElementById('colorName').innerHTML =
            'This color is #cc00cc rgb(204, 0, 204) hsl(300, 100%, 40%)';
        }
      }
    };
