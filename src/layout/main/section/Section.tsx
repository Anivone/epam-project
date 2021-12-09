import React from "react";
import SectionBreak from "./sectionBreak/SectionBreak";
import './Section.css';
import { sectionColorOne, sectionColorTwo } from "../../../tools/Colors";

interface SectionProps {
    sectionText: string;
    variant: 'first' | 'second';
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
    const sectionColor = props.variant === 'first'
        ? sectionColorOne
        : sectionColorTwo;
    return (
        <div style={{ backgroundColor: sectionColor }} className='section'>
            <SectionBreak text={props.sectionText}/>
            {props.children}
        </div>
    )

}

export default Section;