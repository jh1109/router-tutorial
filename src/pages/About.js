import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  console.log(useSearchParams());
  // 배열 타입의 값을 반환
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // 객체 타입의 값을 반환
  const detail = searchParams.get("detail");
  // get은 useSearchParams에서 쿼리 파라미터를 조회할 수 있는 메서드이다. 값은 문자열 타입으로 반환한다.
  const mode = searchParams.get("mode");
  const id = searchParams.get("id");
  // detail과 mode가 어디서 나온거지...?
  console.log(mode);
  // 처음 값은 null

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true, id });
    // ?mode=값&detail=값&id=값 형식으로 주소가 정의 됨.
  };
  const onIncreaseMode = () => {
    console.log(mode);
    console.log(typeof mode);
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    // parseInt(String, radix) : 문자열을 숫자로 변환해주는 함수
    setSearchParams({ mode: nextMode, detail });
    console.log(mode);
    console.log(nextMode);
    console.log(typeof nextMode);
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
