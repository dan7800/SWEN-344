window.onload = function() {
  document.querySelector('#roller button.add').onclick = function() {
    var die = document.createElement('div');
    die.className = 'die';
    die.innerText = '0';
    console.log('WAT');
    document.querySelector('.dice').appendChild(die);
  };

  document.querySelector('#roller button.roll').onclick = function() {
    Array.prototype.forEach.call(document.querySelectorAll('.die'), function(die) {
      var value = Math.floor((Math.random()*6) + 1);
      die.innerText = value;
    });
  };
};