import React from 'react'

export default React.createClass({
    render() {
        var slides = this.props.slides.map(slide=>(
                <figure>
                    <img style={{backgroundImage: `url(${slide.url})`}} src="img/blank.png" />
                    <figcaption>{slide.caption}</figcaption>
                </figure>
        ));
        return (
            <div className="row bss-slides num1" tabIndex="1" ref={(el)=>{
                el && makeBSS(el, {auto: {speed: 3000}});
            }}>{slides}
            </div>
        );
    }
});