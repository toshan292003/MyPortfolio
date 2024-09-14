import React, { useState, useEffect, useRef } from 'react';
import './gameoflife.css';

const GameOfLife = () => {

    const [isMouseDown, setIsMouseDown] = useState(false);
    const intervalRef = useRef(null); // To store the interval reference
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [started, setstarted] = useState(false);
    const [grid, setGrid] = useState(
        Array.from({ length: height }, () => Array(width).fill(0))
    );

    // Make sure to always create a new grid when width or height changes
    useEffect(() => {
        const newGrid = Array.from({ length: height }, () => Array(width).fill(0));
        setGrid(newGrid);
    }, [width, height]);

    const changeWidth = (e) => {
        setWidth(parseInt(e.target.value, 10)); // Convert the string value to a number
    };

    const changeHeight = (e) => {
        setHeight(parseInt(e.target.value, 10)); // Convert the string value to a number
    };

    const handleClick = (rowIdx, colIdx) => {
        if (grid[rowIdx][colIdx] === 1) return; // No need to update if the cell is already active
        const newGrid = grid.map((row, i) =>
            row.map((val, j) => (i === rowIdx && j === colIdx ? 1 : val))
        );
        setGrid(newGrid);
    };

    const handleMouseDown = (rowIdx, colIdx) => {
        setIsMouseDown(true);
        handleClick(rowIdx, colIdx);  // Toggle the button when mouse is initially pressed
    };

    const handleMouseEnter = (rowIdx, colIdx) => {
        if (isMouseDown) {
            handleClick(rowIdx, colIdx);  // Toggle the button when mouse is dragging
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);  // Stop toggling once mouse is released
    };

    const startGame = () => {
        setstarted(true);
        if (intervalRef.current) return; // Prevent multiple intervals
        intervalRef.current = setInterval(() => {

            setGrid((prevGrid) => {
                const newGrid = prevGrid.map((row) => [...row]);
                const test = prevGrid.map((row) => [...row]);

                for (let i = 0; i < newGrid.length; i++) {
                    for (let j = 0; j < newGrid[i].length; j++) {
                        let counter = 0;

                        // Add boundary checks using dynamic width and height
                        if (i > 0 && j > 0 && test[i - 1][j - 1] === 1) counter++;
                        if (i > 0 && test[i - 1][j] === 1) counter++;
                        if (j > 0 && test[i][j - 1] === 1) counter++;
                        if (i + 1 < height && j + 1 < width && test[i + 1][j + 1] === 1) counter++;
                        if (i + 1 < height && test[i + 1][j] === 1) counter++;
                        if (j + 1 < width && test[i][j + 1] === 1) counter++;
                        if (i + 1 < height && j > 0 && test[i + 1][j - 1] === 1) counter++;
                        if (i > 0 && j + 1 < width && test[i - 1][j + 1] === 1) counter++;

                        // Game of Life logic
                        if (test[i][j] === 0 && counter === 3) {
                            newGrid[i][j] = 1;
                        } else if (test[i][j] === 1 && (counter < 2 || counter > 3)) {
                            newGrid[i][j] = 0;
                        }
                    }
                }

                return newGrid;
            });
        }, 50);
    };

    const stopReverting = () => {
        setstarted(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Clear the interval reference
    };

    const resetBoard = () => {
        setstarted(false);
        stopReverting();
        const newGrid = Array.from({ length: height }, () => Array(width).fill(0)); // Use height for the outer array, width for the inner
        setGrid(newGrid);
    };

    // Cleanup the interval when the component unmounts
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className='Game-of-life'>
            <h1>Welcome to Toshi's Game of Life</h1>
            <section>
                <span>Move these sliders to change grid size</span>
                <p>
                    Width
                    <input type="range" min="1" max="100" value={width} onChange={changeWidth} />
                    Height
                    <input type="range" min="1" max="70" value={height} onChange={changeHeight} />
                </p>
                <span>Draw something on the grid and click on start!</span>
                <p>
                    <b> 
                        Start
                        <button onClick={startGame} className="start-button"></button>
                    </b>
                    <b>
                        Stop
                        <button onClick={stopReverting} className="stop-button"></button>
                    </b>
                    <b>
                        Reset
                        <button onClick={resetBoard} className="reset-button"></button>
                    </b>
                </p>
                {
                    started === true ?
                        <>
                            <i>The game has started, you cannot draw untill you reset.</i>
                        </>
                        :
                        (<><br /></>)
                }
            </section>
            <div
                className="button-grid"
                style={{
                    gridTemplateColumns: `repeat(${grid[0].length}, 20px)`, // 20px per button width
                    gridTemplateRows: `repeat(${grid.length}, 20px)`, // 20px per button height
                }}
                onMouseUp={handleMouseUp}  // Stop dragging when mouse is released
                onMouseLeave={handleMouseUp}  // Ensure dragging stops when mouse leaves the grid
            >
                {grid.map((row, rowIdx) =>
                    row.map((value, colIdx) => (
                        <button
                            key={`${rowIdx}-${colIdx}`}
                            className={`grid-button ${value === 1 ? 'active' : ''}`}
                            onMouseDown={() => handleMouseDown(rowIdx, colIdx)}
                            onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
                        >
                        </button>
                    ))
                )}
            </div>
        </div>
    );
};

export default GameOfLife;
