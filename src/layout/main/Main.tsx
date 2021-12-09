import './Main.css';
import Section from "./section/Section";
import Intro from "./intro/Intro";
import MainStyles from "./mainStyles/MainStyles";
import Coaches from "./coaches/Coaches";

const Main = () => {

    return (
        <main>
            <Section variant={"first"} sectionText={'Why you should join us ?'}>
                <Intro/>
            </Section>
            <Section variant={"second"} sectionText={'Main styles'}>
                <MainStyles/>
            </Section>
            <Section sectionText={'Top coaches'} variant={'first'}>
                <Coaches/>
            </Section>
        </main>
    )

}

export default Main;