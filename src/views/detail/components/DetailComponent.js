import styled, {css} from 'styled-components'

const DetailComponent = ({data}) => {
    return(
        <Container>
            <Title>
                {data.title}
            </Title>
            <Description>
                {data.description}
            </Description>
            <Buttons>
                <Button edit>수정</Button>
                <Button delete>삭제</Button>
            </Buttons>
        </Container>
    )
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const Description = styled.div`
  margin-bottom: 30px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;
  padding: 8px 10px;
  color: #fff;
  ${props => props.edit ? css`
    background-color: #18f;
  ` : css`
    background-color: #d92424;
  `}
`;
export default DetailComponent;
