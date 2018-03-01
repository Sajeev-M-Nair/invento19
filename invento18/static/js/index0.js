(function() {
  var canvas, chinese, columns, draw, drops, font_size, j, matrix, ref;

  canvas = document.getElementById("c");

  matrix = canvas.getContext("2d");

  canvas.height = window.innerHeight;

  canvas.width = window.innerWidth;

  chinese = "INVENTO'18田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑inventinggreen".split("");
  chinese1 = "Invento18".split("");

  font_size = 18;

  columns = canvas.width / font_size;

  drops = [];

  for (j = 0, ref = columns; 0 <= ref ? j <= ref : j >= ref; 0 <= ref ? j++ : j--) {
    drops.push(1);
  }

  draw = function() {
    var i, results, text;
    matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
    matrix.fillRect(0, 0, c.width, c.height);
    matrix.fillStyle = "#0f0"; //green text
    matrix.font = font_size + "px arial";
    i = 0;
    results = [];
    while (i < drops.length) {
      text = chinese[Math.floor(Math.random() * chinese.length)];
      matrix.fillText(text, i * font_size, drops[i] * font_size);
      if (drops[i] * font_size > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
      results.push(i++);
    }
    return results;
  };

  setInterval(draw, 35);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE1BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLEVBQUE7O0VBQUEsTUFBQSxHQUFTLFFBQVEsQ0FBQyxjQUFULENBQXdCLEdBQXhCOztFQUNULE1BQUEsR0FBUyxNQUFNLENBQUMsVUFBUCxDQUFrQixJQUFsQjs7RUFDVCxNQUFNLENBQUMsTUFBUCxHQUFnQixNQUFNLENBQUM7O0VBQ3ZCLE1BQU0sQ0FBQyxLQUFQLEdBQWUsTUFBTSxDQUFDOztFQUN0QixPQUFBLEdBQVUsOENBQThDLENBQUMsS0FBL0MsQ0FBcUQsRUFBckQ7O0VBQ1YsU0FBQSxHQUFZOztFQUNaLE9BQUEsR0FBVSxNQUFNLENBQUMsS0FBUCxHQUFlOztFQUN6QixLQUFBLEdBQVE7O0VBRVIsS0FBaUIsMEVBQWpCO0lBQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxDQUFYO0VBQUE7O0VBRUEsSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ0wsUUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBO0lBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7SUFDbkIsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxDQUFDLEtBQXhCLEVBQStCLENBQUMsQ0FBQyxNQUFqQztJQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLE9BRm5CO0lBR0EsTUFBTSxDQUFDLElBQVAsR0FBYyxTQUFBLEdBQVk7SUFFMUIsQ0FBQSxHQUFJO0FBRUo7V0FBTSxDQUFBLEdBQUksS0FBSyxDQUFDLE1BQWhCO01BRUUsSUFBQSxHQUFPLE9BQVEsQ0FBQSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixPQUFPLENBQUMsTUFBbkMsQ0FBQTtNQUVmLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBQWhCLEVBQXNCLENBQUEsR0FBSSxTQUExQixFQUFxQyxLQUFNLENBQUEsQ0FBQSxDQUFOLEdBQVcsU0FBaEQ7TUFFQSxJQUFpQixLQUFNLENBQUEsQ0FBQSxDQUFOLEdBQVcsU0FBWCxHQUF1QixDQUFDLENBQUMsTUFBekIsSUFBb0MsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEtBQXJFO1FBQUEsS0FBTSxDQUFBLENBQUEsQ0FBTixHQUFXLEVBQVg7O01BQ0EsS0FBTSxDQUFBLENBQUEsQ0FBTjttQkFDQSxDQUFBO0lBUkYsQ0FBQTs7RUFSSzs7RUFrQlAsV0FBQSxDQUFZLElBQVosRUFBa0IsRUFBbEI7QUE3QkEiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNcIilcbm1hdHJpeCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5jaGluZXNlID0gXCLnlLDnlLHnlLLnlLPnlLTnlLXnlLbnlLfnlLjnlLnnlLrnlLvnlLznlL3nlL7nlL/nlYDnlYHnlYLnlYPnlYTnlYXnlYbnlYfnlYjnlYnnlYrnlYvnlYznlY3nlY7nlY/nlZDnlZEwMTIzNDU2Nzg5XCIuc3BsaXQoXCJcIilcbmZvbnRfc2l6ZSA9IDE4XG5jb2x1bW5zID0gY2FudmFzLndpZHRoIC8gZm9udF9zaXplXG5kcm9wcyA9IFtdXG5cbmRyb3BzLnB1c2ggMSBmb3IgWzAuLmNvbHVtbnNdXG4gIFxuZHJhdyA9IC0+ICAgXG4gIG1hdHJpeC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC4wNSlcIlxuICBtYXRyaXguZmlsbFJlY3QgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHRcbiAgbWF0cml4LmZpbGxTdHlsZSA9IFwiIzBGMFwiICNncmVlbiB0ZXh0XG4gIG1hdHJpeC5mb250ID0gZm9udF9zaXplICsgXCJweCBhcmlhbFwiXG4gIFxuICBpID0gMFxuXG4gIHdoaWxlIGkgPCBkcm9wcy5sZW5ndGhcbiAgICBcbiAgICB0ZXh0ID0gY2hpbmVzZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGluZXNlLmxlbmd0aCldXG4gICAgXG4gICAgbWF0cml4LmZpbGxUZXh0IHRleHQsIGkgKiBmb250X3NpemUsIGRyb3BzW2ldICogZm9udF9zaXplXG4gICAgXG4gICAgZHJvcHNbaV0gPSAwICBpZiBkcm9wc1tpXSAqIGZvbnRfc2l6ZSA+IGMuaGVpZ2h0IGFuZCBNYXRoLnJhbmRvbSgpID4gMC45NzVcbiAgICBkcm9wc1tpXSsrXG4gICAgaSsrXG4gICAgICBcbnNldEludGVydmFsIGRyYXcsIDM1Il19
//# sourceURL=coffeescript