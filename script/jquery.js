jQuery("document").ready(function($) {
  // Set effect velocity in ms
  var velocity = 100;

  var shuffleElement = $(".shuffle");

  $.each(shuffleElement, function(index, item) {
    $(item).attr("data-text", $(item).text());
  });

  var shuffle = function(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  var shuffleText = function(element, originalText) {
    var elementTextArray = [];
    var randomText = [];

    for (i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt([i]));
    }

    var repeatShuffle = function(times, index) {
      if (index == times) {
        element.text(originalText);
        return;
      }

      setTimeout(function() {
        randomText = shuffle(elementTextArray);
        for (var i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.text(randomText);
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };
    repeatShuffle(element.text().length, 0);
  };

  shuffleElement.mouseenter(function() {
    shuffleText($(this), $(this).data("text"));
  });
});
