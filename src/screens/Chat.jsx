import React from 'react'
import '../styles/Chat.css'
import roadmap from '../assets/images/roadmap.svg'
import img from '../assets/images/imgh.png'
import att from '../assets/icons/attachment.svg'
import send from '../assets/icons/send.svg'
import img2 from '../assets/images/img2.png'

function Message ({
  avatar,
  text,
  date,
  isMy
}) {
  return (
    <div className="chat__message">
      <img src={avatar} alt="avatar" className="chat__message__avatar"/>
      <div className={`chat__text__container ${isMy ? 'mine' : ''}`}>
        <div className="chat__message__text">{text}</div>
        <div className="chat__message__date">{date}</div>
      </div>
    </div>
  )
}

function ChatPart () {
  const [text, setText] = React.useState('')
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: 'Чьи строители варят плов на лестнице между 5 и 6 ?',
      date: '12:00',
      isMy: false,
      avatar: img
    },
    {
      id: 2,
      text: 'А что такого? Кому это мешает?',
      date: '12:01',
      isMy: false,
      avatar: img
    },
    {
      id: 3,
      text: 'Мне! Я на диете',
      date: '12:02',
      isMy: true,
      avatar: img
    }
  ])

  const sendMessage = (e) => {
    if (e.key === 'Enter') {
      if (!text) return
      setMessages([...messages, {
        id: messages.length + 1,
        text,
        date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        isMy: true,
        avatar: img2
      }])
      setText('')
      // scroll after 0.5s
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
      }, 100)
    }
  }
  return (
    <div style={{
      backgroundColor: 'white',
      height: '780px',
      borderRadius: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="chat__header">
        <div className="chat__header__title">Чат</div>
      </div>
      <div className="chat__messages">
        <div className="chat__weekday">Сегодня</div>
        {messages.map((message) => (
          <Message
            key={message.id}
            {...message}
          />
        ))}
      </div>
      <div className="chat__input">
        <div className="chat__input__container">
          <img src={att} alt="attachment" className="att__icon" />
          <input type="text" className="chat__input__text"
          placeholder="Напишите сообщение..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={sendMessage}
        />
        </div>
        <div className="chat__input__send"
          onClick={() => {
            if (!text) return
            setMessages([...messages, {
              id: messages.length + 1,
              text,
              date: `${new Date().getHours()}:${new Date().getMinutes()}`,
              isMy: true
            }])
            setText('')
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight)
            }, 100)
          }}
        >
          <img src={send} alt="send" />
        </div>
      </div>
    </div>
  )
}

export default function Chat () {
  const [histOpened, setHistOpened] = React.useState(true)
  return (
    <div>
      <div className='chat__container__main'>
        {
          histOpened && (
            <div className='chat__container__overall'>
              <div className='chat__container__header'>
                Консоль, Ограничитель консоли, Опора двусторонняя СТ-062, Стойка вертикальная опорная (балка), лот 147.
              </div>
              <div className='chat__container__card'>
                <div className='chat__container__card__top'>
                  <div className='chat__container__card__first'>
                    Входящий договор №111 от 22.04.23
                  </div>
                  <div className='chat__container__card__second'>
                    46 867, 78 <div className='chat__container__card__first'>₽</div>
                  </div>
                </div>
                <div className='chat__container__card__btm'>
                купли-продажи
                </div>
              </div>
              <img className='chat__container__roadmap' src={roadmap} />
              <div className='chat__container__btn' onClick={() => setHistOpened(false)}>
              Скрыть историю
              </div>
            </div>
          )
        }
        <div>
        {
          !histOpened && (
            <div onClick={() => setHistOpened(true)} className='chat__container__btn' id='big'>
              Показать историю
            </div>
          )
        }
        <ChatPart/>
        </div>
      </div>
    </div>
  )
}
