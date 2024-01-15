import React, { useState } from 'react'

const headerNav = [
	{
		title:"intro", 
		url:"#intro"
	},
	{
		title:"skill", 
		url:"#skill"
	},
	{
		title:"site", 
		url:"#site"
	},
	{
		title:"portfolio", 
		url:"#port"
	},
	{
		title:"contact", 
		url:"#contact"
	},
]

const Header = () => {

	// 토글 메뉴를 위해 변수 선언
	const [show, setShow] =useState(false);

	const toggleMenu = () => {
		setShow((prevShow) => !prevShow)
	}

	return (
		<header id="header" role="banner">
			<div className="header__inner">
				<div className="header__logo">
					<a href="/">portfolio<em>react.js</em></a>
				</div>
				<nav 
					className={`header__nav ${show ? "show" : ""}`} 
					role='navigation' 
					aria-label='메인 메뉴'
					> {/* 이 값이 true면 show 넣어주고 아니면 아무것도 넣지 마라*/}
					<ul>
						{/* key 는 index를 의미함 */}
						{headerNav.map((nav, key) => (
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<div 
					className="header__nav__mobile" 
					id="headerToggle" 
					aria-controls="primary-menu" 
					aria-expanded={show ? "true" : "false"} 
					role="button" 
					tabIndex="0"
					onClick={toggleMenu}
				>
					<span></span>
				</div>
			</div>
		</header>
	)
}

export default Header