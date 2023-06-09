import styled from "styled-components";

import { RiFilePpt2Fill } from "react-icons/ri";

import { COLOR } from "../../constants";

const { TITLE_COLOR } = COLOR;

export const Container = styled.article`
  padding: 3rem 1rem;
  background: ${(props) => props.theme.themeStyle.AboutBGColor};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1140px;
  gap: 10px;
`;

export const Profile = styled.div``;

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
`;
export const PersonalName = styled.h3`
  color: #fff;
  background-color: #e41c6f;
  margin: 0.5rem 0;
  text-align: center;
  padding: 0.2rem 0;
  letter-spacing: 2px;
`;

export const ContactInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`;
export const RightHeading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${TITLE_COLOR};
  text-align: center;
  text-transform: uppercase;
`;
export const RightUserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 3rem;
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
  }
`;
export const ConvertToPdf = styled.button`
  /* border: 1px solid red; */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.7rem;
  background-color: red;
  &:hover {
    background-color: #a00;
  }
`;

export const PdfIcon = styled(RiFilePpt2Fill)`
  font-size: 1.2rem;
`;
