import "./MultibandDistortion.css";
export default function MultibandDistortion() {
  return (
    <div className="page">
      <div className="m-container">
        <h1>Multi-band Ditortion Plugin</h1>
        <h3> Motivation</h3>
        <p>
          I enjoy Bass Music like Dubstep. This genre usually requires a lot of
          distortion to boost energy to create aggressive feels. I think it is
          interesting to build a distortion that can apply different types of
          distortion on different frequency domain since this type of distortion
          is not common in the market. Thereforem, through this project, I want
          to make a more flexible and versatile distortion to distort audio in
          more possibilities.
        </p>

        <h3> Plugin Design</h3>
        <p>
          My plugin is called IIIONSTER(Monster). I changed “M” into “III”
          because I want to represent that it is a 3 band distortion which
          divided the input signal into low(20-200hz), middle(200-2khz) and high
          frequencies(2khz-20khz), and each of the band can apply different
          distortion type(totally 3 types). This is my flow diagram which
          describe how my plugin is constructed:
        </p>
        <div className="images">
          <img
            src="/assets/flowdiagram.png"
            alt="Flowdiagram"
            className="prototype-image"
          />
        </div>
        <p>
          One key element in my plugin is that I utilized Linkwitz-Riley filters
          to perform multi-band separation. I did some research on FIR filter
          implementation and found it would be hard to create a perfect brick
          wall shape filter. Then, I found the Linkwitz-Riley filter being
          employed on some multi-band compressors and speakers and found its
          characteristics very suitable for my plugin. Luckily the Juce has
          Linkwitz-Riley in the dsp library. Therefore, I used 4 Linkwitz-Riley
          filters. One is for low pass one is for high pass and I used another
          one lowpass filter and high pass filter to form the bandpass filter in
          the middle frequency range. Below is code of separating signal by
          applying filters.
        </p>
        <div className="images">
          <img
            src="/assets/signal.png"
            alt="Signal"
            className="prototype-image"
          />
        </div>
        <p>
          I set the cross over point at 200hz and 2khz where those four
          Linkewirz-riley filters cross with each other at these two points.
          These two points are common under speaker usage, so I took these two
          points and band boundary. The advantage of using Linkwitz-Riley filter
          is that it ensures four filters’ sum produce a flat amplitude response
          which let the division of three bands adding together sound the same
          as the original input, so I can maintain the original nature of sounds
          before distortion after splitting to 3 bands. For each of the band it
          has an independent drive parameter that can control the gain before
          distortion. The range of parameters is from -36 db to 36 db.
        </p>

        <div className="images">
          <img
            src="/assets/lindley.png"
            alt="Lindley"
            className="prototype-image"
          />
        </div>
        <p>
          For the distortion algorithm, I have 3 types of distortion algorithm
          which are Arctan algorithm, Hard clipping algorithm, and Soft clipping
          algorithm. I named them correspondingly in medium, hard and soft in my
          plugin. Below is the figure explaining the three distortion in math
          functions
        </p>

        <div className="images">
          <img
            src="/assets/distortionalgo.png"
            alt="Distortionalgo"
            className="prototype-image"
          />
        </div>
        <p>
          When I apply these math on my code, I create a structure called
          DistortionType, then write the function called applyDistortion. Once
          the Distortion Type is selected and passed in processing block, it
          will call the function below which first match the distortiontype and
          then use the corresponding math function on the input.
        </p>
        <div className="images">
          <img src="/assets/code.png" alt="Code" className="prototype-image" />
        </div>
        <p>
          Other filters: I also have a High Pass filter before the distortion
          chain which allow people to first filter out the unwanted low
          frequencies. This filter is just a normal hp filter with q factor of
          3. People can adjust cutoff from 20hz to 1khz. I also have another
          peak filter before distortion chain, this is a peak filter with Q= 8
          and gain of 6db, this allows user to boost a small range of frequency
          to add tonality to the distortion. People can adjust cutoff from 1khz
          to 10khz. Finally I also used a low pass filter after distortion chain
          because distortion in high frequency often produce unwanted
          frequencies that is harmful to ear. Therefore, I used a low pass
          filter of q of 3 to filter out the noisy frequencies. People can
          adjust cut off from 1khz to 20khz.
        </p>
        <p>
          Mix and Output: The Mix parameter is just the mix of wet and dry
          signal from 0 percent to 100 percent. The output is the parameter
          control the gain after all process chain which people can adjust from
          -24 db to 6 db.
        </p>
        <p>
          Random: I also designed a random function. By clicking the button, the
          random generator will generate values for each parameter and set those
          parameter as the random number. I particularly set the range of random
          generated value to make sure that the value is always applicable to
          the corresponding parameter. Having a random button can give some
          inspiration for users when they have no idea of adjusting parameters.
        </p>
        <h3>GUI design</h3>
        <div className="images">
          <img src="/assets/GUI.png" alt="Gui" className="prototype-image" />
        </div>
        <p>
          To make plugin looks more usable and less raw to users, I spent quite
          amount of time designing GUI. I intended to design a minimalism GUI
          which can make people know my plugin clearly just through GUI. I chose
          black and white as main color because it is simple and effective when
          people see the GUI. I particularly used LookandFeelV4 class in the
          JUCE. I created my own header file called CustomiLook andFeel. In the
          file, specifically the picture below, I customized the the rotary
          slider by drawing a circle with a small rectangular as the tick
          pointing to the rotary angle. In addition, I customized the vertical
          slider looking by drawing a black rectangular with a wider but smaller
          white rectangular thumb.
        </p>
        <p>
          To maintain the uniform look of GUI, I set the textbox's background to
          white and outline as transparent. In addition, I set the combo box’
          text color, background color and check label color as well. I divided
          my plugin into four sections by drawing rectangles. The section
          without rectangle boundary is obvious the Title section which notify
          people what the plugin is called. Then, the first section is
          distortion section which contains all distortion related parameters.
          The second section is the control section which contains the output
          and mix that is responsible for the overall signal flow after
          processing. The third section is tonality control section which
          control filters that can shape the tones of the sound and a random
          button. As usual, I still used the double-click-to-return-default
          function on all parameters which allow users to reset the parameter to
          initial states. I think this would help a lot when people what to
          reset the parameters.
        </p>
        <p>
          At last, I observed that once I closed the plugin and reopen it, the
          combo box will automatically return to the default setting. To prevent
          that the setting is not usable once user closed the window of gui and
          just open it again, I found that using xml to store data and set the
          combo box selection in the processor through getState and
          setStateinformation function. By doing so, the plugin will remember
          the combo box choice once user close the window and reopen it.
        </p>

        <h3> Future Improvement </h3>

        <p>
          Currently, the plugin have 2 most obvious problem that could be
          improved in the future. 1. When the mix of wet and dry signal is 50
          percent, the sound does not sum up to be flat at two cross point of
          Linkwitz-Riley filters. At the frequency of 200 hz and 2khz, there are
          two small down curve which result in less level in these two
          frequency. Since the Linkwitz-Riley should ensure the sum to be plat,
          I think it may be the phase cancellation of dry signal and wet signal.
          The filtered signal may have some subtle changes in phase since filter
          actually has delay. The solution may be improving the Linkwitz-Riley
          filter design to see if can eliminate the problem. Another possibility
          is to look into designing FIR filter to replace Linkwitz-Riley in the
          future to see if it performs better. 2.The GUI label alignment and pop
          up menu color of combo box. The GUI label and texts are all aligned in
          hard code right now, so it is not strictly aligned. In the future it
          may be improved by using layout setting to write a more uniform
          looking. In addition, once users click the combo box, the pop up
          menu's color is still default color, so there may be a way to modify
          this in the future. Lastly, other distortion types could be considered
          in the future like overdrive and fuzz which could increase the
          possibilities of the plugin.
        </p>

        <h3>Audio Example</h3>

        <p>
          For my distortion in music content, I applied my distortion to the
          piano, synth bass, electric bass and guitars. For piano and bass, they
          mostly contribute to the low frequency domain. I want to boost low
          frequency to give a warm feeling but not distorting too hard and
          making low frequency too blurry, so I distorted lower band about 6db
          in med type. For guitar, I added several different types of
          distortion. For the quarter notes playing at mid low frequency, I
          distorted with about 18 db in both mid and low band, and set the mid
          band to hard since I want it to be more distorted. For the higher
          pitch riff guitar, I distorted it with mid and high band at about 20
          db. Then, I use my low pass filter to filter out some unwanted high
          frequency For the drum I distorted both snare and kick. For snare, I
          mainly distort the mid range about 18 db and set tone to around 200hz
          to emphasize the snare's strong metallic hit. Then I distorted kick
          with low band and mid band. I distorted the mid band with hard mode
          and more than low band since I think the low band for kick is enough
          and I want to use mid band to boost the punch feels of the kick. With
          all these distortion and the reverb and compressor only, I transfer my
          music before distortion(left) to music after distortion(right).
        </p>
        <div className="audio-container">
          <div className="audio-block">
            <p>Before Distortion</p>
            <audio controls>
              <source
                src="/assets/music_before_distortion.wav"
                type="audio/wav"
              />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="audio-block">
            <p>After Distortion</p>
            <audio controls>
              <source
                src="/assets/music_after_distortion.wav"
                type="audio/wav"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}
