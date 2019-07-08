function solution(record) {
  const userMap = new Map();
  const answer = [];

  record.forEach(r => {
    const [action, uid, nickname] = r.split(' ');
    if (action !== 'Leave') {
      userMap.set(uid, nickname);
    }
  });

  record.forEach(r => {
    const [action, uid] = r.split(' ');
    switch (action) {
      case 'Enter': {
        answer.push(`${userMap.get(uid)}님이 들어왔습니다.`);
        break;
      }
      case 'Leave': {
        answer.push(`${userMap.get(uid)}님이 나갔습니다.`);
        break;
      }
    }
  });

  return answer;
}

test('solution', () => {
  expect(
    solution([
      'Enter uid1234 Muzi',
      'Enter uid4567 Prodo',
      'Leave uid1234',
      'Enter uid1234 Prodo',
      'Change uid4567 Ryan',
    ]),
  ).toStrictEqual([
    'Prodo님이 들어왔습니다.',
    'Ryan님이 들어왔습니다.',
    'Prodo님이 나갔습니다.',
    'Prodo님이 들어왔습니다.',
  ]);
});
