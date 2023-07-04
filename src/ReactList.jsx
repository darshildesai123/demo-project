import React from "react";
import { styled } from "styled-components";

function ReactList() {
  return (
    <>
      <MainDiv bgColor="orange" borderColor="green">
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
      </MainDiv>

      <MainDiv bgColor="green" borderColor="orange">
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
      </MainDiv>

      <MainDiv bgColor="red" borderColor="yellow">
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
      </MainDiv>

      <MainDiv bgColor="yellow" borderColor="red">
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
        <p>Losfbjhsgfieufhrehegfweufhurghureygiehiuhgeshgiuerhgl;shgldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhygldgksguisehfsgwegfkuwerwefbhgfduyfgaefbhy</p>
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div `
    padding:50px;
    border:5px solid ${(props)=> props.borderColor};
    background-color: ${(props)=> props.bgColor};
    margin-bottom:10px;
`;

export default ReactList;
