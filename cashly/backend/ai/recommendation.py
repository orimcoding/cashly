import pandas as pd

def generate_spending_insights(transactions):
    df = pd.DataFrame(transactions)
    insights = {
        "total_spent": df['amount'].sum(),
        "highest_category": df['category'].value_counts().idxmax(),
        "average_spending": df['amount'].mean(),
    }
    return insights
