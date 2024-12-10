import styles from '../styles/NewHomePage.module.css'

import OutgoingBubble from '../components/HomePage/OutgoingBubble'
import IncomingBubble from '../components/HomePage/IncomingBubble'
import LoadingBubble from '../components/HomePage/LoadingBubble'
import NewEnterButton from '../components/HomePage/NewEnterButton'
import HomePageChatHeader from '../components/HomePage/HomePageChatHeader' 
import { useEffect, useState, useRef } from 'react'; 

export default function HomePageRestart() {
    const chats = [
        <LoadingBubble key="loading1" duration={1000} />,
        <IncomingBubble text={"Hi!"} key="chat1" />,
        <LoadingBubble key="loading2" duration={1000} />,
        <IncomingBubble text={"..."} key="chat2" />,
        <OutgoingBubble text={"Um.. Who is this?"} key="chat3" />,
        <LoadingBubble key="loading3" duration={1000} />,
        <IncomingBubble text={"Welcome to the history of the written chat!"} key="chat4" />,
        <LoadingBubble key="loading4" duration={1000} />,
        <IncomingBubble text={"^^ A digital exhibition of our evolved mode of chatting via writing and those impacts..."} key="chat5" />,
        <OutgoingBubble text={"chat as in like.. these texts?"} key="chat6" />,
        <LoadingBubble key="loading1" duration={1000} />,
        <IncomingBubble text={"Exactly! Chat - a back and forth conversation."} key="chat7" />,
        <OutgoingBubble text={"gotcha"} key="chat8" />,
        <LoadingBubble key="loading6" duration={1000} />,
        <IncomingBubble text={"Writing as chatting changes the way we ... well... chat! "} key="chat9" />,
        <LoadingBubble key="loading7" duration={1000} />,
        <IncomingBubble text={"What sometimes gets lost in translation? How have we managed to come up with ways to make personality in text?"} key="chat10" />,
        <LoadingBubble key="loading8" duration={1000} />,
        <IncomingBubble text={"And take a dive into the peculiars of “chat personalities”..."} key="chat11" />,
        <LoadingBubble key="loading9" duration={1000} />,
        <OutgoingBubble text={"interesting!"} key="chat12" />,
        <IncomingBubble text={"Lets get to it.. 👉"} key="chat13" />,  
        <NewEnterButton key='enterButton'/>      
    ];

    const [shownComponents, setShownComponents] = useState(0); // Start with no chats shown
    const messageDivRef = useRef(null);

    useEffect(() => {
        // Cumulative time intervals for each chat
        const durations = [0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 2000];
        let cumulativeTime = 0;

        // Set timeouts for each chat to appear
        const timeouts = durations.map((duration, index) => {
            cumulativeTime += duration; // Increment cumulative time
            return setTimeout(() => {
                setShownComponents((prev) => prev + 1); // Show the next chat
            }, cumulativeTime);
        });

        // Clear timeouts if component unmounts
        return () => timeouts.forEach(clearTimeout);
    }, []); // Run once on component mount

    useEffect(() => {
        // Scroll to the bottom whenever shownComponents changes
        if (messageDivRef.current) {
            messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight;
        }
    }, [shownComponents]);

    // const isEnterButtonVisible = shownComponents === chats.length;

    return (
        <div className={styles.HomePageDiv}>
            <HomePageChatHeader />
            <div className={styles.MessageDiv} ref={messageDivRef}>
                {chats.slice(0, shownComponents).map((chat) => chat)}
            </div> 
        </div>
    );
}