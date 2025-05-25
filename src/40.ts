import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier

data = {
    'class': ['A', 'B', 'C', 'D'],
    'age': [18, 25, 30, 40],
    'gender': ['male', 'female', 'male', 'female']
}

df = pd.DataFrame(data)

# Create a DecisionTreeClassifier
clf = DecisionTreeClassifier(random_state=42)

# Train the classifier on the data
clf.fit(df[['age', 'gender']], df['class'])

# Predict the class for new data
new_data = {
    'age': [30, 50],
    'gender': ['male', 'female']
}
predicted_class = clf.predict(new_data)

predicted_class
