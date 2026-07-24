// Interactive Deepfake Audio Detection Pipeline Simulator

export function initPipelineDemo() {
  const steps = [
    { id: 1, name: "Audio Upload", desc: "Raw WAV/MP3 payload received via FastAPI REST endpoint." },
    { id: 2, name: "Preprocessing", desc: "Resampling to 16kHz, noise reduction, and Librosa normalization." },
    { id: 3, name: "WavLM Extraction", desc: "Microsoft WavLM Large model extracts dense speech representations." },
    { id: 4, name: "Embedding Gen", desc: "1024-dimensional self-supervised speech embedding vector produced." },
    { id: 5, name: "XGBoost Classifier", desc: "Gradient boosted decision trees compute binary probability." },
    { id: 6, name: "Prediction", desc: "Final classification score & confidence rating returned." }
  ];

  const audioSamples = {
    human: {
      label: "Sample 1: Natural Human Speech",
      prediction: "REAL SPEECH",
      confidence: 98.4,
      isReal: true,
      waveformHeights: [30, 45, 60, 80, 50, 40, 65, 85, 45, 30]
    },
    synthetic: {
      label: "Sample 2: AI Generated Voice (TTS)",
      prediction: "AI DEEPFAKE",
      confidence: 99.1,
      isReal: false,
      waveformHeights: [70, 75, 72, 74, 76, 73, 75, 78, 72, 70]
    }
  };

  let currentSampleKey = "human";
  let isRunning = false;

  const sampleButtons = document.querySelectorAll(".sample-btn");
  const runBtn = document.getElementById("run-pipeline-btn");
  const waveBarsContainer = document.getElementById("audio-waves-container");
  const confFill = document.getElementById("conf-fill");
  const confText = document.getElementById("conf-text");
  const predText = document.getElementById("pred-text");
  const stepDescText = document.getElementById("step-desc-text");

  if (!runBtn) return;

  // Sample Selection Listener
  sampleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (isRunning) return;
      sampleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSampleKey = btn.dataset.sample;
      resetDisplay();
    });
  });

  // Run Button Listener
  runBtn.addEventListener("click", () => {
    if (isRunning) return;
    runSimulation();
  });

  function resetDisplay() {
    const sample = audioSamples[currentSampleKey];
    predText.textContent = "Awaiting Pipeline Run...";
    predText.style.color = "var(--text-muted)";
    confText.textContent = "--%";
    confFill.style.width = "0%";
    stepDescText.textContent = "Click 'Run Pipeline Simulation' to trace WavLM speech processing step by step.";
    
    // Reset pipeline step highlights
    document.querySelectorAll(".pipeline-step").forEach((el, idx) => {
      if (idx === 0) el.classList.add("active");
      else el.classList.remove("active");
    });
  }

  function runSimulation() {
    isRunning = true;
    runBtn.disabled = true;
    runBtn.textContent = "Executing WavLM Pipeline...";
    waveBarsContainer.classList.add("wave-animating");

    const sample = audioSamples[currentSampleKey];
    const stepEls = document.querySelectorAll(".pipeline-step");

    let currentStepIdx = 0;

    const interval = setInterval(() => {
      stepEls.forEach(el => el.classList.remove("active"));
      if (currentStepIdx < steps.length) {
        stepEls[currentStepIdx].classList.add("active");
        stepDescText.textContent = `Stage ${currentStepIdx + 1}: ${steps[currentStepIdx].desc}`;
        currentStepIdx++;
      } else {
        clearInterval(interval);
        isRunning = false;
        runBtn.disabled = false;
        runBtn.textContent = "Run Pipeline Simulation";
        waveBarsContainer.classList.remove("wave-animating");

        // Show Final Output
        predText.textContent = sample.prediction;
        predText.style.color = sample.isReal ? "#10b981" : "#ef4444";
        confText.textContent = `${sample.confidence}%`;
        confFill.style.width = `${sample.confidence}%`;
        confFill.style.background = sample.isReal ? "#10b981" : "#ef4444";
        stepDescText.textContent = `Complete! WavLM extracted 1024-dim speech embeddings & XGBoost classified audio as ${sample.prediction} with ${sample.confidence}% certainty.`;
      }
    }, 600);
  }
}
