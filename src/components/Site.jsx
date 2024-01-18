import React from 'react'

import {siteText} from '../constants/index'

const Site = () => {
  return (
		<section id="site">
		<div className="site__inner">
			<h2 className="site__title">Site coding <em>나의 작업물</em></h2>
			<div className="site__wrap">
				{siteText.map((site, key) => (
					<article className={`site__item s${key+1}`} key={key}>
					<span className="num">{key+1}.</span>
					<div className="text">
						<div>{site.text[0]}</div>
						<div>{site.text[1]}</div>
						<div>{site.text[2]}</div>
					</div>
					<h3 className="title">{site.title}</h3>
					<div className="btn">
						<a href="https://github.com/webstoryboy/port2023-vite">{site.code}</a>
						<a href="https://port2023-vite.netlify.app/">{site.view}</a>
					</div>
					<div className="info">
						<span>{site.info[0]}</span>
						<span>{site.info[1]}</span>
						<span>{site.info[2]}</span>
					</div>
				</article>
				))}
		

			</div>
		</div>
	</section>
  )
}

export default Site