// 로또 번호 추첨 로직
function drawLottoNumbers() {
  // 1에서 45까지의 번호 생성
  let numbers = Array.from({ length: 45 }, (_, i) => i + 1);

  // 번호를 랜덤하게 섞기
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // 앞에서부터 6개의 번호 추출
  let lottoResult = numbers.slice(0, 6);

  return lottoResult;
}

// 번호 추첨 버튼 클릭 이벤트
document.getElementById('drawButton').addEventListener('click', function() {
  // 번호 추첨하기
  let result = drawLottoNumbers();

  // 결과 보여주기
  let lottoNumbersElement = document.getElementById('lottoNumbers');
  lottoNumbersElement.innerHTML = ''; // 기존 결과 초기화

  result.forEach(number => {
    let li = document.createElement('li');
    li.textContent = number;
    lottoNumbersElement.appendChild(li);
  });

  // SweetAlert2로 알림창 띄우기
  Swal.fire({
    icon: 'success',
    title: '로또 번호 추첨 완료!',
    html: '<p class="font-semibold">추첨된 번호:</p><ul>' + lottoNumbersElement.innerHTML + '</ul>',
    confirmButtonText: '확인'
  });

  // 결과 부분 보이기
  document.getElementById('result').classList.remove('hidden');
});
