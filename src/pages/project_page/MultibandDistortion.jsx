import { Article, Figure } from "./ArticleLayout";

export default function MultibandDistortion() {
  return (
    <Article
      stack="C++ · JUCE · DSP"
      title="Multi-band Distortion Plugin"
      lede="IIIONSTER — a three-band distortion VST built on JUCE, splitting the signal with Linkwitz-Riley crossovers so each band can be saturated independently."
    >
      <h2 data-reveal>Motivation</h2>
      <p>
        I enjoy bass music like dubstep. This genre usually requires a lot of
        distortion to boost energy and create an aggressive feel. I think it is
        interesting to build a distortion that can apply different types of
        distortion on different frequency domains, since this type of distortion
        is not common in the market. Therefore, through this project, I want to
        make a more flexible and versatile distortion to distort audio in more
        possibilities.
      </p>

      <h2 data-reveal>Plugin Design</h2>
      <p>
        My plugin is called IIIONSTER (Monster). I changed the &ldquo;M&rdquo;
        into &ldquo;III&rdquo; because I want to represent that it is a 3-band
        distortion, which divides the input signal into low (20–200 Hz), middle
        (200 Hz–2 kHz) and high frequencies (2 kHz–20 kHz), and each band can
        apply a different distortion type (three types in total). This is my
        flow diagram, which describes how my plugin is constructed:
      </p>
      <Figure
        src="/assets/flowdiagram.png"
        alt="Signal flow diagram of the plugin"
        caption="Signal flow — filters, three-band split, per-band distortion, mix and output."
      />

      <h3>Linkwitz-Riley band splitting</h3>
      <p>
        One key element in my plugin is that I utilized Linkwitz-Riley filters
        to perform multi-band separation. I did some research on FIR filter
        implementation and found it would be hard to create a perfect brick wall
        shaped filter. Then, I found the Linkwitz-Riley filter being employed on
        some multi-band compressors and speakers and found its characteristics
        very suitable for my plugin. Luckily JUCE has Linkwitz-Riley in the DSP
        library. Therefore, I used 4 Linkwitz-Riley filters: one low pass, one
        high pass, and another low pass and high pass pair to form the band pass
        filter in the middle frequency range. Below is the code for separating
        the signal by applying the filters.
      </p>
      <Figure
        src="/assets/signal.png"
        alt="Code that splits the signal into three bands"
        caption="Band separation with four Linkwitz-Riley filters."
        narrow
      />
      <p>
        I set the crossover points at 200 Hz and 2 kHz, where those four
        Linkwitz-Riley filters cross with each other. These two points are
        common under speaker usage, so I took them as the band boundaries. The
        advantage of using Linkwitz-Riley filters is that their sum produces a
        flat amplitude response, which means the three bands added back together
        sound the same as the original input — so I can maintain the original
        nature of the sound before distortion after splitting into 3 bands. Each
        band has an independent drive parameter that controls the gain before
        distortion, ranging from −36 dB to 36 dB.
      </p>
      <Figure
        src="/assets/lindley.png"
        alt="Linkwitz-Riley crossover response"
        caption="Crossover response — the three bands sum flat."
        narrow
      />

      <h3>Distortion algorithms</h3>
      <p>
        For the distortion algorithm, I have 3 types: arctan, hard clipping, and
        soft clipping. I named them medium, hard and soft in my plugin. Below is
        the figure explaining the three distortions as math functions.
      </p>
      <Figure
        src="/assets/distortionalgo.png"
        alt="The three distortion transfer functions"
        caption="Arctan, hard clipping, and soft clipping transfer functions."
        narrow
      />
      <p>
        When I apply this math in my code, I create a structure called
        DistortionType, then write a function called applyDistortion. Once the
        distortion type is selected and passed into the processing block, it
        calls the function below, which first matches the distortion type and
        then uses the corresponding math function on the input.
      </p>
      <Figure
        src="/assets/code.png"
        alt="applyDistortion implementation"
        caption="applyDistortion — dispatch on the selected distortion type."
        narrow
      />

      <h3>Other filters, mix and randomization</h3>
      <p>
        I also have a high pass filter before the distortion chain, which allows
        people to first filter out unwanted low frequencies. This filter is just
        a normal HP filter with a Q factor of 3, and the cutoff is adjustable
        from 20 Hz to 1 kHz. I also have a peak filter before the distortion
        chain, with Q = 8 and a gain of 6 dB, which allows the user to boost a
        small range of frequencies to add tonality to the distortion — cutoff
        adjustable from 1 kHz to 10 kHz. Finally I used a low pass filter after
        the distortion chain, because distortion in high frequencies often
        produces unwanted content that is harmful to the ear. That filter has a
        Q of 3 and a cutoff adjustable from 1 kHz to 20 kHz.
      </p>
      <p>
        The Mix parameter is the blend of wet and dry signal from 0 to 100
        percent. The Output parameter controls the gain after the whole
        processing chain, adjustable from −24 dB to 6 dB.
      </p>
      <p>
        I also designed a random function. By clicking the button, the random
        generator generates values for each parameter and sets them. I
        particularly constrained the range of the randomly generated values to
        make sure they are always applicable to the corresponding parameter.
        Having a random button can give some inspiration for users when they
        have no idea how to adjust parameters.
      </p>

      <h2 data-reveal>GUI Design</h2>
      <Figure
        src="/assets/GUI.png"
        alt="The IIIONSTER plugin interface"
        caption="IIIONSTER — a deliberately minimal black-and-white interface."
      />
      <p>
        To make the plugin look more usable and less raw to users, I spent quite
        an amount of time designing the GUI. I intended to design a minimalist
        GUI which lets people understand my plugin clearly just through the
        interface. I chose black and white as the main colors because it is
        simple and effective. I particularly used the LookAndFeelV4 class in
        JUCE, and created my own header file called CustomLookAndFeel. In that
        file I customized the rotary slider by drawing a circle with a small
        rectangle as the tick pointing to the rotary angle. In addition, I
        customized the vertical slider by drawing a black rectangle with a wider
        but smaller white rectangular thumb.
      </p>
      <p>
        To maintain the uniform look of the GUI, I set the text box background
        to white and the outline to transparent. In addition, I set the combo
        box&rsquo; text color, background color and check label color as well. I
        divided my plugin into four sections by drawing rectangles. The section
        without a rectangle boundary is obviously the title section, which tells
        people what the plugin is called. The first section is the distortion
        section, which contains all distortion-related parameters. The second is
        the control section, containing output and mix, responsible for the
        overall signal flow after processing. The third is the tonality control
        section, which controls the filters that shape the tone of the sound,
        plus the random button. As usual, I still used the
        double-click-to-return-to-default behaviour on all parameters, which
        allows users to reset a parameter to its initial state.
      </p>
      <p>
        At last, I observed that once I closed the plugin and reopened it, the
        combo box automatically returned to the default setting. To prevent the
        setting from being lost once the user closes the GUI window, I used XML
        to store data and set the combo box selection in the processor through
        the getStateInformation and setStateInformation functions. By doing so,
        the plugin remembers the combo box choice across window open and close.
      </p>

      <h2 data-reveal>Future Improvement</h2>
      <p>
        Currently the plugin has two obvious problems that could be improved.
        First, when the mix of wet and dry signal is 50 percent, the sound does
        not sum flat at the two crossover points of the Linkwitz-Riley filters.
        At 200 Hz and 2 kHz there are two small dips, which result in less level
        at these two frequencies. Since Linkwitz-Riley should ensure the sum is
        flat, I think it may be phase cancellation between the dry and wet
        signal — the filtered signal may have subtle phase changes since filters
        introduce delay. The solution may be improving the Linkwitz-Riley filter
        design to see if it eliminates the problem; another possibility is
        looking into designing an FIR filter to replace Linkwitz-Riley to see if
        it performs better.
      </p>
      <p>
        Second, the GUI label alignment and the pop-up menu color of the combo
        box. The GUI labels and texts are all aligned by hard-coded values right
        now, so they are not strictly aligned. In the future this could be
        improved by using layout settings for a more uniform look. In addition,
        once users click the combo box, the pop-up menu color is still the
        default, so there may be a way to modify this in the future. Lastly,
        other distortion types could be considered in the future, like overdrive
        and fuzz, which would increase the possibilities of the plugin.
      </p>

      <h2 data-reveal>Audio Example</h2>
      <p>
        For my distortion in music content, I applied it to piano, synth bass,
        electric bass and guitars. For piano and bass, which mostly contribute
        to the low frequency domain, I wanted to boost the lows to give a warm
        feeling without distorting too hard and making the low end blurry, so I
        distorted the lower band about 6 dB in med type. For guitar, I added
        several different types of distortion: for the quarter notes playing at
        mid-low frequency, I distorted with about 18 dB in both mid and low
        band, and set the mid band to hard since I wanted it more distorted. For
        the higher pitched riff guitar, I distorted with mid and high band at
        about 20 dB, then used my low pass filter to filter out some unwanted
        high frequencies. For the drums I distorted both snare and kick. For
        snare, I mainly distorted the mid range about 18 dB and set the tone
        around 200 Hz to emphasize the snare&rsquo;s strong metallic hit. Then I
        distorted the kick with the low and mid bands, the mid band in hard mode
        and more than the low band, since I think the low band for the kick is
        enough and I wanted the mid band to boost the punch. With all this
        distortion plus only reverb and compression, I transformed the music
        before distortion into the music after distortion.
      </p>
      <div className="audio-pair" data-reveal>
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
            <source src="/assets/music_after_distortion.wav" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </Article>
  );
}
