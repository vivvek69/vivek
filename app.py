from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get form data
        data = {
            'married': request.form['married'],
            'education': request.form['education'],
            'family': request.form['family'],
            'expenses': request.form['expenses'],
            'business': request.form['business'],
            'num_business': request.form['num_business'],
            'agriculture': request.form['agriculture']
        }
        
        # Mock prediction (Replace this with actual model prediction)
        prediction = predict_mental_health(data)
        
        return render_template('index.html', prediction=prediction)
    
    return render_template('index.html', prediction=None)

def predict_mental_health(data):
    # Mock prediction function, replace with actual model prediction logic
    # For example, you can use a pre-trained model and load it here
    return "No signs of mental health issues" if int(data['education']) > 5 else "Potential mental health issues"

if __name__ == '__main__':
    app.run(debug=True)
