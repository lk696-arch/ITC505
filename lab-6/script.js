// ITC505 Lab 6 — Bubble Sort Playground (separate JS file)
(function () {
  'use strict';

  const form = document.getElementById('sortForm');
  const input = document.getElementById('numbers');
  const result = document.getElementById('result');
  const stepsList = document.getElementById('stepsList');

  const sortAscBtn = document.getElementById('sortAsc');
  const sortDescBtn = document.getElementById('sortDesc');
  const stepBtn = document.getElementById('stepBtn');
  const resetBtn = document.getElementById('resetBtn');

  function parseNumbers(raw) {
    const tokens = raw.split(',').map(t => t.trim()).filter(t => t.length > 0);
    if (tokens.length === 0) return [];
    const nums = tokens.map(t => Number(t));
    if (nums.some(n => !Number.isFinite(n))) {
      throw new Error('Please enter only integers separated by commas (e.g., 5, 3, 8, 1).');
    }
    return nums;
  }

  // Bubble sort with optional trace of each swap state
  function bubbleSort(arr, { descending = false, trace = false } = {}) {
    const a = arr.slice();
    const steps = [];
    const compare = descending
      ? (x, y) => x < y
      : (x, y) => x > y;

    for (let i = 0; i < a.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < a.length - 1 - i; j++) {
        if (compare(a[j], a[j + 1])) {
          const tmp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = tmp;
          swapped = true;
          if (trace) {
            steps.push(a.slice()); // snapshot
          }
        }
      }
      if (!swapped) break;
    }
    return { sorted: a, steps };
  }

  function renderSteps(steps) {
    stepsList.innerHTML = '';
    // Avoid overwhelming the page on many steps
    const MAX = 50;
    const over = steps.length > MAX;
    const show = over ? steps.slice(0, MAX) : steps;
    show.forEach((state, idx) => {
      const li = document.createElement('li');
      li.textContent = `[${idx + 1}]  ${state.join(', ')}`;
      stepsList.appendChild(li);
    });
    if (over) {
      const li = document.createElement('li');
      li.textContent = `… and ${steps.length - MAX} more steps omitted for brevity.`;
      stepsList.appendChild(li);
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
      const nums = parseNumbers(input.value);
      const { sorted } = bubbleSort(nums, { descending: false });
      result.textContent = sorted.join(', ');
      stepsList.innerHTML = '';
    } catch (err) {
      result.textContent = err.message;
      stepsList.innerHTML = '';
    }
  });

  sortDescBtn.addEventListener('click', () => {
    try {
      const nums = parseNumbers(input.value);
      const { sorted } = bubbleSort(nums, { descending: true });
      result.textContent = sorted.join(', ');
      stepsList.innerHTML = '';
    } catch (err) {
      result.textContent = err.message;
      stepsList.innerHTML = '';
    }
  });

  stepBtn.addEventListener('click', () => {
    try {
      const nums = parseNumbers(input.value);
      const { sorted, steps } = bubbleSort(nums, { trace: true });
      result.textContent = sorted.join(', ');
      renderSteps(steps);
    } catch (err) {
      result.textContent = err.message;
      stepsList.innerHTML = '';
    }
  });

  resetBtn.addEventListener('click', () => {
    result.textContent = '—';
    stepsList.innerHTML = '';
  });
})();