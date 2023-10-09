import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "login":
        return css`
          background: linear-gradient(to left, #5CE1E6 0%, #8C52FF 100%);
          color: #fff;
          font-family: ImportedSimple;
          text-align:center;
          justify-content:center;
          border: none;
        `;
        case "register":
        return css`
          background: linear-gradient(to left, #5CE1E6 0%, #8C52FF 40%);
          color: #fff;
          font-family: ImportedSimple;
          text-align:center;
          justify-content:center;
          border: none;
        `;
        case "share":
          return css`
            background: linear-gradient(to left, #5CE1E6 0%, #8C52FF 40%);
            color: #fff;
            font-family: ImportedSimple;
            text-align:center;
            justify-content:center;
            border: none;
            margin-bottom:5%;
          `;
          case "cancel":
            return css`
              background: linear-gradient(to right, #5CE1E6 0%, #8C52FF 96%);
              color: #fff;
              font-family: ImportedSimple;
              text-align:center;
              justify-content:center;
              border: none;
            `;
        case "editUser":
          return css`
            background: linear-gradient(to left, #5CE1E6 0%, #8C52FF 60%);
            color: #fff;
            font-family: ImportedSimple;
            text-align:center;
            border-radius:5px;
            padding:4px;
            justify-content:center;
            border: none;
          `;
        case "buttonSimple":
          return css`
            background: #2b2b2b;
            color: #fff;
            font-weight:800;
            font-family: ImportedSimple;
            text-align:center;
            justify-content:center;
            border: none;
          `;
      default:
        return css`
          background-color: #bebebe;
        `;
    }
  }}
  width: ${(props) => props.sizeWidth || "200px"};
  height: ${(props) => props.sizeHeight || "30px"};
  font-size: ${(props) => props.sizeFont || "12px"};
  font-weight: ${(props) => props.weightFont || "400"};
  border-radius: 1;
  cursor: pointer;
  :hover {
    opacity: 0.1;
  }
`;