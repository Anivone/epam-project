import './SectionBreak.css';

const SectionBreak = ({ text }: { text: string }) => {

    return (
        <div className='section-break'>
            <span className='section-text'>{text}</span>
        </div>
    );

}

export default SectionBreak;