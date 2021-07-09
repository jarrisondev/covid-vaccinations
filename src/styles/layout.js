import styled from 'styled-components'

export const LayoutStyled = styled.div`
  background-color: ${(props) => (props.t ? '#494898' : 'white')};
  background-image: radial-gradient(#7674df 1px, transparent 0);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;

  color: ${(props) => (props.t ? 'white' : '#494898')};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    max-width: 1300px;
    min-height: 100vh;

    h1 {
      font-size: 4rem;
      margin: 0;
      text-align: center;

      span {
        color: #c3c1d9;
      }

      @media (max-width: 850px) {
        font-size: 3.8rem;
        text-align: center;
      }
    }

    .date {
      background-color: #05caa7;
      border: 2px solid #008c6f;
      border-radius: 2rem;
      box-shadow: 0rem 0rem 0.7rem black;

      color: white;
      display: flex;
      justify-content: space-between;
      font-size: 1.3rem;
      height: 1.7rem;

      margin-top: 1rem;
      padding: 0.3rem 1rem;
      text-align: center;
      white-space: nowrap;

      width: 8.5rem;

      .iconTheme {
        cursor: pointer;
        margin-left: 0.5rem;
        width: 2.5rem;

        path {
          fill: ${(props) => (!props.t ? '#494898' : 'white')};
        }

        &:hover{
          opacity:0.8
        }
      }
    }
  }
`
