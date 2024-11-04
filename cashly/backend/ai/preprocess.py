import pandas as pd

def preprocess_data(transactions):
    df = pd.DataFrame(transactions)
    df['date'] = pd.to_datetime(df['date'])
    df.sort_values('date', inplace=True)
    return df
