import {useState} from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOption/FeedbackOption.jsx';
import Notification from 'components/Notification/Notification.jsx';
import Statistics from './Statistic/Statistic.jsx';

export default function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const onLeaveFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;
        default:
          break;
      }
     }

    const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const FeedbackProcentage = countPositiveFeedbackPercentage();

   return (
     <div style={{
       padding: '0 15px',
       marginRight: 'auto',
       marginLeft: 'auto',
       width: '600px',
       border: '5px solid #679186',
     }}>
      <Section  title="Please leave feedback">
        <FeedbackOptions
          options={ Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section>
        {totalFeedback === 0 ? (<Notification message="There is no feedback"/>) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={FeedbackProcentage}
          />
        )}
      </Section>
    </div>
  );
}

