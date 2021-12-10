import './Main.css';
import Section from "./section/Section";
import Intro from "./intro/Intro";
import MainStyles from "./mainStyles/MainStyles";
import Coaches from "./coaches/Coaches";
import { Route, Routes } from 'react-router-dom';
import Groups from "./groups/Groups";

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/groups' element={
                    <div className="main-container">
                        <Groups/>
                    </div>
                }/>
                <Route path='/' element={
                    <div className='landing'>
                        <Section variant={"first"} sectionText={'Why you should join us ?'}>
                            <Intro/>
                        </Section>
                        <Section variant={"second"} sectionText={'Main styles'}>
                            <MainStyles/>
                        </Section>
                        <Section sectionText={'Top coaches'} variant={'first'}>
                            <Coaches/>
                        </Section>
                    </div>
                }/>
            </Routes>
        </main>
    )

}

export default Main;