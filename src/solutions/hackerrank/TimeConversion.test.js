const timeConversion = s => {
  let hh = s.substr(0, 2);
  const mm = s.substr(3, 2);
  const ss = s.substr(6, 2);
  const isPM = s.substr(8, 2) === 'PM';
  if (isPM && hh < 12) {
    hh = parseInt(hh, 10) + 12;
  }
  if (!isPM && hh === '12') {
    hh = '00';
  }
  return `${hh}:${mm}:${ss}`;
};

test('solution', () => {
  expect(timeConversion('07:05:45PM')).toBe('19:05:45');
  expect(timeConversion('12:45:54PM')).toBe('12:45:54');
  expect(timeConversion('12:40:22AM')).toBe('00:40:22');
  expect(timeConversion('12:00:00AM')).toBe('00:00:00');
});
