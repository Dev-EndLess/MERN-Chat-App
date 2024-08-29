// import { useEffect, useRef } from "react"
import Message from "./Message"

const Messages = () => {
  return (
		<div className='px-4 flex-1 h-96 overflow-y-auto'>
			<Message />
			<Message />
			<Message />
		</div>
  )
}

export default Messages
