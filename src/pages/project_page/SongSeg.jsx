import "./SongSeg.css";
function SongSeg() {
  return (
    <div className="container">
      <div className="content">
        <h1>Song Mixing Structure Segmentation</h1>

        <h2>Overview</h2>
        <p>
          This is a part of my bachelor thesis project at University of
          Virginia. The primary goal of this song segmentation task is to{" "}
          <strong>detect temporal changes in mixing characteristics</strong>,
          rather than simply identifying traditional musical structures. While
          common structures like verses, choruses, intros, and outros often
          correlate with changes in mixing, the focus here is on capturing{" "}
          <strong>shifts in spectral characteristics</strong> and{" "}
          <strong>mixed features over time</strong> (McFee et al., 2014).
        </p>
        <p>
          For instance, <strong>choruses</strong> typically serve as the song’s
          climax and feature more layers of instrumentation, broader frequency
          content, and higher loudness. In contrast, <strong>intros</strong> and{" "}
          <strong>outros</strong> tend to be minimal with lower energy levels.
          Thus, segmenting based only on loudness-related features (e.g., RMS or
          energy) may miss these subtle transitions.
        </p>

        <h2>Feature Design</h2>
        <p>
          To address this, I incorporated additional{" "}
          <strong>frequency-domain features</strong>, including:
        </p>
        <ul>
          <li>
            <strong>Spectral Flux</strong>: Captures changes in spectral content
            over time.
          </li>
          <li>
            <strong>MFCCs</strong> (Mel-Frequency Cepstral Coefficients):
            Represents the <strong>timbral texture</strong> of the audio.
          </li>
        </ul>
        <p>
          These features help detect subtle mixing changes and support more
          accurate, context-aware segmentation.
        </p>

        <h2>Segmentation Pipeline</h2>
        <p>
          The song segmentation process follows{" "}
          <strong>four main stages</strong>:
        </p>
        <ol>
          <li>
            <strong>Feature Extraction</strong>
          </li>
          <li>
            <strong>Temporal Aggregation</strong>
          </li>
          <li>
            <strong>Change Point Detection</strong>
          </li>
          <li>
            <strong>Structural Mapping</strong>
          </li>
        </ol>

        <h3>1. Feature Extraction</h3>
        <p>
          I use a <strong>sliding window</strong> (size = 2048, hop length =
          512) to extract short-time features:
        </p>
        <ul>
          <li>Energy</li>
          <li>Root Mean Square (RMS) Amplitude</li>
          <li>Spectral Flux</li>
          <li>MFCCs</li>
        </ul>
        <p>
          These features are normalized and combined into a{" "}
          <strong>composite signal</strong> <code>x_t</code>:
          <br />
          <code>x_t = 0.2 * energy_t + RMS_t + spectral_flux_t + MFCC_t</code>
        </p>

        <h3>2. Temporal Aggregation</h3>
        <p>
          To capture broader trends without losing transients like kick drum
          impacts:
        </p>
        <ul>
          <li>A 1-second moving average filter is applied to x_t.</li>
          <li>
            The end of the signal is zero-padded to ensure the final second is
            processed, causing the feature to converge toward 0.
          </li>
        </ul>
        <p>
          This produces a smooth signal suitable for structural segmentation.
        </p>

        <h3>3. Change Point Detection</h3>
        <p>
          I use the <strong>PELT</strong> algorithm (Killick et al., 2012) via
          the{" "}
          <a
            href="https://github.com/deepcharles/ruptures"
            target="_blank"
            rel="noreferrer"
          >
            ruptures
          </a>{" "}
          library with an <strong>RBF kernel</strong>.
        </p>

        <h3>4. Structural Mapping</h3>
        <p>
          I simplify the structure into a{" "}
          <strong>fixed 4-to-5 phase framework</strong>: Intro → Drop1 → Bridge
          → Drop2 → Outro
        </p>
        <ul>
          <li>
            <strong>Intro</strong>: Low energy, limited frequency content.
          </li>
          <li>
            <strong>Drop1</strong>: First climax with fuller mix and energy.
          </li>
          <li>
            <strong>Bridge</strong>: Transitional phase.
          </li>
          <li>
            <strong>Drop2</strong>: Second climax.
          </li>
          <li>
            <strong>Outro</strong>: Optional or merged with Drop2.
          </li>
        </ul>

        <h3>Label Merging Strategy</h3>
        <p>
          Since change point detection can produce fine-grained segments, I use
          a <strong>threshold-based merging</strong> strategy based on:
        </p>
        <ul>
          <li>Temporal order</li>
          <li>Feature values (energy, spectral flux, MFCCs)</li>
        </ul>

        <h2>Output</h2>
        <p>
          The final segmentation annotates each{" "}
          <strong>section boundary and duration</strong>, enabling{" "}
          <strong>visual and analytical comparison</strong> across tracks.
        </p>

        <h2>Evaluation on Song Segmentation</h2>

        <h3>
          Example 1: <em>Wake Me Up</em> by Avicii
        </h3>
        <p>
          Firstly, I evaluated whether the song segmentation method correctly
          identifies distinct sections. I used a well-known electronic dance
          music track, Wake Me Up by Avicii, as an example. This song follows a
          very standardized structure: Intro → Pre-Chorus → Chorus → Bridge →
          Pre-Chorus → Chorus. Each section shows different spectral and
          loudness characteristics. The song also includes diverse
          instrumentation, ranging from acoustic to electronic instruments,
          making it an ideal test case.
        </p>

        <h4>Spectrogram Analysis</h4>
        <p>
          The figure below shows the spectrogram of Wake Me Up. From the
          spectrogram, different sections exhibit distinct frequency
          distributions and loudness profiles.
        </p>
        <div className="images">
          <img
            src="/assets/Wake_me_up_spectrum.jpg"
            alt="Wake-me-up-spectrum"
            className="spec-image"
          />
        </div>

        <h4>Feature Detection</h4>
        <p>
          The feature detection algorithm identifies nine distinct sections.
          These align well with the spectrogram patterns. For example, the
          algorithm correctly isolates the intro (0s–39s) and the pre-chorus
          (39s–68s), providing a strong foundation for further reduction to
          mixing-based segmentation.
        </p>

        <div className="images">
          <img
            src="/assets/Wake_me_up_changepoint.png"
            alt="Wake-me-up-changepoint"
            className="spec-image"
          />
        </div>
        <h4>Segment Labeling</h4>
        <p>
          In the final segmentation result, adjacent segments were merged based
          on feature similarity and structure. For instance, the segment from
          39s to 113s is labeled as Drop1. While the section from 68s to 86s
          serves as a buildup (lower power), it's still grouped into Drop1 due
          to its relative energy and proximity. A similar merge is done for 181s
          to 210s into Drop2. A 2-second overlap is applied at boundaries to
          ensure smoother transitions. As a result, the track is segmented into
          four coherent regions that reflect both musical structure and
          perceptual mixing changes.
        </p>
        <div className="images">
          <img
            src="/assets/Wake_me_up_structure.png"
            alt="Wake-me-up-structure"
            className="spec-image"
          />
        </div>
        <h3>
          Example 2: <em>Toxic</em> by Britney Spears
        </h3>
        <p>
          Unlike Wake Me Up, Toxic by Britney Spears features a more
          unconventional mixing structure. According to the CCMusic Database,{" "}
          <em>Toxic</em> has 13 traditional segments, but the mixing remains
          largely uniform.
        </p>
        <h4>Database label</h4>
        <div className="tablediv">
          <table border="1" cellPadding="4">
            <thead>
              <tr>
                <th>Section #</th>
                <th>Start Time (s)</th>
                <th>End Time (s)</th>
                <th>Structure Annotation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>00.00</td>
                <td>42.41</td>
                <td>Intro</td>
              </tr>
              <tr>
                <td>2</td>
                <td>42.41</td>
                <td>69.24</td>
                <td>Verse A</td>
              </tr>
              <tr>
                <td>3</td>
                <td>69.24</td>
                <td>86.06</td>
                <td>Pre-chorus A</td>
              </tr>
              <tr>
                <td>4</td>
                <td>86.06</td>
                <td>112.89</td>
                <td>Chorus A</td>
              </tr>
              <tr>
                <td>5</td>
                <td>112.89</td>
                <td>126.31</td>
                <td>Re-intro A</td>
              </tr>
              <tr>
                <td>6</td>
                <td>126.31</td>
                <td>139.77</td>
                <td>Verse B</td>
              </tr>
              <tr>
                <td>7</td>
                <td>139.77</td>
                <td>156.55</td>
                <td>Pre-chorus B</td>
              </tr>
              <tr>
                <td>8</td>
                <td>156.55</td>
                <td>196.81</td>
                <td>Chorus B</td>
              </tr>
              <tr>
                <td>9</td>
                <td>196.81</td>
                <td>240.43</td>
                <td>Re-intro B</td>
              </tr>
              <tr>
                <td>10</td>
                <td>240.43</td>
                <td>267.30</td>
                <td>Chorus C</td>
              </tr>
              <tr>
                <td>11</td>
                <td>267.30</td>
                <td>280.72</td>
                <td>Bridge A</td>
              </tr>
              <tr>
                <td>12</td>
                <td>280.72</td>
                <td>294.17</td>
                <td>Re-intro C</td>
              </tr>
              <tr>
                <td>13</td>
                <td>294.17</td>
                <td>334.43</td>
                <td>Chorus D</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Spectrogram Analysis</h4>
        <p>
          Despite this traditional annotation, the mixing remains largely
          uniform throughout. The spectrogram confirms this homogeneity.
        </p>
        <div className="images">
          <img
            src="/assets/toxic_spectrum.jpg"
            alt="toxic-spectrum"
            className="spec-image"
          />
        </div>
        <h4>Feature Detection</h4>
        <p>
          The detection result highlights this observation. While annotations
          list the Intro as 0–42s, the spectral profile changes significantly
          after 15s. The segment from 15s–52s shows strong similarity in
          spectral features and is grouped together. Overall, the algorithm
          classifies the entire song into 4 mixing-based sections. This matches
          the actual production characteristics rather than formal song
          structure.
        </p>
        <div className="images">
          <img
            src="/assets/toxic_changepoint.png"
            alt="toxic-changepoint"
            className="spec-image"
          />
        </div>
        <h4>Segment Labeling</h4>
        <p>
          The segmentation output uses the 4 detected regions directly. Although
          the official song structure has 13 annotated parts, the mixing
          analysis simplifies it effectively without loss of meaningful
          interpretation. One limitation is that the feature extraction uses a
          1-second window, limiting precision to full seconds. This restricts
          granularity compared to frame-level or millisecond-level annotations.
        </p>
        <div className="images">
          <img
            src="/assets/toxic_structure.png"
            alt="toxic-structure"
            className="spec-image"
          />
        </div>

        <h2>References</h2>
        <ul>
          <li>
            McFee, B., & Ellis, D. P. (2014).{" "}
            <em>Analyzing Song Structure with Spectral Clustering</em>. In
            ISMIR.
          </li>
          <li>
            Killick, R., Fearnhead, P., & Eckley, I. A. (2012).{" "}
            <em>
              Optimal detection of changepoints with a linear computational cost
            </em>
            . JASA, 107(500), 1590–1598.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SongSeg;
