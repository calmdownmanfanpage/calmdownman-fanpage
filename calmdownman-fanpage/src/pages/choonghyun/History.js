
// import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Swip from './Swip';
import "./fonts/Font.css";

// const rootNode = document.getElementById('root');
// ReactDOM.createRoot(rootNode).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
const History = () => {
    return (
      <>
      <font/>
      <Title>침착맨의 작품들</Title>
      <Swip/>
        
        
        
      </>
    );
  };

  const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
  font-family: 'iceJaram-Rg';
`;
 


  export default History;