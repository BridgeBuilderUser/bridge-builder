import cn from 'classnames'


export default function ShadowText({ 
	children,
	position = 'top',
	size = '30vh'
 }:any) {
	
	const classes = cn(
		`left-[-8%] font-montserrat-black font-black fixed w-auto h-auto [writing-mode:tb] text-[40vh] bg-gradient-to-r from-transparent from-20% to-indigo-800 bg-clip-text text-transparent break-words whitespace-nowrap`,
		{
			"top-0": position === "top",
			"top-1/2 -translate-y-1/2": position === "center",
		}
	)
 
	return (
		    <div 
			className={`shadow-text ${classes}`}>
				{children}
			</div>
	)
}



