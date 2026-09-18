import { Article, Figure, FigureRow } from "./ArticleLayout";

export default function FMSynthesizer() {
  return (
    <Article
      stack="Bela · Pure Data · 3D Printing"
      title="FM Bass Synthesizer"
      lede="Gamebox — a playable FM bass synth built into a game joystick: a Pure Data patch running on Bela, with a 3D-printed enclosure and mapped analog controls."
    >
      <h2 data-reveal>Introduction</h2>
      <FigureRow
        images={[
          { src: "/assets/prototype1.png", alt: "Gamebox prototype, front" },
          { src: "/assets/prototype2.png", alt: "Gamebox prototype, in hand" },
        ]}
        caption="The 3D-printed prototype enclosure."
      />
      <p>
        This project is called the Gamebox FM bass synthesizer. It is an
        instrument inspired by the form of a game joystick controller and
        classic 8-bit sound. Ideally a player can play this instrument like a
        game controller, which makes it fun. The basic sound is a low-resolution
        simple waveshape — sine, saw, square and triangle. To make it low
        resolution, I built a bit crusher that can be modified from 1 bit to 16
        bits. I also added FM synthesis to increase the complexity of the sound.
        The soundscape of the instrument is basically bass: you can play a
        single shot of bass or consecutive bass. I specifically set the range
        from C1 to A2, which is really low. In addition, since I added reverb,
        it can also generate low atmospheric sound. An interesting design
        decision was leaving a slide space for the button, where you can
        dismount the button, slide it to a position you want, and mount it
        again. This helps people with different hand sizes hold it better. Here
        is the video of my prototype.
      </p>
      <div className="article-video" data-reveal>
        <iframe
          src="https://www.youtube.com/embed/qht6DBH1G4w?si=hWoycw5UF8TZGD0Z"
          title="Gamebox FM bass synthesizer prototype"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h2 data-reveal>Control and Parameter Mapping</h2>
      <Figure
        src="/assets/overview1.png"
        alt="Control layout of the instrument"
        caption="Layout — one knob, two joysticks, two buttons, one accelerometer."
      />
      <p>
        The instrument consists of 1 knob, 2 joysticks, 2 buttons and an
        accelerometer in the layout above. Each joystick has 3 controls: the X
        axis, Y axis, and Z axis. The Z axis of a joystick has the same function
        as a button. For the accelerometer, I only used the X and Y axes.
      </p>
      <Figure
        src="/assets/overview2.png"
        alt="Knob and joystick mapping"
        caption="Knob and joystick assignments."
      />
      <p>
        <strong>Knob</strong>: controls the volume and ADSR of the sound. I set
        volume as the default. Volume ranges from 0 to 1. Attack ranges from 0
        to 3000 ms. Decay ranges from 50 ms to 5000 ms. Sustain ranges from 0 to
        1, where any non-zero value means the sound sustains while the button is
        pressed. Release ranges from 0 ms to 3000 ms.
      </p>
      <p>
        <strong>Joystick 1, X axis</strong>: controls the bit depth of the
        sound. The default value at the middle is 8 bit. Moving left decreases
        it down to 1 bit; moving right increases it up to 16 bits.
      </p>
      <p>
        <strong>Joystick 1, Y axis</strong>: controls the FM modulation index.
        The default index is 0, and I set the range from 0 to 0.5. Only downward
        movement increases the value; moving upward has no effect.
      </p>
      <p>
        <strong>Joystick 1, Z axis</strong>: switches the knob control between
        volume, attack, decay, sustain and release. Each press cycles to the
        next parameter in sequence.
      </p>
      <p>
        <strong>Joystick 2, X axis</strong>: controls the metro frequency, which
        mainly controls how fast the consecutive bass is. The default is 500 ms;
        moving left decreases it to 50 ms and moving right increases it up to
        1000 ms. In BPM, that is 60 to 1200 BPM, with a default of 120 BPM.
      </p>
      <p>
        <strong>Joystick 2, Y axis</strong>: controls the pitch frequency, from
        32.703 Hz (C1) to 110 Hz (A2). Moving the joystick upward decreases the
        frequency; moving it downward increases it.
      </p>
      <p>
        <strong>Joystick 2, Z axis</strong>: switches the waveshape between
        sine, saw, square and triangle.
      </p>
      <p>
        <strong>Button 1</strong> triggers a one-shot sound.{" "}
        <strong>Button 2</strong> triggers the consistent sound controlled by
        the metro frequency.
      </p>
      <Figure
        src="/assets/overview3.png"
        alt="Accelerometer mapping"
        caption="Accelerometer — rotation drives reverb feedback and noise mix."
      />
      <p>
        <strong>Rotation around the X axis</strong> controls the reverb internal
        feedback percentage, ranging from 0 to 100. More rotation means larger
        feedback and longer decay, up to 90 degrees. Since I took the absolute
        value of the X axis from the accelerometer, rotating clockwise and
        counter-clockwise have the same effect.{" "}
        <strong>Rotation around the Y axis</strong> controls the noise mix, and
        like the X axis both directions have the same effect — the more you
        rotate, the louder the noise, from 0 to 1.
      </p>
      <p>
        Overall, my mapping of hardware to parameters is basically one-to-one,
        since I want it to be clear for the user to adjust each parameter
        independently to shape their sound. The special case is that the knob
        and joystick 1&rsquo;s Z axis map to multiple parameters. It seems to be
        a two-to-many mapping, but essentially it is also one-to-one, since the
        switch is a function and I mapped that function to joystick 1&rsquo;s Z
        axis.
      </p>

      <h2 data-reveal>Key Features</h2>

      <h3>Bit crush</h3>
      <Figure
        src="/assets/feature1.png"
        alt="Bit crusher patch in Pure Data"
        caption="Bit crusher — quantizing the oscillator output to a target bit depth."
        narrow
      />
      <p>
        The bit crush is one of the main inspirations for this instrument. Here
        is how I implemented it. I take the input from the oscillator and a
        number representing the target bit depth. The expression{" "}
        <code>pow(2, $f1) - 1</code> calculates the maximum amplitude level for
        the given bit depth, and <code>(1 / $f1)</code> computes the resolution
        based on the bit depth. In the end, the bit crush is represented by
        Output = round(Resolution / Input) × Resolution, which is{" "}
        <code>expr~ round($v1/$f2)</code>. This expression divides the incoming
        signal value by the resolution (step size) and rounds it to the nearest
        integer, quantizing the signal to simulate lower bit depth.
      </p>

      <h3>FM synthesis</h3>
      <Figure
        src="/assets/feature2.png"
        alt="FM synthesis patch in Pure Data"
        caption="One carrier, one sine modulator, index driven by joystick 1."
        narrow
      />
      <p>
        For the FM synthesis in this instrument, I have 1 carrier and 1
        modulator. The carrier has 4 waveshapes which are changeable, but the
        modulator is just an oscillator with a sine wave. I set the frequency of
        the carrier and modulator the same so that it has a clear pitch with FM
        synthesis. I modulate the mod index using joystick 1&rsquo;s Y axis.
      </p>

      <h3>Moses for stable defaults and limits</h3>
      <Figure
        src="/assets/feature3.png"
        alt="Moses objects clamping sensor values"
        caption="moses — clamping jittery sensor values to stable defaults and bounds."
        narrow
      />
      <p>
        When I experimented with my joystick and accelerometer, I found that the
        values of these sensors always vary by a small amount. Since I want the
        default state — not moving the joystick or accelerometer — to be a
        stable value, I used the moses object, which is essentially the logic of
        &ldquo;if small do something, else do other things&rdquo;. I set the
        moses value to a small range that the default state is likely to fall
        in. In addition, I found that the max and min values of the sensor
        change, so I also applied moses at the limits to set the lower and upper
        bounds a parameter can reach.
      </p>

      <h3>Switching between parameters</h3>
      <Figure
        src="/assets/feature4.png"
        alt="Spigot-based parameter switching"
        caption="Spigots gate which parameter the knob currently drives."
        narrow
      />
      <p>
        For switching parameters, once the button is pressed it selects from 5
        options. Each option sends 1 to its representing spigot and 0 to all
        other options. The spigot is essentially a gate that lets data pass
        through. By doing this in the graph, I can switch the parameter control
        between 5 options.
      </p>

      <h3>Rotation with the accelerometer</h3>
      <Figure
        src="/assets/feature5.png"
        alt="Accelerometer angle calculation"
        caption="Angle from atan2, scaled and taken as an absolute value."
        narrow
      />
      <p>
        For the accelerometer calculation, I did it the default way: angle theta
        = atan2(sin(theta), cos(theta)), then multiplied by 0.3183 to scale
        within −1 to 1. A trick I did here is to take the absolute value of
        theta, which makes rotation clockwise and counter-clockwise give the
        same value. Therefore people can play whichever way they prefer and get
        the same effect.
      </p>

      <h2 data-reveal>Future Improvement</h2>
      <p>
        One point is that I could improve the precision and stability of
        operations like pitch and the other indices. Since I am using joysticks,
        it is very hard to keep a value at the same exact amount, so sometimes
        the resulting sound is not stable — a slight change may cause large
        variation in the sound, so improving precision is important.
      </p>
      <p>
        About the instrument&rsquo;s hardware, I think designing a better case
        is also important. The current case for the Bela and breadboard is
        fairly big, which makes it hard to hold for people with small hands.
        Shrinking the case and making it more comfortable and ergonomic would be
        a great improvement, since it would be more like a real game controller.
        In addition, the 3D printing material is fragile, so I need to thicken
        the parts where pressing occurs or they will break easily.
      </p>
    </Article>
  );
}
