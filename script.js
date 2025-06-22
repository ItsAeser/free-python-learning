let pyodide = null;
let currentLesson = 0;
let editor = null;
let lessons = [];

async function initPyodide() {
  pyodide = await loadPyodide();
}

function loadLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-text").textContent = lesson.text;

  // Quiz
  const quizSection = document.getElementById("quiz-section");
  quizSection.innerHTML = "<h3>Quiz</h3>";
  lesson.quiz.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === lesson.quiz.answer) {
        btn.style.background = "green";
      } else {
        btn.style.background = "red";
      }
    };
    quizSection.appendChild(btn);
  });

  editor.setValue(lesson.project || "# Start coding here");
  highlightSidebar();
}

function highlightSidebar() {
  const buttons = document.querySelectorAll("#sidebar button");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === currentLesson);
  });
}

function createSidebar() {
  const sidebar = document.getElementById("sidebar");
  lessons.forEach((lesson, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `Lesson ${idx + 1}`;
    btn.onclick = () => loadLesson(idx);
    sidebar.appendChild(btn);
  });
}

async function runCode() {
  const code = editor.getValue();
  try {
    const result = await pyodide.runPythonAsync(code);
    document.getElementById("output").textContent = result || "✅ Code ran successfully.";
  } catch (err) {
    document.getElementById("output").textContent = `❌ Error:\n${err}`;
  }
}

async function main() {
  await initPyodide();

  const response = await fetch("lessons.json");
  lessons = await response.json();

  createSidebar();

  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "python",
  theme: "ayu-mirage",
  lineNumbers: true,
});

  const themes = {
  dark: { "--theme": "dark" },
  light: { "--theme": "light" }
};

function setTheme(name) {
  document.documentElement.setAttribute('data-theme', name);
  localStorage.setItem('theme', name);
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  setTheme(saved || prefers);
})();

document.getElementById('theme-toggle').onclick = () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
};

  loadLesson(0);
}

main();
