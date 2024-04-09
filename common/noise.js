
// const PERLIN_YWRAPB = 4
// const PERLIN_YWRAP = 1 << PERLIN_YWRAPB
// const PERLIN_ZWRAPB = 8
// const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB
// const PERLIN_SIZE = 4095

// let perlin_octaves = 4 // default to medium smooth
// let perlin_amp_falloff = 0.5 // 50% reduction/octave

// const scaled_cosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI))

// let perlin // will be initialized lazily by noise() or noiseSeed()

// /**
//  * Returns the Perlin noise value at specified coordinates. Perlin noise is
//  * a random sequence generator producing a more naturally ordered, harmonic
//  * succession of numbers compared to the standard <b>random()</b> function.
//  * It was invented by Ken Perlin in the 1980s and been used since in
//  * graphical applications to produce procedural textures, natural motion,
//  * shapes, terrains etc.<br /><br /> The main difference to the
//  * <b>random()</b> function is that Perlin noise is defined in an infinite
//  * n-dimensional space where each pair of coordinates corresponds to a
//  * fixed semi-random value (fixed only for the lifespan of the program; see
//  * the <a href="#/p5/noiseSeed">noiseSeed()</a> function). p5.js can compute 1D, 2D and 3D noise,
//  * depending on the number of coordinates given. The resulting value will
//  * always be between 0.0 and 1.0. The noise value can be animated by moving
//  * through the noise space as demonstrated in the example above. The 2nd
//  * and 3rd dimension can also be interpreted as time.<br /><br />The actual
//  * noise is structured similar to an audio signal, in respect to the
//  * function's use of frequencies. Similar to the concept of harmonics in
//  * physics, perlin noise is computed over several octaves which are added
//  * together for the final result. <br /><br />Another way to adjust the
//  * character of the resulting sequence is the scale of the input
//  * coordinates. As the function works within an infinite space the value of
//  * the coordinates doesn't matter as such, only the distance between
//  * successive coordinates does (eg. when using <b>noise()</b> within a
//  * loop). As a general rule the smaller the difference between coordinates,
//  * the smoother the resulting noise sequence will be. Steps of 0.005-0.03
//  * work best for most applications, but this will differ depending on use.
//  *
//  * @method noise
//  * @param  {Number} x   x-coordinate in noise space
//  * @param  {Number} [y] y-coordinate in noise space
//  * @param  {Number} [z] z-coordinate in noise space
//  * @return {Number}     Perlin noise value (between 0 and 1) at specified
//  *                      coordinates
//  * @example
//  * <div>
//  * <code>
//  * let xoff = 0.0;
//  *
//  * function draw() {
//  *   background(204);
//  *   xoff = xoff + 0.01;
//  *   let n = noise(xoff) * width;
//  *   line(n, 0, n, height);
//  * }
//  * </code>
//  * </div>
//  * <div>
//  * <code>let noiseScale=0.02;
//  *
//  * function draw() {
//  *   background(0);
//  *   for (let x=0; x < width; x++) {
//  *     let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
//  *     stroke(noiseVal*255);
//  *     line(x, mouseY+noiseVal*80, x, height);
//  *   }
//  * }
//  * </code>
//  * </div>
//  *
//  * @alt
//  * vertical line moves left to right with updating noise values.
//  * horizontal wave pattern effected by mouse x-position & updating noise values.
//  */

// seed=1
// var number=0
// function random(number) {
//     var x = Math.sin(number*seed) * 10000;
//     number++
//     return x - Math.floor(x);
// }


// const noise = function (x, y = 0, z = 0) {

//   if (perlin == null) {
//     perlin = new Array(PERLIN_SIZE + 1)
//     for (let i = 0; i < PERLIN_SIZE + 1; i++) {
//             // let seed = Math.random()

//     // seed=.5
//       perlin[i] =random(i)
//       // number++
//     }
//   }

//   if (x < 0) {
//     x = -x
//   }
//   if (y < 0) {
//     y = -y
//   }
//   if (z < 0) {
//     z = -z
//   }

//   let xi = Math.floor(x),
//     yi = Math.floor(y),
//     zi = Math.floor(z)
//   let xf = x - xi
//   let yf = y - yi
//   let zf = z - zi
//   let rxf, ryf

//   let r = 0
//   let ampl = 0.5

//   let n1, n2, n3

//   for (let o = 0; o < perlin_octaves; o++) {
//     let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB)

//     rxf = scaled_cosine(xf)
//     ryf = scaled_cosine(yf)

//     n1 = perlin[of & PERLIN_SIZE]
//     n1 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n1)
//     n2 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
//     n2 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2)
//     n1 += ryf * (n2 - n1)

//     of += PERLIN_ZWRAP
//     n2 = perlin[of & PERLIN_SIZE]
//     n2 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n2)
//     n3 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
//     n3 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3)
//     n2 += ryf * (n3 - n2)

//     n1 += scaled_cosine(zf) * (n2 - n1)

//     r += n1 * ampl
//     ampl *= perlin_amp_falloff
//     xi <<= 1
//     xf *= 2
//     yi <<= 1
//     yf *= 2
//     zi <<= 1
//     zf *= 2

//     if (xf >= 1.0) {
//       xi++
//       xf--
//     }
//     if (yf >= 1.0) {
//       yi++
//       yf--
//     }
//     if (zf >= 1.0) {
//       zi++
//       zf--
//     }
//   }
//   return r
// }


//--------------------------

//I definitly made this funtion.. No jk































// const scaled_cosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI))


//START NOISE



// seed=1












function random(number,seed_val){
  var x = Math.sin(number*seed_val) * 10000;
  number++
  return x - Math.floor(x);
}


function random_2(number,seed_val) {
  var x = Math.cos(number*seed_val) * 10000;
  number++
  return x - Math.floor(x);
}



function vecter_random(num){

  value=parseInt(num)&3

  if(value==0){
      return [1,1]
  }

  if(value==1){
      return [1,-1]
  }

  if(value==2){
      return [-1,1]
  }

  if(value==3){
      return [-1,-1]
  }



}


function number_from_2D_index(x,y,seed_val){
  
  return random_2(random(y,seed_val),x)
}



//LERPS
function fade(num){
  return 1-((6*Math.pow(num,5))-(15*Math.pow(num,4))+(10*Math.pow(num,3)))

}

function inverse_fade(i,tol){
  let num=0

  let max_loops=100000
  let loop=0

  while(i<fade(num)){
      num+=tol

      loop++
      if(loop>max_loops){
          alert("MAX LOOP")

          break
      }
  }

  alert(num)




}




function lerp(num1,num2,val){
  return ((num1-num2)*(val))+num2
}

function fade_lerp(num1,num2,val){
  return ((num1-num2)*fade(val))+num2
}


//MATH
function dot_product(pos1,pos2){
  return (pos1[0]*pos2[0])+(pos1[1]*pos2[1])
}

//NOISE
function noise_map(x_val,y_val,noise_settings){
  let x=Math.floor(x_val) 
  let y=Math.floor(y_val) 

  let x_percent=x_val-x
  let y_percent=y_val-y





  let TopRihgtDotValue=dot_product(vecter_random(parseInt(number_from_2D_index(x,y,noise_settings.seed)  *10)),[x_percent,y_percent])  
  let TopLeftDotValue=dot_product(vecter_random( parseInt(number_from_2D_index(x+1,y,noise_settings.seed)*10)),[x_percent-1,y_percent])
  let BottomRihgtDotValue=dot_product(vecter_random(parseInt(number_from_2D_index(x,y+1,noise_settings.seed)  *10)),[x_percent,y_percent-1])
  let BottomLeftDotValue=dot_product(vecter_random( parseInt(number_from_2D_index(x+1,y+1,noise_settings.seed)*10)      ),[x_percent-1,y_percent-1])







  let LerpTop=fade_lerp(TopRihgtDotValue,TopLeftDotValue,x_percent)
  let LerpBottom=fade_lerp(BottomRihgtDotValue,BottomLeftDotValue,x_percent)

  // if(fade_lerp(LerpTop,LerpBottom,y_percent)<0){
  //   console.log(fade_lerp(LerpTop,LerpBottom,y_percent))
  // }

  return fade_lerp(LerpTop,LerpBottom,y_percent)
}

function noise(x,y,effect_drop,noise_settings){

  let value=0
  let frequency=0.008
  let effect=1

  if(effect_drop==undefined){
    effect_drop=0.5
  }

  // let effect_drop=.5

  for(let oct=0;oct<noise_settings.oct;oct++){
          // let noise_value = effect*noise((x*frequency),(y*frequency)  )
      value+=effect*noise_map((x*frequency),(y*frequency),noise_settings  )


      effect*=effect_drop
      frequency*=2
  }

  // if(typeof noise_settings.balence=="undefined" || noise_settings.balence){
  value ++
  value *= 0.5    
  // }


  // console.log(value)
  return value
   
  // let rgb = Math.round(255*value);

}


//END NOISE

if(is_server){
  module.exports={noise}
}
