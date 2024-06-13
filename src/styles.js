import styled from 'styled-components';

export const Container = styled.div`
    widht: 100%;
    height: 100vh;
    background-color: #f3eeee;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: rgb(211, 211, 211);
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 15px;
    width: 30%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`