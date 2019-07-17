function solution(n, t, m, timetable) {
  const queue = timetable
    .map(time => {
      const [hour, minutes] = time.split(':');
      return {
        time,
        value: hour * 60 + minutes * 1,
      };
    })
    .sort((a, b) => a.value - b.value);

  let currentTime = '09:00'; // 매 이터레이션의 버스 도착시간
  let remain = 0; // 매 이터레이션의 남은 좌석
  const availableTimes = []; // 매 이터레이션의 최소 탑승 가능 시간
  let landingValues = [];

  for (let i = 0; i < n; i++) {
    const isLastIteration = i === n - 1;
    let [currentHour, currentMinutes] = currentTime.split(':');
    const currentValue = currentHour * 60 + currentMinutes * 1;
    remain = m;

    for (const [index, item] of Array.from(queue).entries()) {
      const { value } = item;
      if (remain > 0 && value <= currentValue) {
        landingValues.push(value);
        queue.shift();
        remain--;
      }
    }

    if (remain > 0) {
      const max =
        landingValues.length > 0 ? Math.max(...landingValues) : currentValue;
      availableTimes.unshift(max < 540 ? 540 : max);
    } else {
      let max = Math.max(...landingValues);
      if (isLastIteration) {
        max--;
      }
      availableTimes.unshift(max);
    }

    // console.log(
    //   '[currentTime]',
    //   currentTime,
    //   '[remain]',
    //   remain,
    //   '[landingValues]',
    //   landingValues,
    //   landingValues.map(m => `${Math.floor(m / 60)}:${m % 60}`),
    //   '[availableTimes]',
    //   availableTimes,
    //   availableTimes.map(m => `${Math.floor(m / 60)}:${m % 60}`),
    // );

    landingValues = [];

    // 다음시간 셋팅
    currentMinutes = currentMinutes * 1 + t;
    if (currentMinutes >= 60) {
      currentMinutes = currentMinutes - 60;
      currentHour = currentHour * 1 + 1;
    }
    currentTime = `${
      currentHour.toString().length > 1 ? currentHour : `0${currentHour}`
    }:${
      currentMinutes.toString().length > 1
        ? currentMinutes
        : `0${currentMinutes}`
    }`;
  }

  const hh = Math.floor(availableTimes[0] / 60).toString();
  const mm = (availableTimes[0] % 60).toString();

  return `${hh.length > 1 ? hh : `0${hh}`}:${mm.length > 1 ? mm : `0${mm}`}`;
}

test('solution', () => {
  expect(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03'])).toBe('09:00');
  expect(solution(2, 10, 2, ['09:10', '09:09', '08:00'])).toBe('09:09');
  expect(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00'])).toBe('08:59');
  expect(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01'])).toBe(
    '00:00',
  );
  expect(solution(1, 1, 1, ['23:59'])).toBe('09:00');
  expect(
    solution(10, 60, 45, [
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
      '23:59',
    ]),
  ).toBe('18:00');
});
