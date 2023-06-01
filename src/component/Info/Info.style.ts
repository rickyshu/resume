import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 1rem;
  //Info color를 변경해야 하나? 고민해보기!
  background: linear-gradient(#5d475e, #877678);
  color: black;
`;

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 10px;
  border: 1px solid black;
`;

export const Profile = styled.div`
  border: 1px solid black;
`;

export const PersonalImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.8;
`;
export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: #e41c6f;
  color: #fff;
  border-bottom: 0.3rem solid #fff;
  text-shadow: 0.2rem 0.2rem 1rem #555;
  transform: skew(10deg);
`;
export const PersonalName = styled.h3`
  /* font-size: 0rem; */
  color: #fff;
  background-color: #e41c6f;
  margin: 0.5rem 0;
  text-align: center;
  padding: 0.2rem 0;
  letter-spacing: 2px;
  transform: skew(10deg);
`;

export const ContactInfo = styled.div`
  border: 1px solid blue;
  padding: 1rem 1rem;
`;

export const Icon = styled.div``;
