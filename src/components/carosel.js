import React, { useState, useEffect } from 'react';

const Carousel = () => {
    // 5 total items
    const items = [
        { id: 1, name: 'Thing 1', description: 'First item' },
        { id: 2, name: 'Thing 2', description: 'Second item' },
        { id: 3, name: 'Thing 3', description: 'Third item' },
        { id: 4, name: 'Thing 4', description: 'Fourth item' },
        { id: 5, name: 'Thing 5', description: 'Fifth item' }
    ];

    // State to track which items are currently visible (always 3 items)
    const [visibleItems, setVisibleItems] = useState([0, 1, 2]); // Indices of visible items
    const [autoRotate, setAutoRotate] = useState(true);

    // Function to shift items by one position
    const shiftRight = () => {
        setVisibleItems(prev => {
            // For each visible index, move to the next item (wrap around at 5)
            return prev.map(index => (index + 1) % 5);
        });
    };

    const shiftLeft = () => {
        setVisibleItems(prev => {
            // For each visible index, move to the previous item (wrap around at 5)
            return prev.map(index => (index - 1 + 5) % 5);
        });
    };

    // Auto-rotate effect
    useEffect(() => {
        if (!autoRotate) return;
        
        const interval = setInterval(() => {
            shiftRight();
        }, 2000); // Rotate every 2 seconds

        return () => clearInterval(interval);
    }, [autoRotate]);

    return (
        <div className="container mt-4">
            
            <div className="flex-row d-flex justify-content-center align-items-center mb-3">
                {/* Left arrow */}
                <button 
                    className="btn btn-outline-primary me-3" 
                    onClick={shiftLeft}
                >
                    ←
                </button>
                
                {/* Visible items */}
                <div className="d-flex" style={{ minHeight: '150px' }}>
                    {visibleItems.map((itemIndex, idx) => (
                        <div 
                            key={items[itemIndex].id} 
                            className="border p-3 mx-2 bg-light"
                            style={{ 
                                width: '200px',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <h5>{items[itemIndex].name}</h5>
                            <p className="mb-1">{items[itemIndex].description}</p>
                            <small className="text-muted">Position {idx + 1}</small>
                        </div>
                    ))}
                </div>
                
                {/* Right arrow */}
                <button 
                    className="btn btn-outline-primary ms-3" 
                    onClick={shiftRight}
                >
                    →
                </button>
            </div>

            {/* Controls */}
            <div className="d-flex justify-content-center mt-3">
                <div className="form-check form-switch me-4">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoRotate"
                        checked={autoRotate}
                        onChange={() => setAutoRotate(!autoRotate)}
                    />
                    <label className="form-check-label" htmlFor="autoRotate">
                        Auto-rotate (2s)
                    </label>
                </div>
                
                <div className="btn-group">
                    <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                            setVisibleItems([0, 1, 2]);
                        }}
                    >
                        Reset to start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;