import styled, { css } from "styled-components";


const Scheduler = () => {
    return ( <>
        <Wrapper>
            <Header>
               <TextWrap>
                <h2>CalmDownMan Official Schedule</h2>
               </TextWrap>
            </Header>

            <Container>
                {/* <Content></Content> */}
            </Container>
{/* 
            <Footer>

            </Footer> */}
        </Wrapper>
    </>
    );
};

export default Scheduler;

const Wrapper = styled.div`
    width: 100%;
    background-color : #c60067;
`;

const Header = styled.div`
    width: 100%;
    height: 150px;
    display:flex;
    justify-content: center;
`

const TextWrap = styled.div`
    text-align: center;
    font-family: "Dokdo";
    color : white;
    font-size: 50px;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
`

// const Footer = styled.div`
//     width: 100%;
// 