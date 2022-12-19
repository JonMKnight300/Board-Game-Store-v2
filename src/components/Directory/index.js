import React from 'react';
import FamilyGame from '../../assets/familygame.jpg'
import StrategyGame from '../../assets/strategygame.jpg'
import './styles.scss';

const Directory = props =>
{
    return (
        <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url(${FamilyGame})`
            }}
                >
                    <a>
                        Shop Family Games
                    </a>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${StrategyGame})`
            }}
                >
                    <a>
                        Shop Strategy Games
                    </a>
          </div>
        </div>
      </div>
    );
};

export default Directory;