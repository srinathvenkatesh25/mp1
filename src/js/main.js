const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.nav__link')];
const navTargets = navLinks
  .map((link) => ({ link, target: document.querySelector(link.getAttribute('href')) }))
  .filter(({ target }) => target);

const SCROLLED_THRESHOLD = 24;
const ACTIVE_LINE_OFFSET = 30;

function getActiveLink() {
  const scrolledToBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (scrolledToBottom) {
    return navTargets[navTargets.length - 1].link;
  }

  // The active item is the last menu section whose top has passed the bottom edge of the navbar.
  // Sections that are not in the menu keep the previous item highlighted.
  const activeLine = header.offsetHeight + ACTIVE_LINE_OFFSET;
  let active = navTargets[0];
  navTargets.forEach((item) => {
    if (item.target.getBoundingClientRect().top <= activeLine) {
      active = item;
    }
  });
  return active.link;
}

function updateScrollState() {
  document.body.classList.toggle('scrolled', window.scrollY > SCROLLED_THRESHOLD);

  const activeLink = getActiveLink();
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link === activeLink);
  });
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

  carouselTrack.dataset.slide = index;
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

const BASELINE = { hours: 24, streak: 12, tasks: 41, stress: 34, score: 88 };
const MAX_STREAK = 30;
const MAX_STRESS_DROP = 92;

function getSavedSessions() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function persistSessions(sessions) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(sessions));
  } catch (error) {
    // Storage can be unavailable (private mode, quota); the dashboard still updates for this visit.
  }
}

function formatTimeLabel() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function formatHours(hours) {
  return Number.isInteger(hours) ? `${hours}` : hours.toFixed(1);
}

function calculateFocusScore(minutes, energy, distractions) {
  const weightedScore = minutes * 0.9 + Number(energy) * 7 - Number(distractions) * 6;
  return Math.max(40, Math.min(99, Math.round(weightedScore)));
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function updateStats() {
  const sessions = getSavedSessions();
  const totalMinutes = sessions.reduce((total, session) => total + Number(session.minutes || 0), 0);
  const hours = formatHours(BASELINE.hours + totalMinutes / 60);
  const streak = Math.min(BASELINE.streak + sessions.length, MAX_STREAK);
  const stressDrop = Math.min(BASELINE.stress + sessions.length * 3, MAX_STRESS_DROP);
  const latestSession = sessions[0];

  setText(statsMap.hours, hours);
  setText(statsMap.streak, `${streak} days`);
  setText(statsMap.tasks, `${BASELINE.tasks + sessions.length}`);
  setText(statsMap.stress, `${stressDrop}%`);
  setText(statsMap.focusScore, `${latestSession ? latestSession.score : BASELINE.score}`);
  setText(statsMap.hoursLogged, hours);
  setText(statsMap.streakValue, `${streak}d`);
  setText(statsMap.modeLabel, latestSession ? latestSession.mode : 'Deep work');
}

function createSessionItem(title, detail) {
  const item = document.createElement('li');
  const strong = document.createElement('strong');
  const small = document.createElement('small');
  strong.textContent = title;
  small.textContent = detail;
  item.append(strong, small);
  return item;
}

function renderSessionLog() {
  const sessions = getSavedSessions();
  if (!sessionLog) return;

  if (!sessions.length) {
    sessionLog.replaceChildren(
      createSessionItem('No sessions logged yet.', 'Start with a focus sprint to update your dashboard.')
    );
    return;
  }

  sessionLog.replaceChildren(
    ...sessions
      .slice(0, 5)
      .map((session) =>
        createSessionItem(
          `${session.mode} · ${session.minutes} min`,
          `${session.note || 'Session completed'} · ${session.time}`
        )
      )
  );
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
