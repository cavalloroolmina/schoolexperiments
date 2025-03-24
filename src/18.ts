import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained('bert-base-chinese')
model = BertForSequenceClassification.from_pretrained('bert-base-chinese')

input_text = "your input text here"

inputs = tokenizer(input_text, return_tensors="pt", padding=True)
labels = torch.tensor([1])  # Replace with your actual labels

with torch.no_grad():
    outputs = model(**inputs)

predicted_probabilities = outputs.logits.round_()
predicted_labels = predicted_probabilities.argmax(dim=1).numpy()

print(f"Predicted Labels: {predicted_labels}")
