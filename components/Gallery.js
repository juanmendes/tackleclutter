import React from 'react'
export default function () {
    var imgs = [
        [
            "linencloset-mendes-before.jpg",
            "linencloset-mendes-after.jpg"
        ],
        [
            "basement-stasior-before.JPG",
            "basement-stasior-after.JPG"
        ],
        [
            "outdoorcabinet-before.JPG",
            "outdoorcabinet-after.JPG"
        ],
        [
            "pressler-closet-before.jpg",
            "pressler-closet-after.jpg"
        ],
        [
            "garage1-piette-before.JPG",
            "garage1-piette-after.JPG"
        ],
        [
            "garage2-piette-before.JPG",
            "garage2-piette-after.JPG"
        ],
        [
            "giftcloset-piette-before.JPG",
            "giftcloset-piette-after.JPG"
        ],
        [
            "esther-closet1-before.jpg",
            "esther-closet1-after.jpg"
        ],
        [
            "esther-closet2-before.jpg",
            "esther-closet2-after.jpg"
        ],
        [
            "workoutroom-osler-before.JPG",
            "workoutroom-osler-after.JPG"
        ],
        [
            "Basement_Before.jpg",
            "Basement_After.jpg"
        ],
        [
            "Bike_Room_Before.jpg",
            "Bike_Room_After.jpg"
        ],
        [
            "3W_Before.jpg",
            "3W_After.jpg"
        ],
        [
            "walkinclosetbefore1.jpg",
            "walkinclosetafter1.jpg"
        ],
        [
            "walkinclosetbefore2.jpg",
            "walkinclosetafter2.jpg"
        ],
        [
            "walkinclosetbefore3.jpg",
            "walkinclosetafter3.jpg"
        ],
        [
            "walkinclosetbefore4.jpg",
            "walkinclosetafter4.jpg"
        ]
    ];

    const bedroomImages = [
        [
            "esther-desk-before.jpg",
            "esther-desk-after.jpg"
        ],
        [
            "esther-bedroom1-before.jpg",
            "esther-bedroom1-after.jpg"
        ],
        [
            "esther-bedroom2-before.jpg",
            "esther-bedroom2-after.jpg"
        ],
        [
            "esther-bedroom3-before.jpg",
            "esther-bedroom3-after.jpg"
        ]
    ];
    const noBeforeAfterImages = [
        [
            "babydrawer-osler-after.JPG",
            "babyshelf2-osler-after.JPG"
        ]
    ];


    function showImages(images, showBeforeAfter) {
        return images.map(imgSet => (
            <div className="row">
                <div className="col-md-5 col-md-offset-1">
                <span>
                  <img src={`/img/gallery/${imgSet[0]}`}/>
                    {showBeforeAfter ? <div className="gallery-text">Before</div> : ''}
                </span>
                </div>
                <div className="col-md-5">
                <span>
                  <img src={`/img/gallery/${imgSet[1]}`}/>
                    {showBeforeAfter ? <div className="gallery-text">After</div> : ''}
                </span>
                </div>
            </div>
        ));
    }

    return (
        <div className="gallery">
            <h3 className="first">Tackle Clutter Projects</h3>
            <hr />

            {showImages(imgs, true)}
            <hr />
            {showImages(noBeforeAfterImages)}
            <h3>Makeover Projects</h3>
            <hr />
            {showImages(bedroomImages, true)}
        </div>
    );

}