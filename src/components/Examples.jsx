import TabButton from "./TabButton";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data-with-examples";
import { useState } from 'react';


export default function Examples() { 
    const [selectedTopic, setSelecedTopic] = useState();

    function handleSelect(selectedButton){
        setSelecedTopic(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>Select a topic to see an example</p>;
        if(selectedTopic) {
        tabContent = (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            </div>
        );
    }
    return(
        <Section title='Examples' id='examples'>
            <menu>
                <TabButton 
                    isActive={selectedTopic === 'components'} 
                    onClick={() => handleSelect('components')}
                >Components</TabButton>
                <TabButton 
                    isActive={selectedTopic === 'jsx'} 
                    onClick={() => handleSelect('jsx')}
                >JSX</TabButton>
                <TabButton 
                    isActive={selectedTopic === 'props'} 
                    onClick={() => handleSelect('props')}
                >Props</TabButton>
                <TabButton 
                    isActive={selectedTopic === 'state'} 
                    onClick={() => handleSelect('state')}
                >State</TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}