import React, { useState, useEffect } from 'react'
import '../static/styles/components/LazyImg.css'

const LazyImg = (props) => {
	const [done, setDone] = useState(false)
	useEffect(() => {
		const img = new Image();
		// 发出请求，请求图片
		img.src = props.src;
		// 当图片加载完毕
		img.onload = () => {
			setDone(true)
		}
	}, [])

	return (
		<>
			{
				done
					?
					(
						props.background ?
							<div style={props.style && props.style, { backgroundImage: `url(${props.src + (props.params ? props.params : '')})` }} className="item-background">
								{props.children ? props.children : null}
							</div>
							:
							<img style={props.style && props.style} src={props.src + (props.params ? props.params : '')} alt={props.alt} className="item-img" />

					)
					:
					<div className="loader">
						<span className="txt">
							<span>深</span>
							<span>海</span>
							<span>王</span>
							<span>八</span>
						</span>
					</div>
			}
		</>
	)
}

export default LazyImg