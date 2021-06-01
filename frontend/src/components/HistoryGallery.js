import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../stylesheets/gallery.css'
import bleach from '../images/gallery/bleach.jpg'
import hunter from '../images/gallery/hunter.png'
import naruto from '../images/gallery/naruto.jpg'
import bnh from '../images/gallery/bnh.jpg'
import haikyuu from '../images/gallery/haikyuu.jpg'
import lh from '../images/gallery/lh.jpeg'
import sailor from '../images/gallery/sailor.jpg'
import spirited from '../images/gallery/spirited.jpg'
import pnl from '../images/gallery/pnl.jpg'
import fate from '../images/gallery/fate.jpg'
import tf from '../images/gallery/thunder.jpg'

import React from 'react'

export default function HistoryGallery() {
    return (
        <div>
            <AwesomeSlider>
                <div className="fit" data-src={fate} />
                <div className="fit" data-src={lh} />
                <div className="fit" data-src={pnl} />
                <div className="fit" data-src={spirited} />
                <div className="fit" data-src={tf} />
                <div className="fit" data-src={haikyuu} />
                <div className="fit" data-src={bleach} />
                <div className="fit" data-src={hunter} />
                <div className="fit" data-src={sailor} />
                <div className="fit" data-src={naruto} />
                <div className="fit" data-src={bnh} />
            </AwesomeSlider>
            
        </div>
    )
}
