import React from 'react'
import SlideShow from './Slideshow'
import {YouTubeVideo} from './YouTubeVideo'
export default React.createClass({
    root: null,
    render() {
        var tips = <section ref={(el)=>{ this.root=el;}} className="tips">
            <h4>Tips</h4>
            <div className="flipper">
                <div className="card up"><p>
                    Stay in budget with your hangers. You can make them No-Slip by using craft pipe
                    cleaners around the top. Your blouses and dresses will no longer slip.
                </p></div>
                <div className="card back"><p>
                    Be proactive by having a TO DO List every day. That will help you to stay focused on
                    your tasks.
                </p></div>
                <div className="card forward"><p>
                    Take 20 minutes before you go to bed and walk around the house and put somethings
                    away. This will help you stay ahead for the next day.
                </p></div>
                <div className="card forward">
                    <p>Have paper towel and cleaning product under your bathroom sink.
                        Making a habit of wiping down the counter and cleaning the mirror will help you
                        feel like you got cleaning under control!</p>
                </div>
                <div className="card forward">
                    <p> Find a dollar store close to you. Dollar stores help you stay in the budget and
                        you will be surprised with how much they have to help you stay
                        organized.</p>
                </div>
                <div className="card forward">
                    <p>Block clutter accumulation on flat surfaces by adding something pretty as
                        decoration. No more coffee tables with piles of papers.</p>
                </div>
                <div className="card forward">
                    <p>Be creative and use pegboards to display your jewelry.</p>
                </div>
                <div className="card forward">
                    <p>Have a “favorite toys basket” for your kids. Have it accessible to them so they
                        can put their toys away on their own. It’s all about making a habit!</p>
                </div>
                <div className="card back">
                    <p>Kids can too learn to be organized and help the house stay clutter free. Have a
                        “10 minute clean up” every day before dinner. It’s all about making a habit!</p>
                </div>
            </div>
            <div>
                <button className="prev"><i className="fa fa-1 fa-arrow-left" aria-hidden="true"></i></button>
                <button className="next"><i className="fa fa-1 fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </section>;


        function getScaledImage(imgName) {
            imgName += window.screen.availWidth > 450 ? '-lg' : '-sm';
            return url(`/img/slideshow/${imgName}.jpg`);

        }

        const images = [
            {url: getScaledImage('kidsroom'), caption: ''},
            {url: getScaledImage('hangers'), caption: ''},
            {url: getScaledImage('officedesk'), caption: ''},
            {url: getScaledImage('kitchen'), caption: ''},
            {url: getScaledImage('kitchendrawer'), caption: ''},
            {url: getScaledImage('bookshelf'), caption: ''},
            {url: getScaledImage('kitchen'), caption: ''}
        ];
        return (
            <div className="container home">
                <SlideShow slides={images}/>
                <hr />
                <div className="row secondary-block ">
                    <div className="col-sm-6 col-md-4 ">
                        {tips}
                    </div>
                    <div className="about-me col-sm-6 col-md-4 ">
                        <img className="vertical-separator left" src="img/blank.png"/>
                        I will help you tackle your projects and make you feel proud of every room in your house. <br />
                        You can do it!
                        <img className="vertical-separator right" src="img/blank.png"/>
                    </div>
                    <div className="ju-profile-col col-xs-12 col-md-4">
                        <img src="img/ju-profile.png"/>
                    </div>
                </div>

                <div className="row">
                    <h3>Check out our latest videos</h3>
                    <YouTubeVideo videoId="KH3m8TrBX2U"/>
                    <YouTubeVideo videoId="qha8YmmF6VE"/>
                    <YouTubeVideo videoId="DD-4H3wKYac"/>
                </div>
            </div>
        )
    },

    componentDidMount: function () {

        // TODO: manipulate state instead of  the DOM
        const me = this;
        const NEXT_TIP_INTERVAL = 10000;
        // We always set five card states, minimum number of cards supported
        var states = ['back', 'back', 'up', 'forward', 'forward'];
        var root = me.root;

        /**
         *
         * @param el
         * @param selectedState
         */
        function setState(el, selectedState) {
            states.forEach(state=> {
                el.classList.toggle(state, state == selectedState);
            });
        }

        function flipCard(forward) {
            if (typeof me.nextTipTimeout == 'string') return;

            clearTimeout(me.nextTipTimeout);

            var currentUp = root.querySelector('.card.up');
            var allCards = root.querySelectorAll('.card');
            var indexOfCurrent = [].indexOf.call(allCards, currentUp);
            var indexOfNextUp = forward ? indexOfCurrent + 1 : indexOfCurrent - 1;
            for (var i = 0; i < states.length; i++) {
                setState(allCards[(indexOfNextUp - 2 + i + states.length) % states.length], states[i]);
            }
            scheduleNextTip();
        }


        /* Example of algorithm
         < ^ > > > > > <
         0 1 2 3 4 5 6 7

         Moving forward, look for the up card, here the index of the up card is 1, so the next up card should have index
         of 2; we need to make sure 1,2,3 are set to < ^ >

         < < ^ > > > > >
         0 1 2 3 4 5 6 7

         Moving back, look for the up card, here the index of the up card is 2, so the next up card should have index
         of 1; we need to make sure 0,1,2 are set to < ^ >

         < ^ > > > > > <
         0 1 2 3 4 5 6 7

         */
        function scheduleNextTip() {
            me.nextTipTimeout = setTimeout(flipCard.bind(null, true), NEXT_TIP_INTERVAL);
        }

        function installClickHandler() {
            root.addEventListener('click', function (e) {
                if (findParent(e.target, 'button.prev')) {
                    flipCard(false);
                } else {
                    flipCard(true);
                }
            });

            function findParent(el, selector) {
                if (el.matches(selector)) {
                    return true;
                } else {
                    return el == document.body ? null : findParent(el.parentNode, selector);
                }
            }
        }

        scheduleNextTip();
        installClickHandler();
    },

    componentWillUnmount: function () {
        clearTimeout(this.nextTipTimeout);
    },


    // Managed by makeCSS, no updating...
    shouldUpdateReactComponent: function () {
        return false;
    }
})