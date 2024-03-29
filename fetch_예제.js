const ul = document.querySelector('#feed');
  const button = document.querySelector('#button');

  //fechData 알아보기
const fetchData = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const json = await response.json();

    return json.slice(0, 20);//0에서 20까지
  } catch (error) {
    console.log(error);
  }
}

const setData = async () => {
  const data = await fetchData();
  // ``을 쓰는 이유 자바스크립트와 문자열을 같이 사용해야 할 경우에 사용 ${} >> 자바스크립트를 사용하겠다는 선서
  // ex) `국가:(문자열) ${country.name.common}(스크립트문)` 
  //item : 변수명에 해당되는 부분
  // item이라는 변수명의 데이터에서 name값을 가져오고 name값의 object에서 common의 결가값을 가져온다.
  //forEach, map, slice
  data.forEach(country => {
    const li = document.createElement('li');
    li.innerText = `국가: ${country.name.common} ${country.flag}`;
    ul.append(li);
    console.log(country);
    console.dir(li);//console의 요소를 객체로 보여주는 콘솔
  });
}

button.addEventListener('click', setData);