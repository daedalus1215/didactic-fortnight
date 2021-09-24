import React from 'react';
import cn from 'classnames';
import styles from './Navbar.module.css';

interface INavbar {
    isExpanded: boolean;
    setIsExpanded: (boolean:boolean) => void;
}

const Navbar: React.FC<INavbar> = ({isExpanded, setIsExpanded}) => {
    return (
      <div className={styles.nav}>
        <span
          className={cn(styles.expandButton, {
            'glyphicon glyphicon-list-alt': !isExpanded,
            'glyphicon glyphicon-remove': isExpanded,
          })}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
    );
};

export default Navbar;