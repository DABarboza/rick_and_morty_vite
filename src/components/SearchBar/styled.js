import s from "styled-components";

const Container = s.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
`;
const Button = s.button`
    background-color: rgba(255, 255, 97);
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 97, 0.5);
    }

`;
const ContainerButtonInput = s.div`
    background-color: rgba(128, 128, 128, 0.5);
    padding: 15px 10px 15px 10px;
    display: flex;
    flex-wrap: wrap;
    input{
        width: 250px;
        margin-right: 50px;
        border-radius: 5px;
        font-size: 15px;
    }`;

export { Container, Button, ContainerButtonInput };
