import thanks from '../assets/icon-thank-you.svg'
import React from 'react'

function Page5 () {
	return (
		<>
			<div className='thank-you'>
				<img src={thanks} alt='thank you'/>
				<h1>Thank you</h1>
				<p>Thanks for confirming your subscription! We hope you have
				fun using our platform. If you ever need support, please feel
				free to email us at support@loremgaming.com.</p>
			</div>
		</>
	)
}

export default Page5
