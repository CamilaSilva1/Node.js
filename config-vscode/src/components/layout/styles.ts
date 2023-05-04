import styled from 'styled-components'


type Props = {
    background: string;
}

export const Container = styled.div`
    display: flex;
    width: 1100px;
    height: 540px;
    background: #34283c;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.6);
`
export const Circles = styled.div`
    background: ${({ background }: Props): string => background};
    border-radius: 40px;
    width: 12px;
    height: 12px;
    cursor: pointer;
`

export const SideBar = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    left: 100px;
    margin-top: 30px;
    gap: 10px;
    cursor: pointer;
`

export const SideBarBottom = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 70px;
    gap: 15px;
`

export const Footer = styled.span`
    position: fixed;
    bottom: 40px;
`

export const BorderLeftSideBar = styled.div`
    position: absolute;
    left: 87px;
    top: 70px;
    height: 40px;
    border-left: 2px solid pink;
`