import React from 'react'
import {YouTubeVideo} from './widgets/YouTubeVideo'

import Layout from './layout/ContentAndImageOnRight'

export default function() {
    return <div>
        <h3 className="first">Tacke Clutter Videos</h3>
        <hr />
        <YouTubeVideo videoId="KH3m8TrBX2U"/>
        <YouTubeVideo videoId="qha8YmmF6VE"/>
        <YouTubeVideo videoId="DD-4H3wKYac"/>
    </div>
}