
import PropTypes from 'prop-types';

import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btnBlock}>
      {options.map(option => (
        <button
          className={styles.btnBlockItem}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};


FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
