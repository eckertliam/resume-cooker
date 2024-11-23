import React, { useState } from 'react'
import './SectionDesign.css'

function TextSection({textAreaSetter}: {textAreaSetter: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <textarea name='section-content' id='section-content' placeholder='Section Content' onChange={(e) => textAreaSetter(e.target.value)} />
    )
}

function BulletPoints({bulletList} : {bulletList: string[]}) {
    return (
        <ul>
            {bulletList.map((bullet, index) => (
                <li key={index}>{bullet}</li>
            ))}
        </ul>
    )
}

function BulletSection({bulletListSetter, bulletList}: {bulletListSetter: React.Dispatch<React.SetStateAction<string[]>>, bulletList: string[]}) {
    const [bullet, setBullet] = useState<string>('');

    return (
        <div>
            <input type='text' name='bullet-point' id='bullet-point' placeholder='Bullet point' onChange={(e) => setBullet(e.target.value)} />
            <button type='button' onClick={() => bulletListSetter([...bulletList, bullet])}>Add</button>
        </div>
    )
}

enum SectionType {
    TEXT = 'text',
    BULLET = 'bullet',
    NUMBERED = 'numbered',
    IMAGE = 'image'
}

export default function SectionDesign(): JSX.Element {
    const [sectionType, setSectionType] = useState<SectionType>(SectionType.TEXT);
    const [sectionTitle, setSectionTitle] = useState<string>('');
    const [showTitle, setShowTitle] = useState<boolean>(false);
    const [textArea, setTextArea] = useState<string>('');
    const [bulletList, setBulletList] = useState<string[]>([]);

    return (
        <div className='section-design-container'>
            <form>
                <select name='section-type' id='section-type'>
                    <option value={SectionType.TEXT}>Text</option>
                    <option value={SectionType.BULLET}>Bullet</option>
                    <option value={SectionType.NUMBERED}>Numbered</option>
                    <option value={SectionType.IMAGE}>Image</option>
                </select>

                {/* Section Title and section title visibility */}
                <input type='text' name='section-title' id='section-title' placeholder='Section Title' onChange={(e) => setSectionTitle(e.target.value)} />
                <input type='checkbox' name='show-title' id='show-title' onChange={(e) => setShowTitle(e.target.checked)} />
                
                {sectionType === SectionType.TEXT && <TextSection textAreaSetter={setTextArea} />}
                
                {sectionType === SectionType.BULLET && 
                    <>
                        <BulletSection bulletListSetter={setBulletList} bulletList={bulletList} />
                        <BulletPoints bulletList={bulletList} />
                    </>
                }

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}