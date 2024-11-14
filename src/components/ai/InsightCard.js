import React from 'react';

function InsightCard({ title, description, icon }) {
    return (
        <div className="insight-card">
            <img src={icon} alt={`${title} icon`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default InsightCard;
