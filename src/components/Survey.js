import React, { useState } from 'react';

export default function Survey({ onReset }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thanks for your feedback!');
    onReset();
  };

  return (
    <form className="survey" onSubmit={handleSubmit}>
      <h2>How was your experience?</h2>
      <textarea
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        placeholder="Tell us what you think…"
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
