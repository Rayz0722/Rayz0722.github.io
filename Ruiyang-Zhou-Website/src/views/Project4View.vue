<template>
  <div>
    <h2>Gamebox FM bass synthesizer</h2>
  </div>
  <div class = "container">
    <h3> Introduction </h3>
    <div class="images">
      <img src="@/assets/prototype1.png" alt="Prototype 1" class="prototype-image">
      <img src="@/assets/prototype2.png" alt="Prototype 2" class="prototype-image">
    </div>
    <p>
      This project is called Gamebox FM bass synthesizer. It is an instrument inspired by the form of game joystick controller and classical 8 bit sound. Ideally player can play this instrument like game controller which give people fun. The basic sound is the low resolution simple wave-shape sound like sine, saw, square and triangle. To make it low resolution, I built the bit crusher which can be modified from 1 bit to 16 bits. I also added the FM synthesis to increase the complexity of the sound. The soundscape of the instrument is basically bass sound which you can play a single shot of bass or consecutive bass. I specifically set the range from C1 to A2 which is really low. In addition, since I added reverb, it can also generate low atmospheric sound. An interesting design I made is I left a slide space for the button where you can dismount the button and slide it to a position you want and mount it again. 
      This help to better for people having different hands size to better hold it. Here is the video of my prototype.
    </p>
  </div>
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qht6DBH1G4w?si=hWoycw5UF8TZGD0Z"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div class = "container">
    <h3> Control and Mapping of parameters </h3>
    <div class="images">
      <img src="@/assets/overview1.png" alt="Overview 1" class="prototype-image">
    </div>
    <p>
      The instrument consists of 1 knob, 2 joysticks, 2 buttons and a accelerometer as above lay out. Each Joysticks has 3 controls, the X axis, Y axis, and Z axis. The Z axis of the joysticks has the same function as the button. For the accelerometer, I only used the X axis and Y axis
    </p>

    <div class="images">
      <img src="@/assets/overview2.png" alt="Overview 2" class="prototype-image">
    </div>

    <p>
      Knob: control the Volume and ADSR of Sound. I set the default as volume control. For the volume, it ranges from 0 to 1. For Attack, it ranges from 0 to 3000ms. For Decay, it ranges from 50ms to 5000ms. For Sustain, it range from 0 to 1, any non zero value represents the having sustain with button is pressed. For Release, it ranges from 0 ms to 3000ms. 
    </p>
    <p>
      Joystick1 X axis :control the bit depth of the sound. The default value at middle is 8 bit. When the joystick moves towards left, the value decrease until 1 bit, when joystick moves towards right, the bit depth can increase up to 16 bits
    </p>
    <p>
      Joystick1 Y axis :control the FM modulation index. The default index is 0. I set the range of index from 0 to 0.5. Only downward movement can increase the value up to 0.5. Moving upward will not have any effect. 
    </p>
    <p>
      Joystick1 Z axis :switch the knob control from Volume, Attack, Decay, Sustain, Release. Each time pressing down the joystick 1, player can switch between different parameters controlled by knob in sequence.
    </p>
    <p>
      Joystick2 X axis :control the metro frequency. The metro frequency mainlt conrtol how fast the consecutive bass is. It is set default as 500ms, moving left can decrease to 50ms, and moving right increase to up to 1000ms. In bpm, it ranges from 60 bpm to 1200bpm and default as 120bpm.
    </p>
    <p>
      Joystick2 Y axis :control the Frequency of pitch. It has range from 32.703 hz(C1) to 110hz(A2). Moving joystick upward decreases the frequency and moving it downwards increases the frequency.
    </p>
    <p>
      Joystick2 Z axis :switch the waveshape from sine, to saw, square, or triangle
    </p>
    <p>
      Button1: trigger the 1 time sound
    </p>
    <p>
      Button2: trigger the consistent sound controlled by metro frequency
    </p>

    <div class="images">
      <img src="@/assets/overview3.png" alt="Overview 3" class="prototype-image">
    </div>
    <p>
      Rotation around X axis: control the reverb internal feedback percentage which has the range from 0 to 100.  More degrees in rotation means larger the feedback and longer decay. It can be 90 degree at most. Since I took the absolute value of the X axis from accelerometer, rotate in both clockwise and counter-clockwise directions have same effect.
Rotation around Y axis: control the noise mix. Just like X axis, rotate in both clockwise and counter-clockwise directions have same effect. The more degree you rotate, the larger volume noise has. The volume range of noise is from 0 to 1.
Overall, my mapping of hardware and parameters are basically one-to-one mapping since I want it to be clear for user to adjust each parameter independently to shape their sound. The special mapping is that the knob and joystick1 Z axis map to multiple parameters. It seems to be 2 to more mapping but essentially it is also one-to-one since the switch is a function and I mapped the function to joystick1 Z axis. 
    </p>
  

    <h3> Key features explanation </h3>
    <h4>Bit crush</h4>
    <div class="images">
      <img src="@/assets/feature1.png" alt="Feature 1" class="prototype-image">
    </div>
    <p>
      The bit crush is one of the main inspirations of this instrument. Here is how I implemented it. I take the input from oscillator and a number represents target bit. The expression pow(2, $f1) - 1 calculates the maximum amplitude level for the given bit depth.The expression (1 / $f1) computes the resolution based on the bit depth. In the end, the bit crush is represented by this equation 
Output=round(Resolution/Input)×Resolution which is expr~ round($v1/$f2). This expression divides the incoming signal value by the resolution (step size) and rounds it to the nearest integer. This process quantizes the signal, reducing its resolution to simulate lower bit depth.
    </p>
    
    <h4>FM synthesis </h4>
    <div class="images">
      <img src="@/assets/feature2.png" alt="Feature 2" class="prototype-image">
    </div>
    <p>
      For the FM synthesis in this instrument, I have 1 carrier and 1 modulator. The carrier has 4 waveshapes which are changeable but the modulator is just a oscillator with sine wave. I set the frequency of carrier and modulator the same so that it can have clear pitch with FM synthesis. I modulate the Mod index by using the joystick1 Y axis. 
    </p>

    <h4>Moses to set stable default and limit valu</h4>
    <div class="images">
      <img src="@/assets/feature3.png" alt="Feature 3" class="prototype-image">
    </div>
    <p>
      When I experiment with my joystick and accelerometer, I found that the value of these sensors are always varying with small amount. Since, I want the default state which is not moving joystick and accelerometer to be a stable default value, I used the moses object which is essentially logic of if small do something, else do other things. Therefore, I set the moses value as a small range that the default state would likely to be. In addition, I found that the max/ min value of the sensor will change, I also applied moses at the limit to set up the lower bound and higher bound value of that parameter could reach
    </p>    

    <h4>Switch between parameters</h4>
    <div class="images">
      <img src="@/assets/feature4.png" alt="Feature 4" class="prototype-image">
    </div>
    <p>
      For switching parameters, once pressed the button, it will select from 5 options. Each option will send 1 to its representing spigot and send 0 to all other option. The spigot is essentially the gate to let the data pass through. Therefore, by doing so in the graph, I can switch the parameter control between 5 options. 
    </p>

    <h4>Rotation with accelerometer</h4>
    <div class="images">
      <img src="@/assets/feature5.png" alt="Feature 5" class="prototype-image">
    </div>
    <p>
      For accelerometer calculation, I just did in the default way which is angle theta = atan2(sin(theta), cos(theta)), and then times 0.3183 to scale within -1 to 1. However, a trick I did here is to take absolute value of the theta which makes rotation in both clockwise and counter-clockwise the same value. Therefore, people can play in preference they want and have the same effect.
    </p>

    <h3>Possible Future Improvement </h3>
    <p>
      One point is that I could improve on the precision and stability of the operation like pitch or other index. Since I am using the joysticks, it is very hard to keep the value at the same exact amount. Therefore, sometimes, the sound came out is not stable. A slight change may cause large variation in the sound, so improving the precision is important. 
About the instrument’s hardware, I think design a better case is also important. Current case to suit bela and breadborad is kind of big which making it hard for people to hold if their hands are small. Shrinking the size of the case and make it more comfortable and ergonomic could be a great improvement since it will be more like a real game controller. In addition, the 3d printing material is also fragile, I need to thicken parts that pressing occurs or it will break easily. 
    </p>

  </div>

</template>

<script>
export default {
  name: 'YouTubeEmbed'
};
</script>

<style scoped>

.container {
  max-width: 1000px; /* Adjust the width of the container */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px; /* Add padding around the content */
  text-align: left; /* Align text to the left */
  margin-top: 10px;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Space between the images and the paragraph */
}

.prototype-image {
  max-width: 45%; /* Ensure both images fit side by side */
  height: auto;
  margin: 0 10px; /* Space between the two images */
}
</style>
