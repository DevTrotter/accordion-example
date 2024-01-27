import styled from 'styled-components'

const StyledAccordion = styled.section`
    @keyframes openAccordion {
        0%{
            height: 80px;
        }
        100%{
            height: auto;
        }
    }
    @keyframes closeAccordion {
        0%{
            height: auto;
        }
        100%{
            height: 80px;
        }
    }
    @keyframes iconRotate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(180deg);
        }
    }
    @keyframes iconRotateClose {
        0%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }

    position: relative;
    background-color: #8258FA;
    border-radius: 24px;
    height: ${props => props.isOpen ? 'auto' : '80px'};
    animation: ${props => props.isOpen ? 'openAccordion 0.1s ease-in-out forwards' : 'closeAccordion 0.5s ease-in-out forwards'};
    overflow: hidden;
    margin: 24px auto;
    .question-container {
        width: 90%;
        display: flex;
        align-items: center;
        height: 80px;
        padding: 0 20px;
        justify-content: space-between;
        cursor: pointer;
        h3{
            color: #fff;
            margin: 0 0 0 0;
        }
        svg{
            font-size: 24px;
            color: #fff;
            animation: ${props => props.isOpen ? 'iconRotate 0.5s ease-in-out forwards' : 'iconRotateClose 0.5s ease-in-out forwards'};
        }
    }
    p{
        background-color: #fff;
        color: #000;
        margin: 0 0 0 0;
        min-height: 80px;
        overflow: auto;
    }
`

export default StyledAccordion