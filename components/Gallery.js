import React from 'react'
export default function() {
    var imgs = [
        [
            "basement-stasior-before.JPG",
            "basement-stasior-after.JPG"
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
            "workoutroom-osler-before.JPG",
            "workoutroom-osler-after.JPG"
        ]
    ];

    return <div className="gallery">
        <h3 className="first">Tacke Clutter Projects</h3>
        <hr />

        {imgs.map(imgSet=>(
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <span>
                    <img src={`/img/gallery/${imgSet[0]}`}/>
                    <div className="gallery-text">Before</div>
                </span>
            </div>
            <div className="col-md-5">
                <span>
                    <img src={`/img/gallery/${imgSet[1]}`} />
                    <div className="gallery-text">After</div>
                </span>
            </div>
            <div className="col-md-1"></div>
        </div>
    ))}</div>;
}