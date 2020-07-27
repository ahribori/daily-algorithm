/******************************************************************************
 * 부분집합들
 *******************************************************************************/
function subsets(arr) {
  /**
   *
   * @param original 원본 배열
   * @param subset 매 재귀마다 만들어 쌓이는 새로운 배열
   * @param start 매 재귀함수 루프의 시작 인덱스
   */
  function backtrack(original, subset, start) {
    console.log(subset);
    for (let i = start; i < original.length; i++) {
      backtrack(original, [...subset, original[i]], i + 1);
    }
  }
  backtrack(arr, [], 0);
}
// subsets([1, 2, 3]);

/******************************************************************************
 * 중복 아이템이 있는 배열의 부분집합들
 *******************************************************************************/
function subsets_contain_duplicate(arr) {
  /**
   *
   * @param original 중복 아이템을 포함하고있는 원본 배열
   * @param subset 매 재귀마다 만들어 쌓이는 새로운 배열
   * @param start 매 재귀함수 루프의 시작 인덱스
   */
  function backtrack(original, subset, start) {
    console.log(subset);
    for (let i = start; i < original.length; i++) {
      if (i > start && original[i] === original[i - 1]) continue; // skip duplicates
      backtrack(original, [...subset, original[i]], i + 1);
    }
  }
  backtrack(arr, [], 0);
}
// subsets_contain_duplicate([1, 2, 2]);

/******************************************************************************
 * 순열
 *******************************************************************************/
function permute(arr) {
  function backtrack(original, subset) {
    if (original.length === subset.length) {
      console.log(subset);
    } else {
      for (let i = 0; i < original.length; i++) {
        if (subset.indexOf(original[i]) > -1) continue;
        backtrack(original, [...subset, original[i]]);
      }
    }
  }
  backtrack(arr, []);
}
// permute([1, 2, 3]);

/******************************************************************************
 * 중복 아이템이 있는 배열의 순열
 *******************************************************************************/
function permute_contain_duplicate(arr) {
  function backtrack(original, subset, used) {
    if (original.length === subset.length) {
      console.log(subset);
    } else {
      for (let i = 0; i < original.length; i++) {
        if (
          used[i] ||
          (i > 0 && original[i] === original[i - 1] && !used[i - 1])
        ) {
          continue;
        }
        used[i] = true;
        backtrack(original, [...subset, original[i]], used);
        used[i] = false;
      }
    }
  }
  backtrack(arr, [], []);
}
// permute_contain_duplicate([1, 2, 2]);

/******************************************************************************
 * 조합
 *******************************************************************************/
function combination(arr) {
  function backtrack(original, subset, start) {
    if (subset.length === original.length) {
      console.log(subset);
      return;
    }
    for (let i = start; i < original.length; i++) {
      backtrack(original, [...subset, original[i]], i);
    }
  }
  backtrack(arr, [], 0);
}

combination([3, 5, 7], 8);
