
export default function Feedback({
    feedback,
    totalFeedback,
    positiveFeedback,
}) {
    return (
        <div>
            <h2>Feedback Statistic</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}</p>
        </div>
    )
}