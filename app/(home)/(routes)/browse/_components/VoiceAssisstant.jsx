import "regenerator-runtime"
import speech, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useEffect, useState } from 'react'
import ChatBot from "../_components/ChatBot"
import Message from "./Message";
import Input from "./Input";
import History from "./History";
import Clear from "./Clear";
import { apikey } from "../../../../config"




const VoiceAssisstant = () => {

    const { listening, transcript } = useSpeechRecognition();

    const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ];

      const handleSubmit = async () => {
        const prompt = {
          role: "user",
          content: input,
        };
    
        setMessages([...messages, prompt]);
        setInput(transcript);
    
        await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [...messages, prompt],
          }),
        })
          .then((data) => data.json())
          .then((data) => {
            console.log(data)

            const res = data.choices[0].message.content;
            setMessages((messages) => [
              ...messages,
              {
                role: "assistant",
                content: res,
              },
            ]);
            setHistory((history) => [...history, { question: input, answer: res }]);
            setInput("");
          });
      };
      const clear = () => {
        setMessages([]);
        setHistory([]);
      };
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [activeC, setActiveC] = useState(true);
    return (
        <div className={`fixed right-4 top-0 w-72 px-2 h-full bg-gray-200 overflow-y-auto ${!activeC ? 'hidden' : ''}`}>
        <div onClick={()=>setActiveC(false)}>
          x
        </div>

<div className="py-2 rounded-lg mt-8">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="border border-black">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        {/* <div className="Content">
          {history.map((el, i) => {
            return (
              <History
                key={i}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer },
                  ])
                }
              />
            );
          })}
        </div> */}
        <Clear onClick={clear} />
      </div>
      {transcript && transcript}

    </div>
        <div>
    {/* <ChatBot steps={steps} /> */}
    
    
  </div>
    {
        listening ? (
            <p>goo ahead im listening'</p>
        ) : (
            <p>Click the button and ask</p>
        )
    }
            <button className='bg-blue-400 rounded-lg p-2'
            onClick={()=>{
                speech.startListening();
            }}>Speak</button>

           
    </div>
    
  )
}


export default VoiceAssisstant