import React from 'react';
import cn from 'classnames';
import styles from './Navbar.module.css';

interface INavbar {
    isExpanded: boolean;
    setIsExpanded: (boolean:boolean) => void;
    code: string;
}

const Navbar: React.FC<INavbar> = ({ isExpanded, setIsExpanded, code }) => {
  return (
    <div className={styles.nav}>
      <span
        className={cn(styles.expandButton, {
          'glyphicon glyphicon-list-alt': !isExpanded,
          'glyphicon glyphicon-remove': isExpanded,
        })}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      <span className={styles.code}>{code}</span>
    </div>
  );
};

export default Navbar;