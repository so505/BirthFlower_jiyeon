//1~12월 탄생화 종류와 꽃말 메세지 출력하기 + 객체, 배열 활용
//Q. 당신의 생일은 몇월인가요?
//ex) 12월이라고 작성했다면?
//12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다.


function fn_result(){
  const birthday_flower = [
      {
          month:1,
          flower:'수선화',
          content:'자기애, 자존심, 외로움',
      },{
          month:2,
          flower:'제비꽃',
          content:'겸손, 양보',
      },{
          month:3,
          flower:'수선화',
          content:'자기애, 자존심, 외로움',
      },{
          month:4,
          flower:'스위트피',
          content:'추억, 즐거움'
      },{
          month:5,
          flower:'은방울꽃',
          content:'희망, 섬세함'
      },{
          month:6,
          flower:'백합',
          content:'순결'
      },{
          month:7,
          flower:'미나리아재비',
          content:'아름다움, 인격'
      },{
          month:8,
          flower:'글라디올러스',
          content:'비밀, 상상, 견고함'
      },{
          month:9,
          flower:'물망초',
          content:'진실한 사랑'
      },{
          month:10,
          flower:'금잔화',
          content:'실망, 비애'
      },{
          month:11,
          flower:'국화',
          content:'성실, 진실'
      },{
          month:12,
          flower:'포인세티아',
          content:'축하, 감사'
      }
  ];

  let sd = document.querySelector('.sub');
  sd.style.display = 'block';

  let brthday_month = document.querySelector('#month').value;
  
  for(let result of birthday_flower){
      if(result.month === parseInt(brthday_month)){
          document.querySelector('.name').innerHTML = brthday_month+"월의 탄생화는 "+result.flower+"입니다.";
          document.querySelector('.info').innerHTML = "꽃말은 "+result.content+"입니다";
      }
  }

  //document.querySelector('.bg').style.background = 'red';
}

//다시입력하기
const btn = document.getElementById('resetForm');
btn.addEventListener('click', function() {
  init();
});


//카드저장
const saveCard = document.getElementById('saveCard');
saveCard.addEventListener('click', function() {
  alert('준비중입니다. 처음으로 돌아가기');
  init();
});

function init(){
  document.querySelector('.sub').style.display = 'none';
  document.querySelector('#year').value ="";
  document.querySelector('#month').value ="";
  document.querySelector('#day').value ="";
}
