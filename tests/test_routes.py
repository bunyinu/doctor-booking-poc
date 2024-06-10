import unittest
from app import create_app, db

class RoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_book_appointment(self):
        response = self.client.post('/book-appointment', data={
            'user_id': 1,
            'doctor_id': 2,
            'appointment_time': '2024-06-15T14:00:00'
        })
        self.assertEqual(response.status_code, 200)
        self
