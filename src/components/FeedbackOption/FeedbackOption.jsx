
import PropTypes from 'prop-types';

import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(options).map(option => {
        return (
          <li className={styles.item} key={option}>
            <button
              className={styles.button}
              type="button"
        onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
