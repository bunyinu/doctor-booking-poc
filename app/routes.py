from flask import render_template, request, redirect, url_for, flash
from . import db
from .models import Appointment, Document, Payment
import boto3
import stripe

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/book-appointment', methods=['GET', 'POST'])
def book_appointment():
    if request.method == 'POST':
        # Booking logic here
        flash('Appointment booked successfully!')
        return redirect(url_for('index'))
    return render_template('booking.html')

@app.route('/upload-document', methods=['GET', 'POST'])
def upload_document():
    if request.method == 'POST':
        # Document upload logic here
        flash('Document uploaded successfully!')
        return redirect(url_for('index'))
    return render_template('upload.html')

@app.route('/process-payment', methods=['GET', 'POST'])
def process_payment():
    if request.method == 'POST':
        # Payment processing logic here
        flash('Payment processed successfully!')
        return redirect(url_for('index'))
    return render_template('payment.html')

