(function() {
  var NewsInteractions;

  NewsInteractions = (function() {
    function NewsInteractions() {
      var button, i, len, ref;
      this.buttons = document.getElementsByClassName('show-more news');
      this.items = document.getElementsByClassName('news-item additional');
      ref = this.buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        button = ref[i];
        button.addEventListener('click', (function(_this) {
          return function() {
            return _this.toggle();
          };
        })(this));
      }
      this.hide = false;
      this.toggle();
    }

    NewsInteractions.prototype.toggle = function() {
      var button, i, item, j, len, len1, ref, ref1, results;
      this.hide = !this.hide;
      ref = this.items;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (this.hide) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      }
      ref1 = this.buttons;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        button = ref1[j];
        results.push(button.innerHTML = this.hide ? 'mehr' : 'weniger');
      }
      return results;
    };

    return NewsInteractions;

  })();

  document.addEventListener('DOMContentLoaded', function() {
    return new NewsInteractions();
  });

}).call(this);
