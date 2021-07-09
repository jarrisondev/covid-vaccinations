import styled from 'styled-components'

export const AnchorStyled = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  a {
    color: ${(props) => (props.color ? '#05caa7' : 'white')};

    &:hover{
      opacity: 0.7;
    }
  }

  @media (max-width: 500px) {
    font-size: 90%;
  }
`
