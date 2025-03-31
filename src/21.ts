import numpy as np
from sklearn.model_selection import train_test_split

# Example data
data = [[1, 2], [3, 4], [5, 6]]
labels = [0, 1, 0]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data, labels, test_size=0.5)
