import spacy

nlp = spacy.load("en_core_web_sm")

def analyze_query(user_query):
    doc = nlp(user_query)
    keywords = [token.lemma_ for token in doc if not token.is_stop]
    response = "I'm here to help with finance! Try asking about 'savings' or 'expenses'."
    return response
