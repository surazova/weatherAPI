var guessWho = {
   height: [‘5 foot, 1 inches’],
   weight: 196,
   facialFeature: [‘mustache’],
   clothing: [‘blue overalls’, ‘red shirt’, ‘red hat’],
   profession: [‘plumber’],
   about: function() {
       alert(‘The person that you are guessing is ’ + this.height + ' tall and he weighs ' + this.weight + ' pounds and has a ' + this.facialFeature + ‘.’);
   },
   job: function() {
       alert(‘He loves his job, because he is a ’ + this.profession + ' and a hero.’);
   },
   him: function() {
       return this.height + ” tall and his weight in pounds is ” + this.weight;
   }
};

