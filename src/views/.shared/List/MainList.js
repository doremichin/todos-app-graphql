import styled from 'styled-components'

const MainList = ({data, renderItem}) => {
    return(
        <Container>
            <Row>
                {
                    data.map((item,index) => (
                        <Col key={index}>
                            {renderItem(item)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
};

const Container = styled.div`
  max-width: 1000px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainList;
