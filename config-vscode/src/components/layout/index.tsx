import { Backpack, Bug, Files, GitFork, Microscope, Monitor, Search, Settings, User } from "lucide-react"
import { BorderLeftSideBar, Circles, Container, Footer, SideBar, SideBarBottom } from "./styles"

const Layout = (): JSX.Element => {
    return (
       <>
            <Container>
                <Circles background="red"/>
                <Circles background="yellow" />
                <Circles background="green" />

                <BorderLeftSideBar />
                    
                <SideBar>
                    <Files color="#d2d2d2"/>
                    <Search color="#d2d2d2"/>
                    <Backpack color="#d2d2d2"/>
                    <Bug color="#d2d2d2"/>
                    <GitFork color="#d2d2d2"/>
                    <Monitor color="#d2d2d2"/>
                    <Microscope color="#d2d2d2"/>

                    <SideBarBottom>
                        <User color="#d2d2d2"/>
                        <Settings color="#d2d2d2"/>
                    </SideBarBottom>

                </SideBar>

                <Footer>
                    <span>main</span>
                </Footer>
            </Container>
       </>
    )
}

export default Layout