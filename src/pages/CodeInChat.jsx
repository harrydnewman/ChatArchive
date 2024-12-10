import ChatPersonalityBubble from "../components/ChatPersonalityBubble"


import TextBubble1 from '../assets/images/textbubbles/textbubble1.png'
import TextBubble2 from '../assets/images/textbubbles/textbubble2.png'
import TextBubble3 from '../assets/images/textbubbles/textbubble3.png'
import TextBubble4 from '../assets/images/textbubbles/textbubble4.png'
import TextBubble5 from '../assets/images/textbubbles/textbubble5.png'
import TextBubble6 from '../assets/images/textbubbles/textbubble6.png'
import TextBubble7 from '../assets/images/textbubbles/textbubble7.png'
import TextBubble8 from '../assets/images/textbubbles/textbubble8.png'

import CodeInChatImage1 from '../assets/images/codeinchatimage1.png'
import CodeInChatImage2 from '../assets/images/codeinchatimage2.png'
import CodeInChatImage3 from '../assets/images/codeinchatimage3.png'
import CodeInChatImage4 from '../assets/images/codeinchatimage4.png'
import CodeInChatImage6 from '../assets/images/codeinchatimage6.png'


import styles from '../styles/CodeInChat.module.css'

import ImageLeftTextRight from "../components/ImageLeftTextRight" 
import ImageRightTextLeft from "../components/ImageRightTextLeft"
import Navbar from "../components/NavBar"

import ScrollToTop from "../components/ScollToTop"



export default function CodeInChat() {
    return (
        <div className={styles.codeInChatPageDiv}>
            <Navbar currentPage={"/codeinchat"} />

            <div className={styles.codeInChatPage}>

                <h2 className={styles.title}><i>Encoded Chat...</i></h2>

                <p>In chat communication, there’s a "code" similar to how we use sayings in language. Shorthand tools are used for creating analogies or expressing ideas quickly. These codes, shaped by semantics and context, help define personalities and voices in digital conversations. From punctuation choices to abbreviations, emojis, and even the platform used, each element contributes to tone, inflection, and the unique personality of a chat. Variations, like emoji interpretations across devices or generational shorthand, further diversify how we categorize and interpret these "voices" in text.</p>
                <h3 className={styles.sectionHeader}>What chat personality are you?</h3>

                <ChatPersonalityBubble text={"The Formal One:"} image={TextBubble1} gray={false} />
                <ChatPersonalityBubble text={"The Non-Ironic Emoji-Using Middle-aged Mom:"} image={TextBubble2} gray={true} />
                <ChatPersonalityBubble text={"The Dry Texter:"} image={TextBubble3} gray={false} />
                <ChatPersonalityBubble text={"The Chat Stream Rager:"} image={TextBubble4} gray={true} />
                <ChatPersonalityBubble text={"Gen Z:"} image={TextBubble5} gray={false} />
                <ChatPersonalityBubble text={""} image={TextBubble6} gray={false} />
                <ChatPersonalityBubble text={"Sparkles:"} image={TextBubble7} gray={true} />
                <ChatPersonalityBubble text={"Short & Sweet:"} image={TextBubble8} gray={false} />


                <h3 className={styles.sectionHeader}>Punctuation</h3>
                <div className={styles.imageLeftTextRight}>
                    <img src={CodeInChatImage1}/>
                    <p>All contributes to expression, pauses, voice inflection to mimic conversation.</p>
                </div>

                <h3 className={styles.sectionHeader}>Abbreviations</h3>
                <img src={CodeInChatImage2} />
                <p>Making shorthand chat even shorter. Texting language becomes one of its own.  </p>
                <h3 className={styles.sectionHeader}>Emojis & Hieroglyphs</h3>
                <img src={CodeInChatImage3} />
                <p>These pictographs, old and new, hold double meanings. The Ba Hieroglyph- bird with a human head was non-literal, rather it represented rebirth. </p>

               
                <div className={styles.imageRightTextLeft}>
                <p>The nail painted emoji is less literal for Gen Z and relates to queer content. Changes the meaning of what we say!</p>
                    <img src={CodeInChatImage4}/>
                    
                </div>
                <div className={styles.imageLeftTextRight}>
                    <img src={CodeInChatImage6}/>
                    <p>There is a disconnect in translation in Samsung / Android to iPhone emojis that can also change the meaning / perception of emojis to different phone users.</p>
                </div>
                
            </div>
            <ScrollToTop />
        </div>
    )
}