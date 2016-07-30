import React from 'react'
export default function() {
    var imgs = [
        [
            "basement-stasior-before.jpg",
            "basement-stasior-after.jpg"
        ],
        [
            "garage1-piette-before.jpg",
            "garage1-piette-after.jpg"
        ],
        [
            "garage2-piette-before.jpg",
            "garage2-piette-after.jpg"
        ],
        [
            "giftcloset-piette-before.jpg",
            "giftcloset-piette-after.jpg"
        ],
        [
            "workoutroom-osler-before.jpg",
            "workoutroom-osler-after.jpg"
        ]
    ];

    return <div className="gallery container">
        <h3>Tacke Clutter Projects</h3>
        <hr />

        {imgs.map(imgSet=>(
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <span style={{position: 'relative'}}>
                    <img src={`/img/gallery/${imgSet[0]}`}/>
                    <div className="gallery-text">Before</div>
                </span>
            </div>
            <div className="col-md-5">
                <span style={{position: 'relative'}}>
                    <img src={`/img/gallery/${imgSet[1]}`} />
                    <div className="gallery-text">After</div>
                </span>
            </div>
            <div className="col-md-1"></div>
        </div>
    ))}</div>;
}