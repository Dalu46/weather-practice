import './SeasonDisplay.css'
import React from "react";

function getSeason(lat, month) {
    if (month > 3 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'summer' : 'winter';
    }
}

const seasonConfig = {
    winter: {
        text: 'Burr, it\'s winter',
        iconName: 'snowflake'
    },
    summer: {
        text: 'Heyy, it\'s summer',
        iconName: 'sun'
    }
}

const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season];

    console.log(lat);
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{ text }</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    
};

export default SeasonDisplay; 