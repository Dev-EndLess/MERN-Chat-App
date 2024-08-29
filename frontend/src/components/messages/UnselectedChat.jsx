import { TiMessages } from "react-icons/ti";

const UnselectedChat = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Systane ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center text-emerald-200' />
			</div>
		</div>
	);
}

export default UnselectedChat
