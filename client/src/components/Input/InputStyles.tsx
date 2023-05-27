import styled from "styled-components";

const InputStyles = styled.div`
  padding-bottom: 1em;
  label {
    font-size: 20px;
  }

  input[type="text"],
  input[type="date"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;
export default InputStyles;
