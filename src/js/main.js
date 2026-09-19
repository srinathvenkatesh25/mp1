const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.nav__link')];
const navIndicator = document.querySelector('.nav__indicator');
const sections = [...document.querySelectorAll('main section[id]')];

function updateScrollState() {
  const scrolled = window.scrollY > 24;
  document.body.classList.toggle('scrolled', scrolled);

  const navOffset = header ? header.offsetHeight : 0;
  let activeId = 'top';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top - navOffset - 30;
    const sectionBottom = rect.bottom - navOffset - 30;

    if (sectionTop <= 0 && sectionBottom > 0) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('is-active', isActive);
  });

  const activeElement = document.querySelector(`.nav__link[href="#${activeId}"]`);
  if (!activeElement || !navIndicator) {
    return;
  }

  const indicatorWidth = activeElement.offsetWidth;
  const indicatorLeft = activeElement.offsetLeft;
  navIndicator.style.width = `${indicatorWidth}px`;
  navIndicator.style.left = `${indicatorLeft}px`;
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('load', updateScrollState);
window.addEventListener('resize', updateScrollState);

const carouselTrack = document.querySelector('.carousel__track');
const slides = [...document.querySelectorAll('.slide')];
const prevButton = document.querySelector('.carousel__arrow--prev');
const nextButton = document.querySelector('.carousel__arrow--next');

let currentSlideIndex = 0;

function renderSlide(index) {
  if (!carouselTrack) return;

  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
  });
}

if (prevButton && nextButton && slides.length) {
  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    renderSlide(currentSlideIndex);
  });

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    renderSlide(currentSlideIndex);
  });

  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    renderSlide(currentSlideIndex);
  }, 5000);
}

const modalButtons = document.querySelectorAll('[data-modal-target]');
const modals = [...document.querySelectorAll('.modal')];

function openModal(targetId) {
  const modal = document.getElementById(targetId);
  if (!modal) return;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-modal-target');
    openModal(targetId);
  });
});

modals.forEach((modal) => {
  const closeTriggers = modal.querySelectorAll('[data-close-modal]');
  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => closeModal(modal));
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal(modal);
    }
  });
});

const sessionForm = document.getElementById('focus-form');
const sessionLog = document.getElementById('session-log');
const statsMap = {
  hours: document.querySelector('[data-stat-card="hours"]'),
  streak: document.querySelector('[data-stat-card="streak"]'),
  tasks: document.querySelector('[data-stat-card="tasks"]'),
  stress: document.querySelector('[data-stat-card="stress"]'),
  focusScore: document.querySelector('[data-stat="focusScore"]'),
  hoursLogged: document.querySelector('[data-stat="hours"]'),
  streakValue: document.querySelector('[data-stat="streak"]'),
  modeLabel: document.querySelector('[data-stat="modeLabel"]')
};

const storageKey = 'focusflow-sessions';

function getSavedSessions() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function persistSessions(sessions) {
  localStorage.setItem(storageKey, JSON.stringify(sessions));
}

function formatTimeLabel() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function calculateFocusScore(minutes, energy, distractions) {
  const weightedScore = minutes * 0.9 + Number(energy) * 7 - Number(distractions) * 6;
  return Math.max(40, Math.min(99, Math.round(weightedScore)));
}

function updateStats() {
  const sessions = getSavedSessions();
  const totalMinutes = sessions.reduce((total, session) => total + Number(session.minutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const totalTasks = sessions.length + 41;
  const averageStressDrop = sessions.length ? Math.min(92, 23 + sessions.length * 4) : 34;
  const latestSession = sessions[0];
  const currentMode = latestSession ? latestSession.mode : 'Deep work';
  const score = latestSession ? latestSession.score : 88;
  const streak = sessions.length ? `${Math.min(12 + sessions.length, 30)}d` : '12d';

  if (statsMap.hours) statsMap.hours.textContent = `${totalHours}`;
  if (statsMap.streak) statsMap.streak.textContent = `${Math.max(12, Number(streak.replace('d', '')))} days`;
  if (statsMap.tasks) statsMap.tasks.textContent = `${totalTasks}`;
  if (statsMap.stress) statsMap.stress.textContent = `${averageStressDrop}%`;
  if (statsMap.focusScore) statsMap.focusScore.textContent = `${score}`;
  if (statsMap.hoursLogged) statsMap.hoursLogged.textContent = `${totalHours}`;
  if (statsMap.streakValue) statsMap.streakValue.textContent = streak;
  if (statsMap.modeLabel) statsMap.modeLabel.textContent = currentMode;
}

function renderSessionLog() {
  const sessions = getSavedSessions();
  if (!sessionLog) return;

  if (!sessions.length) {
    sessionLog.innerHTML = '<li><strong>No sessions logged yet.</strong><small>Start with a focus sprint to update your dashboard.</small></li>';
    return;
  }

  sessionLog.innerHTML = sessions
    .slice(0, 5)
    .map((session) => `
      <li>
        <strong>${session.mode} · ${session.minutes} min</strong>
        <small>${session.note || 'Session completed'} · ${session.time}</small>
      </li>
    `)
    .join('');
}

function saveSession(event) {
  event.preventDefault();
  if (!sessionForm) return;

  const formData = new FormData(sessionForm);
  const mode = formData.get('mode');
  const minutes = Number(formData.get('minutes'));
  const energy = Number(formData.get('energy'));
  const distractions = Number(formData.get('distractions'));
  const note = formData.get('note') || 'Session completed';

  const score = calculateFocusScore(minutes, energy, distractions);
  const session = {
    mode,
    minutes,
    energy,
    distractions,
    score,
    note,
    time: formatTimeLabel()
  };

  const sessions = [session, ...getSavedSessions()].slice(0, 8);
  persistSessions(sessions);
  updateStats();
  renderSessionLog();
  sessionForm.reset();
  const minutesInput = sessionForm.querySelector('input[name="minutes"]');
  if (minutesInput) minutesInput.value = 25;
  const energyInput = sessionForm.querySelector('select[name="energy"]');
  if (energyInput) energyInput.value = '6';
  const distractionInput = sessionForm.querySelector('input[name="distractions"]');
  if (distractionInput) distractionInput.value = 2;
}

if (sessionForm) {
  sessionForm.addEventListener('submit', saveSession);
}

updateStats();
renderSessionLog();
updateScrollState();
renderSlide(currentSlideIndex);
