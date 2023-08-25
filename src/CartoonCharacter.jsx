import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Card } from 'react-bootstrap'
import { styled } from "styled-components";
import { getAllCharacters } from "./Redux/actions/cartoonAction";
import Paginator from "./components/Pagination";

function CartoonCharacter() {
  const dispatch = useDispatch();
  const cartoonData = useSelector((state) => state.cartoon);

  console.log("cartoonData :>> ", cartoonData.query);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);
  return (
    <>
      <h1 style={{ color: "#fff" }}>Rick and Morty API implementation</h1>
        <CardWrapper>
      {cartoonData.characters.map((cartoon) => (
          <Card>
            <img src={cartoon.image} />
            <CharacterInfo>
              <Name>{cartoon.name}</Name>
              <Category>{cartoon.species}</Category>
              <Location>Last Known Location:</Location>
              <LocationName>{cartoon.location.name}</LocationName>
              <FirstSeen>First Seen in:</FirstSeen>
              <SeasonName>Anatomy Park</SeasonName>
            </CharacterInfo>
          </Card>
      ))}
        </CardWrapper>
        <div className="d-flex justify-content-center mt-4">
            <Paginator totalPage={cartoonData.query.pages} />
        </div>
    </>
  );
}

export default CartoonCharacter;

const CardWrapper = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 992px){
    grid-template-columns: 1fr;

    }
`


const Card = styled.div`
  display: flex;
  ${'' /* width: 40%; */}
  background-color: rgb(60, 62, 68);
  ${'' /* margin: auto; */}
  overflow: hidden;
  ::selection {
    color: orange;
  }

  img {
    height: 100%;
    width: 300px
  }
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px;
`;
const Name = styled.h1`
  color: white;
  font-weight: 900;
`;

const Category = styled.h4`
  color: white;
`;
const Location = styled.h6`
  color: rgb(171, 179, 171);
`;
const LocationName = styled.h4`
  color: white;
`;
const FirstSeen = styled.h6`
  color: rgb(171, 179, 171);
`;
const SeasonName = styled.h4`
  color: white;
`;
