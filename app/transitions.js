
const speed = 2000; // naming this 'speed' just to clarify between the 'duration' parameter

export default function() {

  this.transition(
    // this.fromRoute('welcome'), // if you don't spedify this specifically... then the transition applies to all routes
    // this.toRoute('guidance'),
    this.use('explode',
      {
        pickOld: 'h1', // find an "h1" in the old template. (This can be any CSS selector)
        use: [
          'toLeft', // animate it 'toLeft'. (reference built-in or custom transition name) 
          {
            duration: speed, // takes an optional set of parameters [link] (duration: duration)
          },
        ],
      },
      {
        pickNew: 'h1',
        use: ['toDown', {
          delay: 0,
          duration: speed/2,
        }],
      },
      {
        use: ['fade', {duration: speed/2}], // example on one line
      },
    ),
  );

}
